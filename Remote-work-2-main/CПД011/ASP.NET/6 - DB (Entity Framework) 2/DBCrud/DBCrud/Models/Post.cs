using System.ComponentModel.DataAnnotations;

namespace DBCrud.Models
{
    public class Post
    {

        [Display(Name = "Image path : ")]
        public string ImageUrl { get; set; }
        public int Id { get; set; }
        [Required(ErrorMessage ="This is wrong")]
        [MaxLength(255)]
        [MinLength(3,ErrorMessage ="NOT NOT NOT")]
        public string Title { get; set; }

        [Required]
        [MaxLength(1000)]
        public string Content { get; set; }
        public DateTime Date { get; set; }


        public int CategoryId { get; set; }
        public Category Category { get; set; }


        public IEnumerable<PostTag> PostTags { get; set; }

    }
}
