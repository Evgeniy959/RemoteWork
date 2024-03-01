﻿using WebApplication1.Models;

namespace WebApplication1.ViewModels
{
    public class HomeIndexViewModel
    {
        public IEnumerable<Post> Posts { get; set; }
        public IEnumerable<Post> RecentPost { get; set; }
        public IEnumerable<Category> Categories { get; set; }
        public IEnumerable<Tag> Tags { get; set; }
        public int CurentPages { get; set; }
        public int TotalPages { get; set; }
        public int CountPosts { get; set; }
        public int? CategoryId { get; set; }
        public int? TagId { get; set; }

        public Dictionary<string, string> RouteParam { get; set; }
    }
}
