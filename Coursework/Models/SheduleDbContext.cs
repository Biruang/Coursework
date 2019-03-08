using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Coursework.Models
{
	public class SheduleDbContext : DbContext
	{
		public SheduleDbContext(): base()
		{
			Database.EnsureCreated();
		}

		public DbSet<Task> Tasks { get; set; }
		public DbSet<Purpouse> Purpouses { get; set; }
		public DbSet<TaskList> TaskLists { get; set; }
		public DbSet<Reminder> Reminders { get; set; }
		public DbSet<Event> Events { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Task>().HasData(
				new Task { Id = 1, Name = "testTask", CreationTime = DateTime.Now, Completed = false });
			modelBuilder.Entity<Purpouse>().HasData(
				new Purpouse { Id = 1, Name = "testPurpouse", CreationTime = DateTime.Now });
			modelBuilder.Entity<TaskList>().HasData(
				new TaskList { Id = 1, Name = "testTaskList", Color = "red" });
			modelBuilder.Entity<Reminder>().HasData(
				new Reminder { Id = 1, CreationTime = DateTime.Now, RepeatMode = 1, TriggerTime = (DateTime.Now.AddHours(1)), EventId = 1 });
			modelBuilder.Entity<Event>().HasData(
				new Event { Id = 1, Name = "testEvent", CreationTime = DateTime.Now });
		}

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=SheduleDb;Trusted_Connection=True;");
		}
	}
}
