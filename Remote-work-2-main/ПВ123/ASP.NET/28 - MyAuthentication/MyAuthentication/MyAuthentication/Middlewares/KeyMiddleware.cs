using MyAuthentication.Encryptors;
using MyAuthentication.Services;

namespace MyAuthentication.Middlewares
{
    public class KeyMiddleware
    {
        private RequestDelegate next;

        public KeyMiddleware(RequestDelegate next)
        {
            this.next = next;
        }


        public async Task InvokeAsync(HttpContext context)
        {
            //   await context.Response.WriteAsync("Googbye!");
            // var key = context.Request.Query["key"];

            //// if (key=="qwerty")
            // {
            //    await next.Invoke(context);
            // }


            var userManager = context.RequestServices.GetRequiredService<IUserManager>();

            var userCredentials = userManager.GetCredentials();
            if (userCredentials != null)
            {
                await next.Invoke(context);
            }
            else{
                await context.Response.WriteAsync("Unauthorized");
            }

          
            
        }
    }
}
