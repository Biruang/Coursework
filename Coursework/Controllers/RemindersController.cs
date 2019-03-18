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
	public class RemindersController: ControllerBase
	{
		private SheduleDbContext db;
		public RemindersController()
		{
			db = new SheduleDbContext();
		}

		[HttpGet]
		public IActionResult Get()
		{
			JArray output = new JArray();
			db.Reminders.Include(t => t.Task).Include(t => t.Accident).Load();
			var reminders = db.Reminders;

			foreach (var r in reminders)
			{
				output.Add(Reminder.ToJsonFull(r));
			}
			return Ok(output);
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> Get(int id)
		{
			await db.Reminders.Where(t => t.Id == id).Include(t => t.Task).Include(t => t.Accident).LoadAsync();
			var reminder = await db.Reminders.FindAsync(id);

			if (reminder == null)
			{
				return NotFound();
			}

			return Ok(Reminder.ToJsonFull(reminder));
		}
	}
}
