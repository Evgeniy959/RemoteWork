using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Movies.TagHelpers
{
    [HtmlTargetElement("a")]
    public class EmailLinkTagHelper : TagHelper
    {
        public string MyEmail { get; set; }
        public string MyTitle { get; set; }
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            if (MyEmail!=null)
            {
                output.TagName = "a";
                //output.Content.Append("Google");
                //output.Attributes.Add("href", "https://www.google.com");

                output.Content.Append(MyTitle ?? MyEmail);
                output.Attributes.Add("href", $"mailto:{MyEmail}");
            }
        }
    }
}
