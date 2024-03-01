using Movies.Extensions;
using Movies.Options;
using Movies.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();



//builder.Services.AddScoped<IMovieApiService,MovieApiService>();
builder.Services.AddHttpClient();
//builder.Services.AddTransient<MovieApiService>();
//builder.Services.AddSingleton<MovieApiService>();
builder.Services.AddMemoryCache();


//string tmp = "Test";
//tmp.Farid("ok");

builder.Services.AddMovieApi(options =>
{
    options.ApiKey = builder.Configuration["MoviesApi:ApiKey"];
    options.BaseUrl = builder.Configuration["MoviesApi:BaseUrl"];
});

//builder.Services.Configure<MovieApiOptions>(options =>
//{
//    options.ApiKey = builder.Configuration["MoviesApi:ApiKey"];
//    options.BaseUrl = builder.Configuration["MoviesApi:BaseUrl"];
//});

Console.WriteLine("My appsetting json");

//Console.WriteLine(builder.Configuration.GetSection("MoviesApi").GetValue<string>("BaseUrl"));
Console.WriteLine(builder.Configuration["MoviesApi:BaseUrl"]);
Console.WriteLine(builder.Configuration["MoviesApi:ApiKey"]);
var app = builder.Build();


app.UseStaticFiles();
app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{title?}"
        );
});
app.Run();
