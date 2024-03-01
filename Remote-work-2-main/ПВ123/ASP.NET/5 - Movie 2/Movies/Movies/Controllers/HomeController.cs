using Microsoft.AspNetCore.Mvc;
using Movies.Models;
using Movies.Services;

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
        public async Task<IActionResult> Search(string title)
        {
            //HttpClient client = new HttpClient();
            //var response = await client.GetAsync($"https://omdbapi.com/?s={title}%20man&apikey=5b9b7798");
            //var result = await response.Content.ReadAsStringAsync();

            //ViewBag.MovieTitle = title;
            //ViewBag.Result = result;
            //   MovieApiService movieApiService = new MovieApiService();

            MovieApiResponse result = null;
            try
            {

                ViewBag.MovieTitle = title;
                 result = await movieApiService.SearchByTitleAsync(title);
            }
            catch (Exception ex)
            {
                //logirovanie
            }
            return View(result);
        }

        public async Task<IActionResult> Detail(string id)
        {
            var result = await movieApiService.SearchByIdAsync(id); Console.WriteLine("ZAWEL");
            return View(result);
        }
    }
}
