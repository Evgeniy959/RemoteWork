using DBCrud.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DBCrud.Controllers
{
    public class PostController : Controller
    {
        private readonly BlogDbContext blogDbContext;

        public PostController(BlogDbContext blogDbContext )
        {
            this.blogDbContext = blogDbContext;
        }


        [HttpGet]
        public IActionResult Add()
        { 
            ModelState.AddModelError("Title", "99999");
            return View();
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View(blogDbContext.Posts.ToList());
        }

        [HttpPost]
      //  [ValidateAntiForgeryToken]
        public async Task<IActionResult> Add(Post post , IFormFile ImageUrl)
        {
            if (ImageUrl!=null)
            {
                var filename = $"{Guid.NewGuid()}{Path.GetExtension(ImageUrl.FileName)}";
                using var fs = new FileStream(@$"wwwroot/uploads/{filename}", FileMode.Create);
                await ImageUrl.CopyToAsync(fs);
                post.ImageUrl = @$"/uploads/{filename}";
            }


        //    if (ModelState.IsValid)
         //   {
                post.Date = DateTime.Now;

                blogDbContext.Posts.AddAsync(post);
                await blogDbContext.SaveChangesAsync();
                TempData["Status"] = "New post added!";
                return RedirectToAction("Index");
      //      }

         
            return View(post);
        }
    }
}
