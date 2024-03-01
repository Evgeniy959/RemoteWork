using MyAuthentication.Encryptors;
using MyAuthentication.Middlewares;
using MyAuthentication.Models;
using System.Linq;
using System.Text.Json;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace MyAuthentication.Services
{
    public class UserManager : IUserManager
    {
        private readonly UsersDbContext userDbContext;
        private readonly IHttpContextAccessor httpContextAccessor;

        public UserManager(UsersDbContext userDbContext, IHttpContextAccessor httpContextAccessor)
        {
            this.userDbContext = userDbContext;
            this.httpContextAccessor = httpContextAccessor;
        }

        public UsersCredentials GetCredentials()
        {
            if (httpContextAccessor.HttpContext.Request.Cookies.ContainsKey("auth"))
            {
                var hash = httpContextAccessor.HttpContext.Request.Cookies["auth"];
                var json = AesEncryptor.DecryptString("b14ca5898a4e4133bbce2ea2315a1916", hash);
                return JsonSerializer.Deserialize<UsersCredentials>(json);
            }
            else
            {
                return null;
            }
        }

        public bool Login(string username, string password)
        {
            //CHECK
            var passwordHash = Sha256Encryptor.Encrypt(password);
            var user = userDbContext.Users.FirstOrDefault(x => x.Login == username && x.PasswordHash == passwordHash);
            if (user != null)
            {
                UsersCredentials usersCredentials = new UsersCredentials()
                {
                    IsAdmin = user.IsAdmin,
                    Login = user.Login
                };
                var json = JsonSerializer.Serialize(usersCredentials);
                var hash = AesEncryptor.EncryptString("b14ca5898a4e4133bbce2ea2315a1916", json);

                httpContextAccessor.HttpContext.Response.Cookies.Append("auth", hash);
                return true;
            }
            return false;
        }
    }
}
