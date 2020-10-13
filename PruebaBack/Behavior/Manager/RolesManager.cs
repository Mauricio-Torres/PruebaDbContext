using Behavior.Interfaz;
using Behavior.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Behavior.Manager
{
    public class RolesManager
    {

        IRolesRepositorio crud;
        public RolesManager(IRolesRepositorio _crud)
        {
            crud = _crud;
        }

        public bool Insert(Roles roles)
        {
            return crud.Insert(roles);
        }

        public Roles Get (string nombre )
        {
            return crud.Get(nombre) as Roles;
        }

        public List<Roles> GetAll()
        {
            var rolNew = new Roles() { Id = 0, NombreRol = "Todos Los roles" };
            var roles = crud.GetAll();

            if (roles.IndexOf(rolNew) < 0)
            {
                roles.Add(rolNew);
            }

            return roles;
        }
    }
}
