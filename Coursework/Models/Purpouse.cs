﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Coursework.Models
{
	public class Purpouse
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public DateTime CreationTime { get; set; }
		public string Description { get; set; }

		public List<Task> Tasks { get; set; }

		public Purpouse()
		{
			Tasks = new List<Task>();
		}
	}
}
