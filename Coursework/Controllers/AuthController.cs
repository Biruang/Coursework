using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Coursework.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Coursework.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
		[HttpPost]
		public IActionResult Login([FromBody]UserViewModel model)
		{

			return Ok();
		}

		private void CheckIdentity()
		{

		}
    }
}