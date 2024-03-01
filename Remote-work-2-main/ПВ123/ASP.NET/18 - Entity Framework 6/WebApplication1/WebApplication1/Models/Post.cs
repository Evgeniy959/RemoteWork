using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class Post
    {
        public int Id { get; set; }

      //  [Required(ErrorMessage = "Ti cto delaew"), MaxLength(100), MinLength(1)]
        [Required, MaxLength(100), MinLength(1)]
        //    [DataType(DataType.Password)]
        public string Title { get; set; }

       // [Required(ErrorMessage = "Как дела"), MaxLength(300), MinLength(1)]
        [Required, MaxLength(300), MinLength(1)]
        public string Content { get; set; }
        [MaxLength(250)]
        [Display(Name ="Image : ")]
        public string ImageUrl { get; set; }
        public DateTime Date { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public IEnumerable<PostTag> PostTags { get; set; }
    }
}
