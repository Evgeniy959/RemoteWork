using Microsoft.AspNetCore.Razor.TagHelpers;

namespace MovieApi.TagHelpers
{
    //[HtmlTargetElement("a",Attributes ="MyEmail")]
    public class EmailLinkTagHelper : TagHelper
    {
        public string MyEmail { get; set; }  // asp-email
        public string MyTitle { get; set; }// asp-title
        // MyDearFriend => my-dear-friend
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            if (MyEmail!=null)
            {
                output.TagName = "a";
                output.Content.Append(MyTitle ?? MyEmail);
                output.Attributes.Add("href", $"mailto:{MyEmail}");
            }
           
        }
    }



    //[HtmlTargetElement("a")]
    //public class EmailLinkTagHelper : TagHelper
    //{
    //    public string MyEmail { get; set; }  // asp-email
    //    public string MyTitle { get; set; }// asp-title
    //    // MyDearFriend => my-dear-friend
    //    public override void Process(TagHelperContext context, TagHelperOutput output)
    //    {
    //        output.TagName = "a";
    //        output.Content.Append(MyTitle ?? MyEmail);
    //        output.Attributes.Add("href", $"mailto:{MyEmail}");
    //    }
    //}



    //public class EmailLinkTagHelper : TagHelper
    //{
    //    public override void Process(TagHelperContext context, TagHelperOutput output)
    //    {
    //        output.TagName = "a";
    //        output.Content.Append("Youtube");
    //        output.Attributes.Add("href", "https://www.youtube.com");
    //    }
    //}
}
