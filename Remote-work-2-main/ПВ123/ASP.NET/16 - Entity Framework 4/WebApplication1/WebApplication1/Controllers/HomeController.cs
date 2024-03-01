using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        private readonly BlogDbContext blogDbContext;

        public HomeController(BlogDbContext blogDbContext)
        {
            this.blogDbContext = blogDbContext;
        }

        public IActionResult Index()
        {
            return View(blogDbContext.Posts.Include(x=>x.PostTags).ThenInclude(x=>x.Tag));
        }

        [HttpGet]
        public IActionResult Add()
        {
            // ModelState.AddModelError("Title", "Prosto tak");
            //  ViewBag.categories = blogDbContext.Categories.ToList();
            ViewBag.categories = new SelectList(blogDbContext.Categories, "Id", "Name");
            ViewBag.tags = new MultiSelectList(blogDbContext.Tags, "Id", "Name");
            return View();
        }


        [HttpPost]
        public async Task<IActionResult> Add(Post post, int[] tags)
        {
            if (ModelState.IsValid)
            {
                post.Date = DateTime.Now;


                await blogDbContext.AddAsync(post);
                await blogDbContext.SaveChangesAsync();


                //for (int i = 0; i < tags.Length; i++)
                //{
                //    await blogDbContext.PostTags.AddAsync(new PostTag { TagId = tags[i], PostId = post.Id });
                //}

               await blogDbContext.PostTags.AddRangeAsync(tags.Select(x=>new PostTag { PostId = post.Id,TagId = x}));

                await blogDbContext.SaveChangesAsync();
                TempData["Status"] = "New Post added!";
                return RedirectToAction("Index", "Home");
            }

            return View(post);

        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult Detail(int id)
        {
            //var post = blogDbContext.Posts.Include(x => x.PostTags).ThenInclude(x => x.Tag).Where(x => x.Id == id);
            var post = blogDbContext.Posts.Include(x => x.PostTags).ThenInclude(x => x.Tag).Where(x => x.Id == id).FirstOrDefault();
            return View(post);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
