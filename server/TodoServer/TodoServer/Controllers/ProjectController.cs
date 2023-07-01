using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoServer.Models;


namespace TodoServer.Controllers;


public class ProjectController : Controller
{

    private readonly TodoDbContext _context;
    public ProjectController(TodoDbContext context)
    {
        _context = context;
    }



    [HttpPost("create")]
    public async Task<IActionResult> Create([FromBody] Project project)
    {
        if (project == null)
        {
            return BadRequest("Объект был 'null'");
        }

        await _context.Projects.AddAsync(project);
        await _context.SaveChangesAsync();

        return Ok(project.Id);
    }


    [HttpGet("read/{id?}")]
    public async Task<IActionResult> Get(Guid guid)
    {
        Project? project = await _context.Projects.FirstOrDefaultAsync(i => i.Id == guid);
        
        if (project == null)
        {
            return BadRequest("Такого проекта в БД нет.");
        }
        
        return Ok(project);
    }



    [HttpPut("update")]
    public async Task<IActionResult> Update(Project project)
    {
        await _context.SaveChangesAsync();
        return Ok();
    }



    [HttpDelete("delete/{id?}")]
    public async Task<IActionResult> Delete(Guid guid)
    {
        await _context.SaveChangesAsync();
        return Ok();
    }


}



//Project project = new()
//{
//    Id = id,
//    Name = "New project 1",
//    Notes = new()
//};