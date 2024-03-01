using Microsoft.AspNetCore.Mvc;
using Movies.Services;

namespace Movies.Controllers
{
    public class HomeController : Controller { 
    

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
            MovieApiService movieApiService = new MovieApiService();

            ViewBag.MovieTitle = title;
            ViewBag.Result =await movieApiService.SearchByTitle(title);
            return View();
        }

        public IActionResult Details(string imdbId)
        {
            return View();
        }
    }
}
