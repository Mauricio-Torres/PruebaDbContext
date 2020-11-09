using Behavior.Interfas;
using Behavior.Model;
using Behavior.Model.Ouput;
using System;
using System.Collections.Generic;

namespace Behavior.Manager
{
    public class UsuarioManager
    {
        readonly IUsuarioRepositorio usuarioRepositorio;
        public UsuarioManager(IUsuarioRepositorio _usuarioRepositorio) { usuarioRepositorio = _usuarioRepositorio; }
        
        /// <summary>
        /// Retorna Usuario por nombre y password
        /// </summary>
        /// <param name="Nombre">nombre usuario</param>
        /// <param name="pass">password de usuario</param>
        /// <returns></returns>
        public UsuariosOuput GetUsuario(string Nombre, string pass) 
        {
            var user = usuarioRepositorio.GetUsuario(Nombre, pass) as Usuario;
  
            if (user != null)
            {
                return new UsuariosOuput() { 
                 Id = user.Id,
                 idRol = user.IdRol,
                 Nombre = user.Nombre,
                 Status = user.Status
                };
            }
            return null;
        }

        /// <summary>
        /// borrar usuario
        /// </summary>
        /// <param name="idUsuario">id usuario eliminar</param>
        /// <returns></returns>
        public bool DeleteUsuario(int idUsuario) { return usuarioRepositorio.Delet(idUsuario); }

        /// <summary>
        /// retornar usuario por id
        /// </summary>
        /// <param name="idUsuario">id usuario en la base de datos</param>
        /// <returns></returns>
        public Usuario GetUsuario(int idUsuario) { return usuarioRepositorio.GetUsuario(idUsuario) as Usuario; }
        
        /// <summary>
        /// insertar usuario 
        /// </summary>
        /// <param name="usuario">modelo usuario </param>
        /// <returns></returns>
        public bool Insert(Usuario usuario)
        {
            var user = usuarioRepositorio.Get(usuario.Nombre) as Usuario;
            if (user == null)
            {
                return usuarioRepositorio.Insert(usuario);
            }
            return false;
        }

        public List<UsuariosOuput> GetUsuarios(string search, int idRol)
        { return usuarioRepositorio.GetUsuarios(search, idRol); }

        public bool UpdateUsuarios(Usuario usuario)
        {
            var user = usuarioRepositorio.Get(usuario.Nombre) as Usuario;

            if (user != null 
                && usuario.Id != user.Id
                && usuario.Nombre == user.Nombre)
            {
                return false;
            }

            return usuarioRepositorio.Update(usuario);
        }
    }
}
