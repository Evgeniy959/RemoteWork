using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models
{
    public class BlogDbContext : DbContext
    {
        ////
        public BlogDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //    modelBuilder.Entity<PostTag>().HasKey(t => new { t.PostId, t.TagId });

            modelBuilder.Entity<PostTag>()
                 .HasOne(pt => pt.Tag)
                 .WithMany(p => p.PostTags)
                 .HasForeignKey(pt => pt.PostId);

            modelBuilder.Entity<PostTag>()
                 .HasOne(pt => pt.Tag)
                 .WithMany(p => p.PostTags)
                 .HasForeignKey(pt => pt.TagId);
        }


        public DbSet<Post> Posts { get; set; }
		public DbSet<Category> Categories { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<PostTag> PostTags { get; set; }
    }
}
