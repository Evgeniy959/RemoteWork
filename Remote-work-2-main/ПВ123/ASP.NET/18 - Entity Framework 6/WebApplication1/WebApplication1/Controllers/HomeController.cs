using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using WebApplication1.Extension;
using WebApplication1.Helpers;
using WebApplication1.Models;
using WebApplication1.ViewModels;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        private readonly BlogDbContext blogDbContext;

        public HomeController(BlogDbContext blogDbContext)
        {
            this.blogDbContext = blogDbContext;
        }

        public IActionResult Index(int page = 1)
        {
            var homeindexViewModel = new HomeIndexViewModel
            {
                Posts = blogDbContext.Posts.Include(x => x.PostTags).ThenInclude(x => x.Tag).Include(x => x.Category),
                Categories = blogDbContext.Categories,
                Tags = blogDbContext.Tags,
           //     RecentPost = blogDbContext.Posts.OrderByDescending(x => x.Date).Take(3)
                RecentPost = blogDbContext.Posts.OrderByDescending(x => x.Id).Take(3),
                CurentPages = page,
                TotalPages = 10
            };


            return View(homeindexViewModel);
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
        public async Task<IActionResult> Add(Post post,IFormFile ImageUrl, int[] tags)
        {
            if (ModelState.IsValid)
            {
                if (ImageUrl!=null)
                {
                   var path =  await FileUploadHelper.UploadAsync(ImageUrl);
                    post.ImageUrl = path;
                }

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

        [HttpGet]
        public IActionResult Edit(int id)
        {
            var post = blogDbContext.Posts.Find(id);

            var selectedTagsId = blogDbContext.PostTags.Where(x => x.PostId == post.Id).Select(x=>x.TagId);

            ViewBag.categories = new SelectList(blogDbContext.Categories, "Id", "Name");
            ViewBag.tags = new MultiSelectList(blogDbContext.Tags, "Id", "Name", selectedTagsId);

            // var post = blogDbContext.Posts.Include(x => x.PostTags).ThenInclude(x => x.Tag).FirstOrDefault(X => X.Id == id);
            return View(post);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(Post post,IFormFile Image, int[] tags)
        {
            if (Image != null)
            {
                var path = await FileUploadHelper.UploadAsync(Image);
                post.ImageUrl = path;
            }

            post.Date = DateTime.Now;
           blogDbContext.Posts.Update(post);

            await blogDbContext.SaveChangesAsync();

            //PostTag[] postTags = blogDbContext.PostTags.Where(x => x.PostId == post.Id).ToArray(); ;
            //blogDbContext.PostTags.RemoveRange(postTags); 
            //await blogDbContext.PostTags.AddRangeAsync(tags.Select(x => new PostTag { PostId = post.Id, TagId = x }));

            var postWithTags = blogDbContext.Posts.Include(x => x.PostTags).FirstOrDefault(x => x.Id == post.Id);
         //   postWithTags.Select()


            blogDbContext.UpdateManyToMany(
                postWithTags.PostTags,
                tags.Select(x => new PostTag { PostId = post.Id, TagId = x }),
                x=>x.TagId
                );


            await blogDbContext.SaveChangesAsync();


            TempData["Status"] = "Post " + post.Title + " update!";
            return RedirectToAction("Index", "Home");

        }

        [HttpGet]
        public IActionResult Delete(int id)
        {
            var post = blogDbContext.Posts.Find(id);
            return View(post);
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ConfirmDelete(int id)
        {
            var post = blogDbContext.Posts.Find(id);
            blogDbContext.Posts.Remove(post);
            await blogDbContext.SaveChangesAsync();
            TempData["Status"] = "Post " + post.Title + " deleted!";
            return RedirectToAction("Index", "Home");
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
