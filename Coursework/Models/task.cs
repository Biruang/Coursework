﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace Coursework.Models
{
	public class Task
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public bool Completed { get; set; }

		public int? PurpouseId { get; set; }
		public Purpouse Purpouse { get; set; }

		public List<TaskListTask> TaskListTasks { get; set; }

		Task()
		{
			TaskListTasks = new List<TaskListTask>();
		}
	}
}