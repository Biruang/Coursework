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
	public class PurpousesController : ControllerBase
	{
		private SheduleDbContext db;
		public PurpousesController()
		{
			db = new SheduleDbContext();
		}

		[HttpGet]
		public IActionResult Get()
		{
			JArray output = new JArray();
			db.Purpouses.Include(t => t.Tasks).Load();
			var purpouses = db.Purpouses;

			foreach (var r in purpouses)
			{
				output.Add(Purpouse.ToJsonFull(r));
			}
			return Ok(output);
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> Get(int id)
		{
			await db.Purpouses.Where(t=>t.Id==id).Include(t => t.Tasks).LoadAsync();
			var purpouse = await db.Purpouses.FindAsync(id);

			if (purpouse == null)
			{
				return NotFound();
			}

			return Ok(Purpouse.ToJsonFull(purpouse));
		}
	}
}
