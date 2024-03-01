using Microsoft.AspNetCore.Builder;
using MovieApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddTransient<IMovieApiService,MovieApiService>();
builder.Services.AddWebOptimizer(options =>
{
    options.CompileScssFiles();
});
builder.Services.AddHttpClient();

//Console.WriteLine(builder.Configuration.GetSection("MovieApiKey").GetValue<string>("BaseUrl"));
//Console.WriteLine(builder.Configuration.GetSection("MovieApiKey").GetValue<string>("ApiKey"));
//Console.WriteLine(builder.Configuration["MovieApiKey:BaseUrl"]);
//Console.WriteLine(builder.Configuration["MovieApiKey:ApiKey"]);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseWebOptimizer();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{title?}");

app.Run();
