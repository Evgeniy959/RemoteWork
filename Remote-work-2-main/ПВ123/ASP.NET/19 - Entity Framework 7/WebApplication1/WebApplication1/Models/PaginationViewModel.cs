namespace WebApplication1.Models
{
    public class PaginationViewModel
    {
        public int TotalPages { get; set; }
        public int CurrentPage { get; set; }
        public string Controller { get; set; }
        public string Action { get; set; }
        public Dictionary<string, string> RouteParam { get; set; }

    }
}
