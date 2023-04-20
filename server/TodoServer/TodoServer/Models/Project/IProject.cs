using TodoServer.Models;

namespace TodoServer;

public interface IProject
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public List<Note> Notes { get; set; }
}