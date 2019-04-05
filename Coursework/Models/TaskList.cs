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
	}
}
