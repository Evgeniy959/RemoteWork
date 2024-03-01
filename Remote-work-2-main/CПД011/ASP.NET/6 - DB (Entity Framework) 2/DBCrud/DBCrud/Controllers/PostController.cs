using DBCrud.Helpers;
using DBCrud.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace DBCrud.Controllers
{
    public class PostController : Controller
    {
        private readonly BlogDbContext blogDbContext;
        private readonly IEmailSender emailSender;

        public PostController(BlogDbContext blogDbContext ,IEmailSender emailSender)
        {
            this.blogDbContext = blogDbContext;
            this.emailSender = emailSender;
        }


        [HttpGet]
        public IActionResult Add()
        {
            //  ModelState.AddModelError("Title", "99999");
            ViewBag.Categories = new SelectList(blogDbContext.Categories, "Id", "Name"); ;
            ViewBag.Tags = new MultiSelectList(blogDbContext.Tags, "Id", "Name"); ;
            return View();
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View(blogDbContext.Posts.Include(x=>x.Category).ToList());
        }

        [HttpPost]
      //  [ValidateAntiForgeryToken]
        public async Task<IActionResult> Add(Post post , IFormFile ImageUrl, int[] tags)
        { 
            try
            {
               post.ImageUrl =  await FileUploadHelper.Upload(ImageUrl);
            }
            catch (Exception)  { }

            //      if (ModelState.IsValid)
            //   {



            post.Date = DateTime.Now;

                await blogDbContext.Posts.AddAsync(post);
                await blogDbContext.SaveChangesAsync();
                TempData["Status"] = "New post added!";



            //foreach (int item in tags)
            //{
            //    blogDbContext.PostTags.Add(new PostTag { PostId = post.Id, TagId = item });
            //}


            blogDbContext.PostTags.AddRange(tags.Select(x => new PostTag { PostId = post.Id, TagId = x }));







            //List<int> arr1 = new List<int>() { 1,2,3,4,5};
            //List<int> arr2 = new List<int>() { 1,2,3,4,5,6};


            //arr1.AddRange(,);

            await blogDbContext.SaveChangesAsync();

            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.Append("<h1>Hello dear clients</h1>");
            stringBuilder.Append("<ol>");
            foreach (var item in tags)
            {
                stringBuilder.Append($"<li>{blogDbContext.Tags.Where(x => x.Id == item).FirstOrDefault().Name}</li>");
            }
            stringBuilder.Append("</ol>");
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            stringBuilder.Append(post.Title);
            await emailSender.SendEmailAsync("fabdullayev902@gmail.com", "Test test", stringBuilder.ToString());

            return RedirectToAction("Index");
      //       }

         
            return View(post);
        }
    }
}
