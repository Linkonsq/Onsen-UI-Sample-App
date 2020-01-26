using IPDC_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace IPDC_API.Controllers
{
    public class UsersController : ApiController
    {
        private ApplicationDbContext _context;

        public UsersController()
        {
            _context = new ApplicationDbContext();
        }

        //Get /api/users
        public IEnumerable<User> GetUsers()
        {
           return _context.Users.ToList();
        }

        //GET /api/users/1
        public User GetUser(int id)
        {
            var user = _context.Users.SingleOrDefault(u => u.Id == id);
            return user;
        }
    }
}
