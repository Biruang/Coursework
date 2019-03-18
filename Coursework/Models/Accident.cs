﻿using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursework.Models
{
	public class Accident
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public DateTime CreationTime { get; set; }
		public string Description { get; set; }

		[JsonIgnore]
		public Reminder Reminder { get; set; }

		static public JObject ToJsonFull(Accident accident)
		{
			return new JObject(JObject.FromObject(new
			{
				id = accident.Id,
				name = accident.Name,
				description = accident.Description,
				creationTime = accident.CreationTime,
				reminder = accident.Reminder
			}));
		}
	}
}
