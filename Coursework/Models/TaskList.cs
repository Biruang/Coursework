using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursework.Models
{
	public class TaskList
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Color { get; set; }

		public List<TaskListTask> TaskListTasks { get; set; }

		TaskList()
		{
			TaskListTasks = new List<TaskListTask>();
		}
	}
}
