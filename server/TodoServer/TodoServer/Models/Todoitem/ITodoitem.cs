namespace TodoServer;

public interface ITodoitem
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Text { get; set; }
    public bool IsComplete { get; set; }
    public Guid NoteId { get; set; }
}
