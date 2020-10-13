using Behavior.Interfas;
using Behavior.Model;
using Behavior.Model.Ouput;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Behavior.Manager
{
    public class UsuarioManager
    {
        IUsuarioRepositorio usuarioRepositorio;
        public UsuarioManager(IUsuarioRepositorio _usuarioRepositorio)
        {
            usuarioRepositorio = _usuarioRepositorio;
        }

        public Usuario GetUsuario (string Nombre, string pass)
        {
            return usuarioRepositorio.GetUsuario(Nombre, pass) as Usuario;
        }

        public bool DeleteUsuario(int idUsuario)
        {
            return usuarioRepositorio.Delet(idUsuario);
        }

        public Usuario GetUsuario(int idUsuario)
        {
            return usuarioRepositorio.GetUsuario(idUsuario) as Usuario;
        }
        public bool Insert(Usuario usuario)
        {
            try
            {
                var user = usuarioRepositorio.Get(usuario.Nombre) as Usuario;
                if (user == null)
                {
                    return usuarioRepositorio.Insert(usuario);
                }
                return false;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<UsuariosOuput> GetUsuarios(string search, int idRol)
        {
            return usuarioRepositorio.GetUsuarios(search, idRol);
        }

        public bool UpdateUsuarios(Usuario usuario)
        {
            try
            {
                var user = usuarioRepositorio.Get(usuario.Nombre) as Usuario;

                if (usuario.Id != user.Id && user != null && usuario.Nombre == user.Nombre)
                {
                    return false;
                }

                return usuarioRepositorio.Update(usuario);
                
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
