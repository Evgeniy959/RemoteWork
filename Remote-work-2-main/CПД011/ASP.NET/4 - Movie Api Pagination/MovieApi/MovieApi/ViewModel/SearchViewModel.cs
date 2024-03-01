using MovieApi.Models;

namespace MovieApi.ViewModel
{
    public class SearchViewModel
    {
        public IEnumerable<Movie> Movies { get; set; }
        public string Title { get; set; }
        public int TotalResults { get; set; }
        public int CurrentPage { get; set; }
        public int TotalPages { get; set; } 

    }
}
