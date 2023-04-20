namespace TodoServer.Models;

public class Project : IProject
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public List<Note> Notes { get; set; }
}
