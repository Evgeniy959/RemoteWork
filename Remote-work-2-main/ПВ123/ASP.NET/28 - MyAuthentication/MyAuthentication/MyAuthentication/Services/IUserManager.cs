using MyAuthentication.Models;

namespace MyAuthentication.Services
{
    public interface IUserManager
    {
        bool Login(string username, string password);
        UsersCredentials GetCredentials();
    }
}
