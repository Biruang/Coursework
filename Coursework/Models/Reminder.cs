using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursework.Models
{
	public class Reminder
	{
		public int Id { get; set; }
		public DateTime CreationTime { get; set; }
		public int RepeatMode { get; set; }
		public DateTime TriggerTime { get; set; }

		public int? TaskId { get; set; }
		public Task Task { get; set; }

		public int? EventId { get; set; }
		public Event Event { get; set; }
	}
}
