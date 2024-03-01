var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//builder.Services.AddMvc(
//    options =>
//    {
//        options.EnableEndpointRouting = false;
//    });

builder.Services.AddControllersWithViews();




var app = builder.Build();


app.UseStaticFiles();

app.UseRouting();
//app.UseMvcWithDefaultRoute();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Contacts}");
//pattern: "{controller=Home}/{action=Time}");
});


app.Run();
