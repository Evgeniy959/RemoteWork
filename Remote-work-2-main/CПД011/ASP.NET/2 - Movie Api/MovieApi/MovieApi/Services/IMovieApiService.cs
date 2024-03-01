using MovieApi.Models;

namespace MovieApi.Services
{
	public interface IMovieApiService
	{
		string ApiKey { get; }
		string BaseUrl { get; }

		Task<MovieApiResponse> SearchByTitle(string title);
	}
}