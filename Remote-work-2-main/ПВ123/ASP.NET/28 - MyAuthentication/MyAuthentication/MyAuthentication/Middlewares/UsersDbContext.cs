using Microsoft.EntityFrameworkCore;
using MyAuthentication.Models;

namespace MyAuthentication.Middlewares
{
    public class UsersDbContext : DbContext
    {
        public UsersDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
