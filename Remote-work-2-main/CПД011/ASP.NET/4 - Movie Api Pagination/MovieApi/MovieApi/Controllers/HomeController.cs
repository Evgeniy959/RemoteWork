using Microsoft.AspNetCore.Mvc;
using MovieApi.Models;
using MovieApi.Services;
using MovieApi.ViewModel;
using System.Diagnostics;

namespace MovieApi.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IMovieApiService movieApiService;

        public HomeController(ILogger<HomeController> logger, IMovieApiService movieApiService)
        {
            _logger = logger;
            this.movieApiService = movieApiService;
        }


        public IActionResult Index()
        {
            return View();
        }


        public async Task<IActionResult> Search(string movieTitle,int page = 1)
        {
           // ViewBag.MovieTitle = movieTitle;
            var result = await movieApiService.SearchByTitle(movieTitle, page);
         
            //ViewBag.TotalResults = result.TotalResults;
            //ViewBag.TotalPages = Math.Ceiling(result.TotalResults / 10.0);
            //   ViewBag.CurentPage = page;
            //     ViewBag.MovieTitle = result?.Movies.FirstOrDefault()?.Title;



            SearchViewModel searchViewModel = new SearchViewModel()
            {
                CurrentPage = page,
                Title = movieTitle,
                Movies = result.Movies,
                TotalPages = (int)Math.Ceiling(result.TotalResults / 10.0),
                TotalResults = result.TotalResults
        };


            return View(searchViewModel);
        }

        public async Task<IActionResult> Movie(string id)
        { 
            Movie movie = await movieApiService.SearchById(id); 
            Console.WriteLine("9999999999999999999 => " + id);
            //read detail 
            return View(movie);
        }


        public IActionResult Privacy()
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