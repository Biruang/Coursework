using System;
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

		[JsonIgnore]
		public List<Task> Tasks { get; set; }

		public Purpouse()
		{
			Tasks = new List<Task>();
		}

		static public JObject ToJsonFull(Purpouse purpouse)
		{
			return new JObject(JObject.FromObject(new
			{
				id = purpouse.Id,
				name = purpouse.Name,
				description = purpouse.Description,
				creationTime = purpouse.CreationTime,
				tasks = 
					from p in purpouse.Tasks
					select Task.ToJson(p)
			}));
		}

		static public JObject ToJson(Purpouse purpouse)
		{
			return new JObject(JObject.FromObject(new
			{
				id = purpouse.Id,
				name = purpouse.Name,
				description = purpouse.Description,
				creationTime = purpouse.CreationTime,
			}));
		}
	}
}
