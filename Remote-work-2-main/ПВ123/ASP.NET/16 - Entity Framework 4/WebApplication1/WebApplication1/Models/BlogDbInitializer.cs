namespace WebApplication1.Models
{
	public static class BlogDbInitializer
	{
		public static void Seed(IApplicationBuilder app)
		{
			using var services = app.ApplicationServices.CreateScope();
			var context = services.ServiceProvider.GetRequiredService<BlogDbContext>();

			if (!context.Categories.Any())
			{
				context.Categories.Add(new Category { Name = "Sport" });
				context.Categories.Add(new Category { Name = "Music" });
				context.Categories.Add(new Category { Name = "Games" });
				context.Categories.Add(new Category { Name = "News" });
				context.Categories.Add(new Category { Name = "Study" });
				context.SaveChanges();
            }

            if (!context.Tags.Any())
            {
                context.Tags.Add(new Tag { Name = "One" });
                context.Tags.Add(new Tag { Name = "Two" });
                context.Tags.Add(new Tag { Name = "Three" });
                context.Tags.Add(new Tag { Name = "Four" });
                context.Tags.Add(new Tag { Name = "Five" });
                context.SaveChanges();
            }

            //if (!context.Posts.Any())
            //{
            //	context.Posts.Add(new Post { Name = "Sport" });
            //	context.Categories.Add(new Category { Name = "Music" });
            //	context.Categories.Add(new Category { Name = "Games" });
            //	context.Categories.Add(new Category { Name = "News" });
            //	context.Categories.Add(new Category { Name = "Study" });
            //	context.SaveChanges();
            //}
        }
    }
}
