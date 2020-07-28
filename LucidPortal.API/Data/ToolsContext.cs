using LucidPortal.API.Models;
using Microsoft.EntityFrameworkCore;

namespace LucidPortal.API.Data
{
    public class ToolsContext : DbContext
    {
        public ToolsContext(DbContextOptions<ToolsContext> options) : base (options) {}

        public DbSet<Producer> Producers { get; set; }
    }
}