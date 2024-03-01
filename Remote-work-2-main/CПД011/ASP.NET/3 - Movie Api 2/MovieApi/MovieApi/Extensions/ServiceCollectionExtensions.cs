using MovieApi.Options;
using MovieApi.Services;

namespace MovieApi.Extensions
{
    public static class ServiceCollectionExtensions
    { 
        public static IServiceCollection AddMovieApi(this IServiceCollection services,Action<MovieApiOptions> options)
        {
            services.AddTransient<IMovieApiService, MovieApiService>();
            services.Configure<MovieApiOptions>(options);
            return services;
        }
    }
}
