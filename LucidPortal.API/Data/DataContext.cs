using LucidPortal.API.Models;
using Microsoft.EntityFrameworkCore;

namespace LucidPortal.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<Comment> Comments { get; set; }
    }
}