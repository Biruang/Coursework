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

		public static JObject ToJsonFull(Task task)
		{
			var taskLists = task.TaskListTasks.Select(p => p.TaskList);
			return new JObject(JObject.FromObject(new
			{
				id = task.Id,
				name = task.Name,
				description = task.Description,
				completed = task.Completed,
				creationTime = task.CreationTime,
				purpouse = task.Purpouse,
				taskLists =
					from p in taskLists
					select TaskList.ToJson(p),
				reminders =
					from p in task.Reminders
					select Reminder.ToJson(p)
			}));
		}

		static public JObject ToJson(Task task)
		{
			return new JObject(JObject.FromObject(new
			{
				id = task.Id,
				name = task.Name,
				description = task.Description,
				completed = task.Completed,
				creationTime = task.CreationTime
			}));
		}
	}
}
