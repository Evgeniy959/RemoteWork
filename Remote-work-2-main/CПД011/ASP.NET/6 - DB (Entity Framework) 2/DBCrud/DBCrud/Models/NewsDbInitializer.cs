namespace DBCrud.Models
{
    public static class NewsDbInitializer
    {
        public static void Seed(IApplicationBuilder app)
        {
          using var services =   app.ApplicationServices.CreateScope();
          var context = services.ServiceProvider.GetRequiredService<BlogDbContext>();

            if (!context.Categories.Any())
            {
                context.Categories.Add(new Category { Name = "News" });
                context.Categories.Add(new Category { Name = "Sport" });
                context.Categories.Add(new Category { Name = "Music" });
                context.Categories.Add(new Category { Name = "Games" });

            }

            if (!context.Tags.Any())
            {
                context.Tags.Add(new Tag { Name = "One" });
                context.Tags.Add(new Tag { Name = "Two" });
                context.Tags.Add(new Tag { Name = "Three" });
                context.Tags.Add(new Tag { Name = "Four" });
                context.Tags.Add(new Tag { Name = "Five" });

            }



            context.SaveChanges();
        }
    }
}
