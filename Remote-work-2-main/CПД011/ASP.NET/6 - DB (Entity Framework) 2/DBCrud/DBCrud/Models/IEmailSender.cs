﻿namespace DBCrud.Models
{
    public interface IEmailSender
    {
        Task  SendEmailAsync(string email,string subject,string content);
    }
}
