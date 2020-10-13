using Behavior.Interfaz;
using Behavior.Model;
using PruebaTecnica.DataBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataConect.Repositorios
{
    public class PermisosRepositorio : IPermisosRepositorio
    {
        private readonly DataContext context;
        public PermisosRepositorio(DataContext dataContext)
        {
            context = dataContext;
        }

        public bool Delet(int id)
        {
            throw new NotImplementedException();
        }

        public Entity Get(string nombre)
        {
            return context.Permisos.Where(x => x.Permiso.Equals(nombre)).FirstOrDefault();
        }

        public List<string> GetAllPermisos(int idRol)
        {
            var data = (from p in context.Permisos
                        join pr in context.PermisoRol on p.Id equals pr.IdPermiso
                        join r in context.Roles on pr.IdRol equals r.Id
                        where pr.IdRol == idRol
                        select  p.Permiso ).ToList();

            return data;
        }

        public Entity Gets(int idRol, int idPermiso)
        {
            return null;
        }

        public bool Insert(Entity entity)
        {
            var permiso = (Permisos)entity;
            context.Permisos.Add(entity as Permisos);
            context.SaveChanges();
            return true;
        }

    }
}
