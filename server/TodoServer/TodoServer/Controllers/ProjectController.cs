using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TodoServer.Controllers
{
    public class ProjectController : Controller
    {
        private readonly TodoDbContext _context;
        public ProjectController(TodoDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Get a specific Note.
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "hello world";
        }

        /// <summary>
        /// Add a specific Note.
        /// </summary>
        /// <returns></returns>
        [HttpPost()]
        public async Task<IActionResult> Add()
        {
            
            return NoContent();
        }

        /// <summary>
        /// Deletes a specific Note.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var note = await _context.Notes.FindAsync(id);

            if (note is null)
            {
                return NotFound();
            }

            _context.Notes.Remove(note);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
