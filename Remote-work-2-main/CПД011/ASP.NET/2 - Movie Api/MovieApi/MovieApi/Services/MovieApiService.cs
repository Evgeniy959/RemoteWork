using MovieApi.Models;
using System.Text.Json;

namespace MovieApi.Services
{
	public class MovieApiService: IMovieApiService
	{
		public string BaseUrl { get; }
		public string ApiKey { get; }
		private HttpClient httpClient;
		public MovieApiService(IHttpClientFactory httpClientFactory)
		{
			BaseUrl = "https://omdbapi.com/";
			ApiKey = "5b9b7798";
			httpClient = httpClientFactory.CreateClient();
		}

		public async Task<MovieApiResponse> SearchByTitle(string title)
		{
			var response = await httpClient.GetAsync($"{BaseUrl}?apikey={ApiKey}&s={title}");
			var json = await response.Content.ReadAsStringAsync();
			var result = JsonSerializer.Deserialize<MovieApiResponse>(json);

			return result;
		}
	}


}
//https://omdbapi.com/?apikey=5b9b7798&s={title}