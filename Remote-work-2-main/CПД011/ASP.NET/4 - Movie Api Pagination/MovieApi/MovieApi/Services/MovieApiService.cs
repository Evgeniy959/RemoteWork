using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using MovieApi.Models;
using MovieApi.Options;
using Newtonsoft.Json;
using System.Text.Json;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace MovieApi.Services
{
	public class MovieApiService: IMovieApiService
	{ 
		private HttpClient httpClient;
        private readonly IMemoryCache memoryCache;

        public string ApiKey { get ; set ; }
        public string BaseUrl { get ; set ; }

        public MovieApiService(IHttpClientFactory httpClientFactory,IOptions<MovieApiOptions> options,IMemoryCache memoryCache)
		{
			//BaseUrl = "https://omdbapi.com/";
			//ApiKey = "5b9b7798";

			BaseUrl = options.Value.BaseUrl;
			ApiKey = options.Value.ApiKey;
			httpClient = httpClientFactory.CreateClient();
            this.memoryCache = memoryCache;
        }

		public async Task<MovieApiResponse> SearchByTitle(string title,int page)//hulk 1, hulk 2 , hulk 3
		{
			MovieApiResponse result = null;
			//hulk,Hulk,HULK,HULk =>hulk
			string search = title.ToLower();

	///	 if (!memoryCache.TryGetValue($"{search}_page{page}", out result))
      //    {
				var response = await httpClient.GetAsync($"{BaseUrl}?apikey={ApiKey}&s={title}&page={page}");
				var json = await response.Content.ReadAsStringAsync();
			//result = JsonConvert.DeserializeObject<MovieApiResponse>(json);
			result = JsonSerializer.Deserialize<MovieApiResponse>(json);

			if (result.Response == "False")
				{
					throw new Exception(result.Error);
				}
				
		 //	memoryCache.Set($"{search}_page{page}", result);
          // }  

			return result;
		}

        public async Task<Movie> SearchById(string id)
        {
			//https://omdbapi.com/?i=tt028ff6716&apikey=5b9b7798

			Movie result = null;

			///if (!memoryCache.TryGetValue(id, out result))
			//{

				var response = await httpClient.GetAsync($"{BaseUrl}?apikey={ApiKey}&i={id}");
				var json = await response.Content.ReadAsStringAsync();
				result = JsonSerializer.Deserialize<Movie>(json);

				if (result.Response == "False")
				{
					throw new Exception(result.Error);
				}

			//	memoryCache.Set(id, result);
			//}
			return result;
		}  
    }


}
//https://omdbapi.com/?apikey=5b9b7798&s={title}