using Movies.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();



//builder.Services.AddScoped<MovieApiService>();
//builder.Services.AddTransient<MovieApiService>();
builder.Services.AddSingleton<MovieApiService>();

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
