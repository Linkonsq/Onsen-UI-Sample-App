using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IPDC_API.Models
{
    public class Member
    {
        public int Id { get; set; }
        public string LastPeriod { get; set; }
        public double Target { get; set; }
        public double Actual { get; set; }
        public double Increased { get; set; }
        public double Decreased { get; set; }
        public string MemberContact { get; set; }
        public string Comment { get; set; }
    }
}