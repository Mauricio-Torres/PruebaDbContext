using Behavior.Manager;
using Behavior.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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
