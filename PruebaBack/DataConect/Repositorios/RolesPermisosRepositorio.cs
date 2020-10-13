using Behavior.Interfaz;
using Behavior.Model;
using PruebaTecnica.DataBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataConect.Repositorios
{
    public class RolesPermisosRepositorio: IRolesPermisosRepositorio
    {
        private readonly DataContext context;
        public RolesPermisosRepositorio(DataContext dataContext)
        {
            context = dataContext;
        }

        public bool Delet(int id)
        {
            throw new NotImplementedException();
        }

        public Entity Get(string nombre)
        {
            return null; // context.PermisoRol.Where(x => x.Permiso.Equals(nombre)).FirstOrDefault();
        }

        public Entity Get(int idRol, int idPermiso)
        {
            return context.PermisoRol.Where(x => x.IdPermiso == idPermiso && x.IdRol == idRol).FirstOrDefault();
        }

        public bool Insert(Entity entity)
        {
            context.PermisoRol.Add(entity as PermisoRol);
            context.SaveChanges();
            return true;
        }

        public bool Update(Entity intienrario)
        {
            return false;
        }
    }
}
