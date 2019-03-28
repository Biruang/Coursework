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
			db.Purpouses.Include(t => t.Tasks).Load();
			var purpouses = db.Purpouses;

			return Ok(purpouses);
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

			return Ok(purpouse);
		}

		[HttpPost]
		public async Task<IActionResult> Post([FromBody]Purpouse purpouse)
		{
			if (purpouse == null)
			{
				return BadRequest("Purpouse doesn't exist");
			}

			try
			{
				await db.Purpouses.AddAsync(purpouse);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}

			await db.SaveChangesAsync();
			return CreatedAtAction("PurpousePost", purpouse);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Put(int id, [FromBody]Purpouse inputPurpouse)
		{
			var purpouse = await db.Purpouses.FindAsync(id);
			if (purpouse == null)
			{
				return NotFound();
			}

			try
			{
				purpouse.Name = inputPurpouse.Name;
				purpouse.Description = inputPurpouse.Description;
				db.Purpouses.Update(purpouse);
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
			var purpouse = await db.Purpouses.FindAsync(id);
			if (purpouse == null)
			{
				return NotFound();
			}
			try
			{
				db.Purpouses.Remove(purpouse);
				await db.SaveChangesAsync();
			}
			catch(Exception e)
			{
				return BadRequest(e);
			}

			return NoContent();
		}
	}
}
