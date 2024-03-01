using Microsoft.EntityFrameworkCore;
using WebApplication1.Models.Configurations;

namespace WebApplication1.Models
{
    public class EShopDbContext : DbContext
    {
        public EShopDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Product>().Property(x => x.Title).IsRequired();
            //modelBuilder.Entity<Product>().Property(x => x.Title).HasMaxLength(100);
            /////////////////////////////////////
            /////
            //modelBuilder.Entity<Product>().Property(x => x.Title).IsRequired();
            //modelBuilder.Entity<Product>().Property(x => x.Title).HasMaxLength(100);

            modelBuilder.ApplyConfiguration(new ProductConfiguration());
            modelBuilder.ApplyConfiguration(new CategoryConfiguration());
            modelBuilder.ApplyConfiguration(new OrderConfiguration());
            modelBuilder.ApplyConfiguration(new OrderProductConfiguration());
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderProduct> OrderProducts { get; set; }
    }
}
