using Behavior.Interfaz;
using Behavior.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Behavior.Manager
{
    public class RolesPermisosManager
    {
        IRolesPermisosRepositorio crud;
        public RolesPermisosManager(IRolesPermisosRepositorio _crud)
        {
            crud = _crud;
        }

        public bool Insert(PermisoRol roles)
        {
            return crud.Insert(roles);
        }

        public PermisoRol Get(int idRol, int idPermiso)
        {
            return crud.Get(idRol, idPermiso) as PermisoRol;
        }
    }
}
