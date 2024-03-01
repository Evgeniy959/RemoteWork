using Microsoft.AspNetCore.Mvc;

namespace WebApplicationMVC.Controllers
{

    public class HomeController : Controller
    {

        //  /Home/Index
        public IActionResult Index()
        {
            //   return Content("Home -> Index");
            return View();
        }

        //Contacts
        public IActionResult Contacts()
        {
            return View();
           // return Content("Home -> Contacts");
        }

        //Contacts
        public IActionResult Time()
        {
            return Content("Home -> Time : " + DateTime.Now);
        }

        //Contacts
        public IActionResult Person()
        {
            return Json(new { Name = "Farid", Age = 27, Surname = "Abdullayev" });
        }
    }
}
