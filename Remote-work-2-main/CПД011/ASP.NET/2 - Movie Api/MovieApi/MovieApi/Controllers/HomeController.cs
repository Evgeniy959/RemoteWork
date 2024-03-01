using Microsoft.AspNetCore.Mvc;
using MovieApi.Models;
using MovieApi.Services;
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


        public async Task<IActionResult> Search(string title )
        {
            var result = await movieApiService.SearchByTitle(title); 
            ViewBag.Result = result;
            ViewBag.MovieTitle = title; 
            return View(result);
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