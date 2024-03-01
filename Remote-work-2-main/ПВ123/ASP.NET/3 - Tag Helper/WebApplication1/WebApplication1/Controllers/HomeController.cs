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
            Console.WriteLine("Hello");
            return View();
        }

        public IActionResult Index(string text= "No name")
        {
            ViewBag.Text = text;

           var person =  new Person() { Id = 1, Name = "Farid",Surname = "Abdullayev" };


            //return View("About");
           // return RedirectToAction("About");
           return View(person);


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

        public IActionResult Error(int id = 500)
        {
            ViewBag.ErrorId = id;
            return View();
        }
    }
}