using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LucidPortal.API.Data;
using LucidPortal.API.Dtos;
using LucidPortal.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LucidPortal.API.Controllers
{

    // [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _repo;

        public CommentController(ICommentRepository repo)
        {
            _repo = repo;
        }

        [HttpPost("submit")]

        public async Task<IActionResult> Submit(CommentForPostDto commentForPostDto)
        {
            if (await _repo.CommentExists(commentForPostDto.Producer, DateTime.Now))
                return BadRequest("Comment already exists for this day");

            var commentToPost = new Comment
            {
              Producer = commentForPostDto.Producer,
              Content = commentForPostDto.Content,
              CreatedBy = Environment.UserName,
              Created = DateTime.Now.Date,
              LastEdited = DateTime.Now.Date,
              EditedBy = commentForPostDto.CreatedBy  
            };

            var postedComment = await _repo.Submit(commentToPost);

            return StatusCode(201);

        }

        [HttpPost("submitmulti")]
        public async Task<IActionResult> SubmitMultiple(CommentForPostDto[] commentsForPostDto)
        {

            for (int i = 0; i < commentsForPostDto.Length; i++)
            {
                if (await _repo.CommentExists(commentsForPostDto[i].Producer, DateTime.Now.AddDays(-1)))
                    return BadRequest("Comment already exists for this day");

                var commentToPost = new Comment
                {
                    Producer = commentsForPostDto[i].Producer,
                    Content = commentsForPostDto[i].Content,
                    CreatedBy = Environment.UserName,
                    Created = DateTime.Now.Date.AddDays(-1),
                    LastEdited = DateTime.Now.Date.AddDays(-1),
                    EditedBy = commentsForPostDto[i].CreatedBy  
                };
                var postedComment = await _repo.Submit(commentToPost);
            }

            return StatusCode(201);
        }

        [HttpGet]
        public async Task<IActionResult> GetComments()
        {
            var comments = await _repo.GetComments();

            return Ok(comments);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetComment(int id)
        {
            var comment = await _repo.GetComment(id);

            return Ok(comment);
        }
    }
}
