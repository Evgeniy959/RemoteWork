using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
   //public class Person
   // {
   //     public int Id { get; set; }
   //     public string Name { get; set; }
   //     public Person()
   //     {

   //     }

   //     public override string ToString()
   //     {
   //         return Name;
   //     }
   // }
    public class HomeController : Controller
    {

      
        public IActionResult Search(string searchText)
        {
            ViewBag.SearchText = searchText;
            return View();
        }


        public IActionResult About(Person person)
        {
            ViewBag.Person = person;
            return View();
        }

        public IActionResult Index(string text= "No name")
        {
            ViewBag.Text = text;

            //Person person = new Person();
            //person.Name;





            //ViewData["Phone"] = "+994519999902";

            //ViewData["Name"] = "Farid";
            //ViewData["Person"] = new Person() { Id = 1 , Name = "Farid"};

            //ViewBag.Person = new Person() { Id = 1, Name = "Farid" };;
            //ViewBag.MyName = "My name is Farid";


            //TempData["name"] = "Farid";
            //TempData["gender"] = true;



            //Person person = new Person();
            //Person person1 = new Person();
            //Person person2 = new Person();
            //Person person3 = new Person();
            //Person person4 = new Person();
            //Person person5 = new Person();
            //Person person6 = new Person();



            //Person personz = new Person();
            //personz = new Person();
            //personz = new Person();
            //personz = new Person();
            //personz = new Person();
            //personz = new Person();
            //personz = new Person();


            //dynamic
            //    var

            // var ok;
            //dynamic ok1;
            //ok1 = "Farid";
            //ok1 = 10;

         //   TempData["message"] = "Nice, you triggered this alert message!";
         

            return View();
        }

        public IActionResult Privacy()
        {
           // ViewBag.Data = new List<string>() { "One", "Two", "Three" };
            return View();
        }
        public IActionResult Test()
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