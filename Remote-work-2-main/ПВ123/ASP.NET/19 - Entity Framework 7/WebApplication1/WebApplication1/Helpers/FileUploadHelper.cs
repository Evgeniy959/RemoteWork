using Microsoft.AspNetCore.Http;

namespace WebApplication1.Helpers
{
    public static class FileUploadHelper
    {
        static public async Task<string> UploadAsync(IFormFile file)
        {
            if (file != null)
            {
                var fileName = $"{Guid.NewGuid()}{Path.GetExtension(file.FileName)}";
                using var fs = new FileStream(@$"wwwroot/uploads/{fileName}", FileMode.Create);
                await file.CopyToAsync(fs);
                return @$"/uploads/{fileName}";
            }

            throw new Exception("File was not uploaded!");
        }
    }
}
