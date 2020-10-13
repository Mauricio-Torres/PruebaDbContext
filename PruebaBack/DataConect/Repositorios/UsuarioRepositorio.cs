using Behavior.Interfas;
using Behavior.Model;
using Behavior.Model.Ouput;
using DataConect.Utils;
using PruebaTecnica.DataBase;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace DataConect.Repositorios
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        private readonly DataContext context;
        public UsuarioRepositorio(DataContext dataContext)
        {
            context = dataContext;
        }

        public bool Delet(int idUser)
        {
            var user = ExisteUsuario(idUser) as Usuario;
            if (user != null)
            {
                user.Status = false;
                context.Usuario.Update(user);
                context.SaveChanges();
            } 
            else
            {
                return false;
            }
            return true;
        }

        public Entity GetUsuario(int idUser)
        {
            return ExisteUsuario(idUser); 
        }

        public bool Insert(Entity usuario)
        {
            context.Usuario.Add(usuario as Usuario);
            context.SaveChanges();
            return true;
        }

        public bool Update(Entity intienrario)
        {
            throw new NotImplementedException();
        }

        private Entity ExisteUsuario(int idUser)
        {
            return context.Usuario.Where(x => x.Id == idUser).FirstOrDefault();
        }

        public Entity GetUsuario( string Nombre, string pass) 
        {
            if (!string.IsNullOrEmpty(Nombre) && !string.IsNullOrEmpty(pass))
            {
                var user = context.Usuario.Where(x => x.Nombre.ToLower().Equals(Nombre.ToLower()) && x.Status == true).FirstOrDefault();

                if (user != null)
                {
                    if (user.Password.Equals(pass))
                    {
                        return user;
                    }
                }
            }
            
            return null;
        }

        public Entity Get(string nombre)
        {
            return context.Usuario.Where(x => x.Nombre.Equals(nombre)).FirstOrDefault();
        }

        public Entity Gets(int idRol, int idPermiso)
        {
            throw new NotImplementedException();
        }

        public List<UsuariosOuput> GetUsuarios(string search, int idRol)
        {

            var resul = (from u in context.Usuario
                         join r in context.Roles on u.IdRol equals r.Id
                         where  u.Nombre.Contains(search)
                         select new UsuariosOuput()
                         {
                             Nombre = u.Nombre,
                             Id = u.Id,
                             idRol = u.IdRol,
                             Rol = r.NombreRol,
                             Status = u.Status
                         }).ToList();
            if (idRol != 0)
            {
                return resul.Where(x => x.idRol == idRol).ToList();
            }
            return resul;    
        }

        public bool Update(Usuario usuario)
        {
            var user = context.Usuario.Where(x =>  x.Id == usuario.Id).FirstOrDefault();

            if (user != null)
            {
                user.IdRol = usuario.IdRol;
                user.Nombre = usuario.Nombre;
                user.Password = usuario.Password;
                user.Status = usuario.Status;

                context.Usuario.Update(user);
                context.SaveChanges();
                return true;
            }

            return false;
        }
    }
}
