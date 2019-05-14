using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Coursework.Models;
using Coursework.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Coursework.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
		private SheduleDbContext db;
		public AuthController()
		{
			db = new SheduleDbContext();
		}

		[HttpPost]
		public async Task<IActionResult> Login(UserViewModel model)
		{
			var claims = await CheckIdentity(model.Login, model.Password);
			if (claims == null)
			{
				return Unauthorized();
			}
			var now = DateTime.UtcNow;
			var jwt = new JwtSecurityToken(
				issuer: AuthOptions.ISSUER,
				audience: AuthOptions.AUDIENCE,
				notBefore: now,
				claims: claims,
				expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
				signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256)
			);
			var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
			return Ok(encodedJwt);
		}

		private async Task<IReadOnlyCollection<Claim>> CheckIdentity(string login, string password)
		{
			List<Claim> claims = null;
			var user = await db.Users.FindAsync(login);
			if (user != null)
			{
				var sha256 = new SHA256Managed();
				var passwordHash = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(password)));
				if (passwordHash == user.Password)
				{
					claims = new List<Claim>
					{
						new Claim(ClaimsIdentity.DefaultNameClaimType,user.Login),
					};
				}
			}
			return claims;
		}
    }
}