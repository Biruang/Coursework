using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Coursework.Models
{
	public class Reminder
	{
		public int Id { get; set; }
		public DateTime CreationTime { get; set; }
		public int RepeatMode { get; set; }
		public DateTime TriggerTime { get; set; }

		static public JObject ToJsonFull(Reminder reminder)
		{
			return new JObject(JObject.FromObject(new
			{
				id = reminder.Id,
				creationTime = reminder.CreationTime,
				repeatMode = reminder.RepeatMode,
				triggerTime = reminder.TriggerTime,
				task = reminder.Task,
				accident = reminder.Accident
			}));
		}

		static public JObject ToJson(Reminder reminder)
		{
			return new JObject(JObject.FromObject(new
			{
				id = reminder.Id,
				creationTime = reminder.CreationTime,
				repeatMode = reminder.RepeatMode,
				triggerTime = reminder.TriggerTime
			}));
		}

		public int? TaskId { get; set; }
		public Task Task { get; set; }

		public int? AccidentId { get; set; }
		public Accident Accident { get; set; }
	}
}
