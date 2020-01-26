using IPDC_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace IPDC_API.Controllers
{
    public class ReportsController : ApiController
    {
        private ApplicationDbContext _context;

        public ReportsController()
        {
            _context = new ApplicationDbContext();
        }

        //Get /api/reports
        public IEnumerable<Report> GetReports()
        {
            return _context.Reports.ToList();
        }
    }
}
