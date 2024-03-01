using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlogWebsite.Models;
using BlogWebsite.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace BlogWebsite
{
    public class Startup
    {
        private readonly IConfiguration configuration;

        public Startup(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            var connection = configuration.GetConnectionString("DefaultConnection");

            services.AddMvc();
            services.AddDbContext<NewsPortalContext>(options => options.UseSqlServer(connection));
            services.AddSingleton<SaveFileService>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseDeveloperExceptionPage();
            app.UseStaticFiles();
            app.UseMvc(router =>
            {
                router.MapRoute("admin", "{area}/{controller=Posts}/{action=Index}/{id?}");
                router.MapRoute("default", "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
