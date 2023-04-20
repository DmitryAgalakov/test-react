using TodoServer.Enums;

namespace TodoServer;

public interface INote
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public NoteStatus Status { get; set; }
    public Guid ProjectId { get; set; }
    public List<Todoitem> Todoitems { get; set; }
        
}



             