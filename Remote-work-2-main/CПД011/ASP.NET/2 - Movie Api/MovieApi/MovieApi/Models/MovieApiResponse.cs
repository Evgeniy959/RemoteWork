﻿namespace MovieApi.Models
{
    public class MovieApiResponse
    {
        public Search[] Search { get; set; }
        public string totalResults { get; set; }
        public string Response { get; set; }
    }



}