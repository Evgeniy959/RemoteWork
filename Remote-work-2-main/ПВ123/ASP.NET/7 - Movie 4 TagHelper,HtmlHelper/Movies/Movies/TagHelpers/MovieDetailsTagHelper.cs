using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Movies.Models;

namespace Movies.TagHelpers
{

    [HtmlTargetElement("a",Attributes ="movie")]
    public class MovieDetailsTagHelper : TagHelper
    {
        public Movie Movie { get; set; }
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
           // if (Movie == null) return;

            //< a class="btn btn-primary" asp-controller="Home" asp-action="Detail" asp-route-id="@Model.imdbID">Detail</a>
            output.TagName = "a";
            output.Attributes.Add("class", "btn btn-primary");
            output.Attributes.Add("href", $"/Home/Detail?id={Movie.imdbID}"); 
            var icon = new TagBuilder("i");

            //fa-solid fa-film
            //fa-solid fa-tv
            //fa-solid fa-gamepad

            if (Movie.Type == "movie")
                icon.AddCssClass("fa-solid fa-film");
            else if (Movie.Type == "game")
                icon.AddCssClass("fa-solid fa-gamepad");
            else
                icon.AddCssClass("fa-solid fa-tv");


            output.Content.AppendHtml(icon);
            output.Content.Append(" Detail");
        }
    }
}
