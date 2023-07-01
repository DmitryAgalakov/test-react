namespace TodoServer.Models;

public class Project
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public List<Note> Notes { get; set; }
}
