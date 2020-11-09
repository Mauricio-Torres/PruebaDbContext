using Behavior.Manager;
using Behavior.Model;
using Behavior.Model.Ouput;
using DataConect.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace PruebaTecnica.Controllers
{
    [Route("api/[controller]")]
    //[Authorize(Permisos)]

    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly UsuarioManager usuarioManager;
        private readonly PermisosManager permisosManager;

        private readonly ILogger<AuthenticationController> logger;

        public AuthenticationController(UsuarioManager usuarioManager, ILogger<AuthenticationController> _logger, PermisosManager _permisosManager)
        {
            permisosManager = _permisosManager;
            this.usuarioManager = usuarioManager;
            logger = _logger;
        }

        [HttpPost]
        [Route("/Login")]
        public Response<AuthResponse> Login(AuthInput usuario)
        {
            Response<AuthResponse> response = new Response<AuthResponse>();
            try
            {
                var user = usuarioManager.GetUsuario(usuario.Name, usuario.Password);

                if (user != null)
                {
                    var permisos = permisosManager.GetAllPermisos(user.idRol);
                    AuthResponse authResponse = new AuthResponse();
                    authResponse.usuario = user;
                    authResponse.permisos = permisos;

                    response.Data = authResponse;
                    response.Status = true;
                }
                else
                {
                    response.Status = false;
                    response.Error = "Usuario y/o contraseña incorrectos";
                }
            }
            catch (Exception ex)
            {
                response.Status = false;
                response.Error = ex.ToString();
                Logger.Logguer(System.Reflection.MethodBase.GetCurrentMethod().Name, "Exception ", ex.Message);
            }

            return response;
        }
    }
}
