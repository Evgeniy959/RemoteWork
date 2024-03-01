using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Movies.HtmlHelpers
{
    public static class MovieHtlmHelpers
    {
        //public static IHtmlContent MovieLink(this IHtmlHelper helper)
        //{

        //    //string link = "<a href=\"https://www.google.com\">Google</a>";
        //    //return new HtmlString(link);


        //    //string link = "<script>window.location.href=\"https://www.google.com\"</script>";
        //    //return new HtmlString(link);
        //}

        //public static IHtmlContent EmailLink(this IHtmlHelper helper,string email,string title = null)
        //{

        //    string link = $"<a href=\"mailto:{email}\">{title ?? email}</a>";
        //    return new HtmlString(link);
        //}


        public static IHtmlContent EmailLink(this IHtmlHelper helper, string email, string title = null)
        {
            var link = new TagBuilder("a");
            link.InnerHtml.Append(title ?? email);
            link.Attributes.Add("href", $"mailto:{email}");
            link.AddCssClass("text-danger");
            return link;
        }
    }
}
