using Movies.Models;

namespace Movies.Services
{
    public interface IRecentMoviesStorage
    {
        IEnumerable<Movie> GetRecentMovies();
        void Add(Movie movie);
    }
}
