

using MailKit.Net.Smtp;
using MimeKit;

namespace WebApplication1.Services
{
    public class EmailSender : IEmailSender
    {
        public async Task SendAsync(string email, string subject, string content)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("EShop Admin", "postmaster@sandbox4dffc9415aec42599f4f98dd535bea24.mailgun.org"));
            emailMessage.To.Add(new MailboxAddress("EShop Customer", email));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = content
            };

            using (var client = new SmtpClient())
            {
                await client.ConnectAsync("smtp.mailgun.org", 587, false);
                await client.AuthenticateAsync("postmaster@sandbox4dffc9415aec42599f4f98dd535bea24.mailgun.org", "7a5d93c89d08e1a9002bbe8d6cc30f9c-6b161b0a-2418adb9");
                await client.SendAsync(emailMessage);

                await client.DisconnectAsync(true);
            }
        }
    }
}
