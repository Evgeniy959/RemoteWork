using Movies.Options;
using Movies.Services;

namespace Movies.Extensions
{
    //1 static class
    //2 static method
    //3 1 param this
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddMovieApi(this IServiceCollection services, Action<MovieApiOptions> options)
        {
            services.AddScoped<IMovieApiService, MovieApiService>();
            services.Configure(options);

            return services;
              
        }
    }
}
