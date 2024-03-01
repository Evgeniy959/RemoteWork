using Intro.Models;
using Intro.Services; 
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Intro.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IServicesCounter servicesCounter;

        public HomeController(ILogger<HomeController> logger , IServicesCounter servicesCounter)
        {
            _logger = logger;
            this.servicesCounter = servicesCounter;
        }

        public IActionResult Test()
        {

            return View();
        }


        public IActionResult Func()
        {

            return View();
        }

        public IActionResult Farid()
        {

            return View();
        }

        public IActionResult Index()
        {
            //var a = 10;
            //a = "Hello";


            //ViewBag.Name = "Farid";
            //ViewBag.Name = 10;
            //ViewBag.Name ='s'; 
            //ViewBag.Surname = "Abdullayev";

            //ViewData["Name"] = "Farid";
            //ViewData["Surname"] = "Abdullayev";

            Person person = new Person();
            person.Age = 26;
            person.Surname = "Abdullayev";
            person.Name = "Farid"; 

            return View(person);
        }
        public IActionResult IndexJson()
        {
            return Json("sss");
        }
        public IActionResult IndexContent()
        {
            return Content("Counter => " + servicesCounter.GetCounter());
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