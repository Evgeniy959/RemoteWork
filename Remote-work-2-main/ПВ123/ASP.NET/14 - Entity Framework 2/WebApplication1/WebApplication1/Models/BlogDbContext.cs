﻿using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models
{
    public class BlogDbContext : DbContext
    {
        ////
        public BlogDbContext(DbContextOptions options) : base(options)
        {
        }


        public DbSet<Post> Posts { get; set; }


    }
}
