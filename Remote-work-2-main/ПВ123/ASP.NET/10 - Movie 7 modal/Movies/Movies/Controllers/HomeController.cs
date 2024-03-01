using Microsoft.AspNetCore.Mvc;
using Movies.Models;
using Movies.Services;
using Movies.ViewModels;

namespace Movies.Controllers
{
    public class HomeController : Controller {
        private readonly IMovieApiService movieApiService;
        private readonly IRecentMoviesStorage recentMoviesStorage;

        public HomeController(IMovieApiService movieApiService , IRecentMoviesStorage recentMoviesStorage)
        {
            this.movieApiService = movieApiService;
            this.recentMoviesStorage = recentMoviesStorage;
        }

        public IActionResult Index()
        { 
            var recentsMovies = recentMoviesStorage.GetRecentMovies();
          //  Console.WriteLine(recentMoviesStorage.GetRecentMovies().Count()) ;
            return View(recentsMovies);
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
                    Response = result.Response,
                    SizePages = 10
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
            recentMoviesStorage.Add(result);
            Console.WriteLine("Ya zawel!!!!");
            //   Console.WriteLine(recentMoviesStorage.GetRecentMovies().Count());;
            return View(result);
        }

        public async Task<IActionResult> DetailModal(string id)
        {

            var result = await movieApiService.SearchByIdAsync(id);
            recentMoviesStorage.Add(result); 
            return PartialView("_MovieModalPartial", result);
        }
    }
}
