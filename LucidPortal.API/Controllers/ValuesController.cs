using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LucidPortal.API.Data;
using LucidPortal.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LucidPortal.API.Controllers
{

    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;

        public ValuesController(DataContext context)
        {
            _context = context;

        }

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> GetComments()
        {
            var values = await _context.Comments.ToListAsync();
            return Ok(values);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        [HttpGet("user")]
        public ActionResult<string> GetUser()
        {            
            return Environment.UserName;
        }
    }
}
