using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Razor.TagHelpers;
using MovieApi.Models;
using System.Linq;

namespace MovieApi.TagHelpers
{

    [HtmlTargetElement("a",Attributes ="movie")]
    public class MovieDetailTagHelper : TagHelper
    {
        public Movie Movie { get; set; }
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
           // if (Movie!=null)
         //   {
                Console.WriteLine(Movie.imdbID);
                Console.WriteLine(Movie.imdbID);
                Console.WriteLine(Movie.imdbID);
                output.TagName = "a";
                output.Attributes.Add("class", "btn btn-primary");
                output.Attributes.Add("href", $"Movie?id={Movie.imdbID}");


                var icon = new TagBuilder("i");


                if (Movie.Type == "series")
                {
                    icon.AddCssClass("fas fa-tv");
                }
                else if (Movie.Type == "game")
                {
                    icon.AddCssClass("fas fa-gamepad");
                }
                else
                {
                    icon.AddCssClass("fas fa-film");
                }

                output.Content.AppendHtml(icon);
                output.Content.Append(" Details ");
         //   }


            ///Movie?id=tt0800080
        }
    }
}
