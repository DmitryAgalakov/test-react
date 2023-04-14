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
        // _context.Projects.Add(project);
        //await _context.SaveChangesAsync();

        return Ok(project);
    }



    [HttpGet("read/{id?}")]
    public async Task<IActionResult> Read(Guid guid)
    {
        return Ok();
    }



    [HttpPut("update")]
    public async Task<IActionResult> Update(Project project)
    {
        return Ok();
    }



    [HttpDelete("delete/{id?}")]
    public async Task<IActionResult> Delete(Guid guid)
    {
        return Ok();
    }


}



//Project project = new()
//{
//    Id = id,
//    Name = "New project 1",
//    Notes = new()
//};