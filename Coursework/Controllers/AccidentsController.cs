﻿using Coursework.Models;
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
	public class AccidentsController: ControllerBase
	{
		private SheduleDbContext db;
		public AccidentsController()
		{
			db = new SheduleDbContext();
		}

		[HttpGet]
		public IActionResult Get()
		{
			db.Accidents.Include(t => t.Reminder).Load();
			var accidents = db.Accidents;

			return Ok(accidents);
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> Get(int id)
		{
			await db.Accidents.Where(t => t.Id == id).Include(t => t.Reminder).LoadAsync();
			var accident = await db.Accidents.FindAsync(id);

			if (accident == null)
			{
				return NotFound();
			}

			return Ok(accident);
		}
	}
}
