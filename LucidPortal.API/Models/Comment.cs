using System;

namespace LucidPortal.API.Models
{
    public class Comment
    {

        public int Id { get; set; }
        public string Producer { get; set; }
        public string Content { get; set; }
        public string CreatedBy { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastEdited { get; set; }
        public string EditedBy { get; set; }
        
    }
}