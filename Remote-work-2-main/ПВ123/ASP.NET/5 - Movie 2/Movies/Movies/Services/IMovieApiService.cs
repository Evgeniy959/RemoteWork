using Movies.Models;

namespace Movies.Services
{
    public interface IMovieApiService
    {
        Task<MovieApiResponse> SearchByTitleAsync(string title);
        Task<Movie> SearchByIdAsync(string id);
    }
}