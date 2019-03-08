using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskEntity = Coursework.Models.Task;
using Coursework.Models;
using Microsoft.EntityFrameworkCore;

namespace Coursework.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
		private SheduleDbContext db;
		public TasksController()
		{
			db = new SheduleDbContext();
		}

		[HttpGet]
		public IActionResult Get()
		{
			return Ok(db.Tasks.ToList());
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> Get(int id)
		{
			var task = await db.Tasks.FindAsync(id);

			if (task == null)
			{
				return NotFound();
			}

			return Ok(task);
		}

		[HttpPost]
		public async Task<IActionResult> Post([FromBody]TaskEntity task)
		{
			if (task == null)
			{
				ModelState.AddModelError("", "Task don't exist");
			}

			try
			{
				db.Add(task);
				await db.SaveChangesAsync();
			}
			catch(Exception e)
			{
				ModelState.AddModelError("Task", e.Message);
			}

			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			return CreatedAtAction("TaskPost",task);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Put(int id, [FromBody]TaskEntity inputTask)
		{
			var task = await db.Tasks.FindAsync(id);

			if (task == null)
			{
				return NotFound();
			}
			try
			{
				task.Name = inputTask.Name;
				task.Description = inputTask.Description;
				task.Completed = inputTask.Completed;
				task.PurpouseId = inputTask.PurpouseId;
				await db.SaveChangesAsync();
			}
			catch (Exception e)
			{
				ModelState.AddModelError("", e.Message);
			}

			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			return NoContent();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			var task = await db.Tasks.FindAsync(id);
			if (task == null)
			{
				return NotFound();
			}

			try
			{
				db.Tasks.Remove(task);
				await db.SaveChangesAsync();
			}
			catch(Exception e)
			{
				ModelState.AddModelError("",e.Message);
			}

			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			return NoContent();
		}
    }
}