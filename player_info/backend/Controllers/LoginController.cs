using Microsoft.AspNetCore.Http;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Player_Info.DTO;
using Player_Info.Models;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;

using System.Security.Claims;
using System.Configuration;

namespace Player_Info.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public DotNetJwtContext _context = new DotNetJwtContext();
        IConfiguration _configuration;

        public LoginController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpPost]

        public async Task<ActionResult<User>> LoginUser(UserDTO userDTO)
        {
            

            if (_context.Users == null )
            {
                return Problem("Empty");
            }

            var user = (from u in _context.Users
                        where userDTO.Name == u.Name && userDTO.Password == u.Password
                        select u).FirstOrDefault();
            AccessToken accessToken = new AccessToken();

            Console.Write("User is " + user);

            if (user != null)
            {

                var claims = new[] {
                        new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),

                        new Claim("Name", user.Name),
                        new Claim("Password", user.Password),

                    };
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var token = new JwtSecurityToken(
                    _configuration["Jwt:Issuer"],
                    _configuration["Jwt:Audience"],
                    claims,
                    expires: DateTime.UtcNow.AddMinutes(30),
                    signingCredentials: signIn);

                

                accessToken.AccessTokenJWT = new JwtSecurityTokenHandler().WriteToken(token);
            }


            return Ok(accessToken);
            
        }
    }
}
