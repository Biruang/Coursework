using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Coursework.Models
{
	public class SheduleDbContext : DbContext
	{
		public SheduleDbContext()
		{
			Database.EnsureCreated();
		}

		public DbSet<Task> Tasks { get; set; }
		public DbSet<Purpouse> Purpouses { get; set; }
		public DbSet<TaskList> TaskLists { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=SheduleDb;Trusted_Connection=True;");
		}
	}
}
