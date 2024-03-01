using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using Movies.Models;
using Movies.Options;
using System.Text.Json;

namespace Movies.Services
{
    public class MovieApiService : IMovieApiService
    {
        private readonly IMemoryCache memoryCache;

        //public string BaseUrl { get; set; }
        //public string ApiKey { get; set; }
        public MovieApiOptions movieApiOptions { get; set; }
        public HttpClient httpClient { get; set; }

        public MovieApiService(IHttpClientFactory httpClientFactory,IOptions<MovieApiOptions> options,IMemoryCache memoryCache)
        {
            //BaseUrl = "https://omdbapi.com/";
            //ApiKey = "5b9b7798";
            //BaseUrl = options.Value.BaseUrl;
            //ApiKey = options.Value.ApiKey;
            movieApiOptions = options.Value;
            // httpClient = new HttpClient();
            httpClient = httpClientFactory.CreateClient();
            this.memoryCache = memoryCache;
        }

        public async Task<MovieApiResponse> SearchByTitleAsync(string title)
        {
            title = title.ToLower();


            MovieApiResponse result;
            //if (!memoryCache.TryGetValue(title, out result))
            {
                var response = await httpClient.GetAsync($"{movieApiOptions.BaseUrl}?s={title}&apikey={movieApiOptions.ApiKey}");
                var json = await response.Content.ReadAsStringAsync();
                result = JsonSerializer.Deserialize<MovieApiResponse>(json);

                if (result.Response == "False")
                    throw new Exception(result.Error);

                var cacheExpire = new MemoryCacheEntryOptions().SetSlidingExpiration(TimeSpan.FromDays(1));
                memoryCache.Set(title, result, cacheExpire);

            }
               

            return result;
        }

        public async Task<Movie> SearchByIdAsync(string id)
        {
            Movie result;
          //  if (!memoryCache.TryGetValue(id,out result))
            {
                var response = await httpClient.GetAsync($"{movieApiOptions.BaseUrl}?i={id}&apikey={movieApiOptions.ApiKey}");
                var json = await response.Content.ReadAsStringAsync();
                result = JsonSerializer.Deserialize<Movie>(json);

                if (result.Response == "False")
                    throw new Exception(result.Error);

                memoryCache.Set(id,result);
            }

           

            return result;
        }
    }
}
