using Coursework.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursework.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class TaskListsController : ControllerBase
	{
		private SheduleDbContext db;
		public TaskListsController()
		{
			db = new SheduleDbContext();
		}

		[HttpGet]
		public IActionResult Get()
		{
			db.TaskLists.Include(t => t.TaskListTasks).ThenInclude(t=> t.Task).Load();
			var taskLists = db.TaskLists;

			return Ok(taskLists);
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> Get(int id)
		{
			await db.TaskLists.Where(t => t.Id == id).Include(t => t.TaskListTasks).ThenInclude(t=>t.Task).LoadAsync();
			var taskList = await db.TaskLists.FindAsync(id);

			if (taskList == null)
			{
				return NotFound();
			}

			return Ok(taskList);
		}

		[HttpPost]
		public async Task<IActionResult> Post([FromBody]TaskList taskList)
		{
			if (taskList == null)
			{
				return BadRequest("Task list doesn't exist");
			}

			try
			{
				await db.TaskLists.AddAsync(taskList);
			}
			catch(Exception e)
			{
				return BadRequest(e.Message);
			}

			await db.SaveChangesAsync();
			return CreatedAtAction("TaskListPost", taskList);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Put(int id, [FromBody]TaskList inputList)
		{
			var taskList = await db.TaskLists.FindAsync(id);
			if(taskList == null)
			{
				return NotFound();
			}

			try
			{
				
				taskList.Name = inputList.Name;
				taskList.Color = inputList.Color;

				db.TaskLists.Update(taskList);
			}
			catch(Exception e)
			{
				return BadRequest(e);
			}

			await db.SaveChangesAsync();
			return NoContent();
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			var taskList = await db.TaskLists.FindAsync(id);

			if (taskList == null) return NotFound();

			try
			{
				db.TaskLists.Remove(taskList);
				await db.SaveChangesAsync();
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
			return NoContent();
		}
	}
}
