using Movies.Extensions;
using Movies.Options;
using Movies.Services;

var builder = WebApplication.CreateBuilder(args);


//int age = 27;
//int @string = 27;
//int @class = 27;

//builder.Services.AddScoped<IMovieApiService,MovieApiService>();
builder.Services.AddMemoryCache();
builder.Services.AddMovieApi(options =>
{
    options.ApiKey = builder.Configuration["MoviesApi:ApiKey"];
    options.BaseUrl = builder.Configuration["MoviesApi:BaseUrl"];
});
builder.Services.AddSingleton<IRecentMoviesStorage, RecentMoviesStorage>();
builder.Services.AddHttpClient();
//builder.Services.AddTransient<MovieApiService>();
//builder.Services.AddSingleton<MovieApiService>();

builder.Services.AddControllersWithViews();

//string tmp = "Test";
//tmp.Farid("ok");



//builder.Services.Configure<MovieApiOptions>(options =>
//{
//    options.ApiKey = builder.Configuration["MoviesApi:ApiKey"];
//    options.BaseUrl = builder.Configuration["MoviesApi:BaseUrl"];
//});

//Console.WriteLine("My appsetting json");

////Console.WriteLine(builder.Configuration.GetSection("MoviesApi").GetValue<string>("BaseUrl"));
//Console.WriteLine(builder.Configuration["MoviesApi:BaseUrl"]);
//Console.WriteLine(builder.Configuration["MoviesApi:ApiKey"]);
var app = builder.Build();
app.UseHsts();
app.UseHttpsRedirection();

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
