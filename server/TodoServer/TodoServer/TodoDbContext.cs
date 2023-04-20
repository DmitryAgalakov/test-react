using Microsoft.EntityFrameworkCore;
using TodoServer.Models;

namespace TodoServer;

public class TodoDbContext : DbContext
{
    public TodoDbContext(DbContextOptions<TodoDbContext> options) : base(options)
    {

    }

    public DbSet<Project> Projects { get; set; }
    public DbSet<Note> Notes { get; set; }
    public DbSet<Todoitem> Todoitems { get; set; }


}
