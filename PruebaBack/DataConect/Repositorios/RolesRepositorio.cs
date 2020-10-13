using Behavior.Interfaz;
using Behavior.Model;
using PruebaTecnica.DataBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataConect.Repositorios
{
    public class RolesRepositorio : IRolesRepositorio
    {

        private readonly DataContext context;
        public RolesRepositorio(DataContext dataContext)
        {
            context = dataContext;
        }

        public bool Delet(int id)
        {
            throw new NotImplementedException();
        }

        public bool Insert(Entity entity)
        {
            context.Roles.Add(entity as Roles);
            context.SaveChanges();
            return true;
        }

        public bool Update(Entity intienrario)
        {
            throw new NotImplementedException();
        }

        public Entity Get(string nombre)
        {
            return context.Roles.Where(x => x.NombreRol.Equals(nombre)).FirstOrDefault();
        }


        public List<Roles> GetAll()
        {
            return context.Roles.ToList();
        }
    }
}
