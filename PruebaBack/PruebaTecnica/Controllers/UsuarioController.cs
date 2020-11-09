using Behavior.Manager;
using Behavior.Model;
using Behavior.Model.Input;
using Behavior.Model.Ouput;
using DataConect.Utils;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace PruebaTecnica.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioManager usuarioManager;

        public UsuarioController(UsuarioManager _usuarioManager)
        {
            usuarioManager = _usuarioManager;
        }

        [HttpPost]
        [Route("/GetUsuarios")]
        public Response<List<UsuariosOuput>> GetUsuarios(SearchUsuario search)
        {
            Response<List<UsuariosOuput>> response = new Response<List<UsuariosOuput>>();
            try
            {
                var users = usuarioManager.GetUsuarios(search.search, Convert.ToInt32(search.idRol));

                if (users != null)
                {
                    response.CountData = users.Count;
                    response.Data = users;
                    response.Status = true;
                }
                else
                {
                    response.Data = null;
                    response.Status = false;
                    response.Error = "Usuario y/o contraseña incorrectos";
                }
            }
            catch (Exception ex)
            {
                response.Data = null;
                response.Status = false;
                response.Error = ex.ToString();
                Logger.Logguer(System.Reflection.MethodBase.GetCurrentMethod().Name, "Exception ", ex.Message);
            }

            return response;
        }

        [HttpGet]
        [Route("/GetUser")]
        public Response<Usuario> GetUsuario(int idUsuario)
        {
            Response<Usuario> response = new Response<Usuario>();
            try
            {
                var users = usuarioManager.GetUsuario(idUsuario);

                if (users != null)
                {
                    response.Data = users;
                    response.Status = true;
                }
                else
                {
                    response.Data = null;
                    response.Status = false;
                    response.Error = "Usuario No encontrado";
                }
            }
            catch (Exception ex)
            {
                response.Data = null;
                response.Status = false;
                response.Error = ex.ToString();
                Logger.Logguer(System.Reflection.MethodBase.GetCurrentMethod().Name, "Exception ", ex.Message);
            }

            return response;
        }

        [HttpPost]
        [Route("/CrearUsuario")]
        public Response<bool> InsertUsuario(UsuarioInput usuario)
        {
            Response<bool> response = new Response<bool>();
            try
            {
                var user = new Usuario()
                {
                    Id = Convert.ToInt32(usuario.id),
                    IdRol = Convert.ToInt32(usuario.idRol),
                    Nombre = usuario.nombre,
                    Password = usuario.password,
                    Status = Convert.ToBoolean(usuario.status)
                };
                var result = usuarioManager.Insert(user);

                if (result)
                {
                    response.Data = result;
                    response.Status = true;
                }
                else
                {
                    response.Data = result;
                    response.Status = false;
                    response.Error = "Error al ingresar el usuario, Verifique si el nombre del usuario ya existe o comuniquese con el administrador";
                }
            }
            catch (Exception ex)
            {
                response.Data = false;
                response.Status = false;
                response.Error = ex.ToString();
                Logger.Logguer(System.Reflection.MethodBase.GetCurrentMethod().Name, "Exception ", ex.Message);
            }

            return response;
        }

        [HttpPost]
        [Route("/UpdateUsuario")]
        public Response<bool> UpdateUsuario(Usuario usuario)
        {
            Response<bool> response = new Response<bool>();
            try
            {
                var result = usuarioManager.UpdateUsuarios(usuario);

                if (result)
                {
                    response.Data = result;
                    response.Status = true;
                }
                else
                {
                    response.Data = result;
                    response.Status = false;
                    response.Error = "Error al actualizar el usuario, el nombre coincide con el nombre de otro usuario";
                }
            }
            catch (Exception ex)
            {
                response.Data = false;
                response.Status = false;
                response.Error = ex.ToString();
                Logger.Logguer(System.Reflection.MethodBase.GetCurrentMethod().Name, "Exception ", ex.Message);
            }

            return response;
        }

        [HttpDelete]
        [Route("/DeleteUsuario")]
        public Response<bool> DeleteUsuario(int idUsuario)
        {
            Response<bool> response = new Response<bool>();
            try
            {
                var result = usuarioManager.DeleteUsuario(idUsuario);

                if (result)
                {
                    response.Data = result;
                    response.Status = true;
                }
                else
                {
                    response.Data = result;
                    response.Status = false;
                    response.Error = "Usuario No encontrado";
                }
            }
            catch (Exception ex)
            {
                response.Data = false;
                response.Status = false;
                response.Error = ex.ToString();
                Logger.Logguer(System.Reflection.MethodBase.GetCurrentMethod().Name, "Exception ", ex.Message);
            }

            return response;
        }
    }
}
