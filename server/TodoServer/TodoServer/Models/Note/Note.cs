using TodoServer.Enums;

namespace TodoServer.Models;

public class Note : INote
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public NoteStatus Status { get; set; }
    public Guid ProjectId { get; set; }
    public List<Todoitem> Todoitems { get; set; }

}
