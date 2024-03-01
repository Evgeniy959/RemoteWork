using Microsoft.AspNetCore.Mvc;
using MyAuthentication.Encryptors;
using MyAuthentication.Middlewares;
using MyAuthentication.Models;
using MyAuthentication.Services;
using MyAuthentication.ViewModel;
using System.Diagnostics;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;

namespace MyAuthentication.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly UsersDbContext usersDbContext;
        private readonly IUserManager userManager;

        public HomeController(ILogger<HomeController> logger, UsersDbContext usersDbContext,IUserManager userManager)
        {
            _logger = logger;
            this.usersDbContext = usersDbContext;
            this.userManager = userManager;
        }

        public IActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                if (userManager.Login(model.Login,model.Password))
                {
                    return RedirectToAction("Privacy", "Home");
                }
             
            }

            ModelState.AddModelError("all", "Incorrect username or password!");

            return View("Index", model);

        }

        [HttpGet]
        public IActionResult Registry()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Registry(RegistrationViewModel model)
        {
            if (ModelState.IsValid)
            {
               await usersDbContext.Users.AddAsync(new User
                {
                    Login = model.Login,
                    PasswordHash = Sha256Encryptor.Encrypt(model.Password),
                    IsAdmin = false
                });
                await usersDbContext.SaveChangesAsync();



                return RedirectToAction("Index", "Home");
            }
            return View(model);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}