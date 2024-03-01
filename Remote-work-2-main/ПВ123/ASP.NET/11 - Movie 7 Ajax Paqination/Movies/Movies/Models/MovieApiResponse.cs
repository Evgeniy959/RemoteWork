using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace Movies.Models
{

    public class MovieApiResponse
    {

        //  [JsonProperty("Search")]
        [JsonPropertyName("Search")]
        public IEnumerable<Movie> Movies { get; set; }
        //[JsonProperty("")]
        public string totalResults { get; set; }
        public string Response { get; set; }
        public string Error { get; set; }
    }

}
