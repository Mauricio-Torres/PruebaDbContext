using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Behavior.Manager;
using Behavior.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PruebaTecnica.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        private readonly RolesManager rolesManager;

        public RolesController(RolesManager _rolesManager)
        {
           rolesManager = _rolesManager;
        }

        [HttpGet]
        [Route("/GetRoles")]
        public List<Roles> GetRoles()
        {
            return rolesManager.GetAll();
        }
    }
}
