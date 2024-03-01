using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BlogWebsite.Services
{
    public class SaveFileService
    {
        public string SaveFile(IFormFile file)
        {
            if (file == null)
                throw new Exception("File not found");
            var fileName = $"{DateTime.Now.ToString("hh-mm-ss-dd-mm-yyyy")}{file.FileName}";
            var fullName = $"{Directory.GetCurrentDirectory()}\\wwwroot\\content\\{fileName}";

            using (var fs = new FileStream(fullName, FileMode.Create))
            {
                file.CopyTo(fs);
            }

            return fileName;
        }
    }
}
