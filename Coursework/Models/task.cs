using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Coursework.Models
{
	public class Task
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public bool Completed { get; set; }
		public DateTime CreationTime { get; set; }

		public int? PurpouseId { get; set; }
		public Purpouse Purpouse { get; set; }

		[JsonIgnore]
		public List<Reminder> Reminders { get; set; }
		[JsonIgnore]
		public List<TaskListTask> TaskListTasks { get; set; }

		public Task()
		{
			TaskListTasks = new List<TaskListTask>();
			Reminders = new List<Reminder>();
		}
	}
}
