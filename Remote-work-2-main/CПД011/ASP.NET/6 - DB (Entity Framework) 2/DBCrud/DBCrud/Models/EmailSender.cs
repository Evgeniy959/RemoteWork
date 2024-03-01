using MailKit.Net.Smtp;
using MimeKit; 

namespace DBCrud.Models
{
    public class EmailSender : IEmailSender
    {
        public async Task  SendEmailAsync(string email, string subject, string content)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("News Admin", "postmaster@sandbox77a0a7a50cdb4bdcb9d95b3172545ce1.mailgun.org"));
            emailMessage.To.Add(new MailboxAddress("News Client", email));
            emailMessage.Subject = subject;

            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = content
            };

            using (var client = new SmtpClient())
            {
               await client.ConnectAsync("smtp.mailgun.org", 587, false);
                await client.AuthenticateAsync("postmaster@sandbox77a0a7a50cdb4bdcb9d95b3172545ce1.mailgun.org", "6e44c5fcd7109c183ecb62d77bc177ef-7b8c9ba8-9e632e85");
                await client.SendAsync(emailMessage);

                await client.DisconnectAsync(true);
            }
        }
    }
}
