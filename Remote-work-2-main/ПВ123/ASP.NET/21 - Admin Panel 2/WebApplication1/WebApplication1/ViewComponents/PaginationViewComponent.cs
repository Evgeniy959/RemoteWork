using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.ViewComponents
{
    public class PaginationViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke(
            int totalPages,
            int currentPage,
            string controller,
            string action,
            Dictionary<string,string> routeParam)
        {
            var model = new PaginationViewModel
            {
                TotalPages = totalPages,
                CurrentPage = currentPage,
                Controller = controller,
                Action = action,
                RouteParam = routeParam
            };
            return View("Default",model);
        }
        
    }
}
