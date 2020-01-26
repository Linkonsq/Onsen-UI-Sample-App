using IPDC_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace IPDC_API.Controllers
{
    public class MembersController : ApiController
    {
        private ApplicationDbContext _context;

        public MembersController()
        {
            _context = new ApplicationDbContext();
        }

        //Post /api/members
        [HttpPost]
        public Member CreateMember(Member member)
        {
            _context.Members.Add(member);
            _context.SaveChanges();

            return member;
        }
    }
}
