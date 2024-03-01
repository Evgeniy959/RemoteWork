using Microsoft.AspNetCore.Mvc;
using Movies.Models;
using Movies.Services;
using Movies.ViewModels;

namespace Movies.Controllers
{
    public class HomeController : Controller {
        private readonly IMovieApiService movieApiService;

        public HomeController(IMovieApiService movieApiService)
        {
            this.movieApiService = movieApiService;
        }

        public IActionResult Index()
        {
            return View();
        }
        public async Task<IActionResult> Search(string title,int page = 1)
        {

            SearchViewModel model = null;
            try
            {
                
                var result = await movieApiService.SearchByTitleAsync(title,page);

                model = new SearchViewModel
                {
                    Movies = result.Movies,
                    Title = title,
                    CurrentPage = page,
                    TotalPages = (int)Math.Ceiling(int.Parse(result.totalResults) / 10.0),
                    TotalResults = int.Parse(result.totalResults),
                    Response = result.Response
                };

                //ViewBag.CurrentPage = page;
                //ViewBag.MovieTitle = title;
                //ViewBag.TotalResults = int.Parse(result.totalResults); // count movie
                //ViewBag.TotalPages = Math.Ceiling(int.Parse(result.totalResults) / 10.0);

            }
            catch (Exception ex)
            { 
            }
            return View(model);
        }

        public async Task<IActionResult> Detail(string id)
        {
            var result = await movieApiService.SearchByIdAsync(id);
            Console.WriteLine("Zawel");
            return View(result);
        }
    }
}
