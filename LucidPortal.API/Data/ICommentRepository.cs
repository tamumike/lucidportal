using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using LucidPortal.API.Models;

namespace LucidPortal.API.Data
{
    public interface ICommentRepository
    {
        Task<Comment> Submit(Comment comment);
        Task<IEnumerable<Comment>> GetComments();
        Task<Comment> GetComment(int id);
        Task<bool> CommentExists(string producer, DateTime date);
    }
}