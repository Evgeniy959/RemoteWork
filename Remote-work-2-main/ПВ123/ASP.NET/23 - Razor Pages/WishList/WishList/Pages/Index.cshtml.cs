using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;

namespace WishList.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        [Required]
        public string Messages { get; set; }

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            ViewData["Messages"] = " Hello User ! ";
            Messages = " Hello Admin";
        }


        public void OnPost(string messages)
        {
            if (ModelState.IsValid)
            {
                Console.WriteLine("Hello");
                Messages = messages.ToUpper();
            }
            else
            {
                Messages = "Empty!";
            }
        }


        //public void OnPut()
        //{

        //}
        //public void OnDelete()
        //{

        //}
    }
}