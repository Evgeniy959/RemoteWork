using Movies.Models;
using System.Collections.Concurrent;

namespace Movies.Services
{
    public class RecentMoviesStorage : IRecentMoviesStorage
    {
        ConcurrentQueue<Movie> _recentMovies = new ConcurrentQueue<Movie>();
        public void Add(Movie movie)
        {
            if (!_recentMovies.Contains(movie))
                _recentMovies.Enqueue(movie);

            if (_recentMovies.Count >4)
                  _recentMovies.TryDequeue(out Movie trash);
           
        }

        public IEnumerable<Movie> GetRecentMovies()
        {
           return this._recentMovies.Take(4);
        }
    }
}
