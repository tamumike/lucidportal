using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using LucidPortal.API.Models;
using Microsoft.EntityFrameworkCore;

namespace LucidPortal.API.Data
{

    public class CommentRepository : ICommentRepository
    {
        private readonly DataContext _context;
        public CommentRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<bool> CommentExists(string producer, DateTime date)
        {
            if (await _context.Comments.AnyAsync(x => x.Producer == producer && x.Created.Date == date.Date))
                return true;

            return false;
        }

        public async Task<Comment> GetComment(int id)
        {
            var comment = await _context.Comments.FirstOrDefaultAsync(x => x.Id == id);
            return comment;
        }

        public async Task<IEnumerable<Comment>> GetComments()
        {
            var comments = await _context.Comments.ToListAsync();
            return comments;
        }

        public async Task<Comment> Submit(Comment comment)
        {
            await _context.Comments.AddAsync(comment);
            await _context.SaveChangesAsync();

            return comment;
        }
        
    }
}