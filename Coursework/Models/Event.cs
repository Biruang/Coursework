using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursework.Models
{
	public class Event
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public DateTime CreationTime { get; set; }
		public string Description { get; set; }

		public Reminder Reminder { get; set; }
	}
}
