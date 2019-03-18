﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Coursework.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
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
			JArray output = new JArray();
			db.Tasks
				.Include(t => t.TaskListTasks).ThenInclude(p => p.TaskList)
				.Include(t => t.Purpouse)
				.Include(t=>t.Reminders)
				.Load();
			var tasks = db.Tasks;

			foreach (var t in tasks)
			{
				output.Add(Models.Task.ToJsonFull(t));
			}
			return Ok(output);
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> Get(int id)
		{
			await db.Tasks
				.Where(t => t.Id == id)
				.Include(t => t.TaskListTasks).ThenInclude(p => p.TaskList)
				.Include(t => t.Reminders)
				.Include(t => t.Purpouse)
				.LoadAsync();
			var task = await db.Tasks.FindAsync(id);

			if (task == null)
			{
				return NotFound();
			}

			return Ok(Models.Task.ToJsonFull(task));
		}

		[HttpPost]
		public async Task<IActionResult> Post([FromBody]Models.Task task)
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
		public async Task<IActionResult> Put(int id, [FromBody]Models.Task inputTask)
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