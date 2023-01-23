using TodoServer.Enums;

namespace TodoServer.Models;

public class Note
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public NoteStatus Status { get; set; }
}
