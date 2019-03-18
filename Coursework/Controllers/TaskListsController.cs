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
			JArray output = new JArray();
			db.TaskLists.Include(t => t.TaskListTasks).ThenInclude(t=> t.Task).Load();
			var taskLists = db.TaskLists;

			foreach (var r in taskLists)
			{
				output.Add(TaskList.ToJsonFull(r));
			}
			return Ok(output);
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

			return Ok(TaskList.ToJsonFull(taskList));
		}
	}
}
