using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Coursework.Models
{
	public class TaskList
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Color { get; set; }

		public List<TaskListTask> TaskListTasks { get; set; }

		public TaskList()
		{
			TaskListTasks = new List<TaskListTask>();
		}

		static public JObject ToJsonFull(TaskList taskList)
		{
			var tasks = taskList.TaskListTasks.Select(p => p.Task);
			return new JObject(JObject.FromObject(new {
				id = taskList.Id,
				name = taskList.Name,
				color = taskList.Color,
				tasks = 
					from p in tasks
					select Task.ToJson(p)
			}));
		}

		static public JObject ToJson(TaskList taskList)
		{
			return new JObject(JObject.FromObject(new
			{
				id = taskList.Id,
				name = taskList.Name,
				color = taskList.Color
			}));
		}
	}
}
