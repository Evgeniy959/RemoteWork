using BlogWebsite.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogWebsite.Controllers
{
    public class HomeController : Controller
    {
        private readonly NewsPortalContext context;

        public HomeController(NewsPortalContext context)
        {
            this.context = context;
        }

        public ActionResult Index()
        {
            //context.Categories.Add(new Category { Name = "Test" });
            //context.SaveChanges();
            return View(context.Posts);
        }

        public ActionResult Post(int id)
        {
            return View(context.Posts.FirstOrDefault(x => x.Id == id));
        }
    }
}
