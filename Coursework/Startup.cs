using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Coursework.Models;

namespace Coursework
{
	public class Startup
	{
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddMvc();
		}

		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{ 
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			//app.UseStaticFiles();
			//app.UseDefaultFiles();

			app.Run(async (context) =>
			{
				SheduleDbContext db = new SheduleDbContext();
				//Purpouse purp = db.Purpouses.Include(t => t.Tasks).FirstOrDefault();
				var task = db.Tasks.Include(tl => tl.TaskListTasks).ThenInclude(tl => tl.TaskList).ToArray(); 
				await context.Response.WriteAsync($"List name: {task.FirstOrDefault().Name}, task name {task.FirstOrDefault().TaskListTasks.Select(t => t.TaskList).ToList().FirstOrDefault().Name}");
				//await context.Response.WriteAsync($"Purpouse name: {purp.Name}, task name {purp.Tasks.FirstOrDefault().Name}");
			});
		}
	}
}