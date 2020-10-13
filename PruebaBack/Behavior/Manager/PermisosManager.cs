using Behavior.Interfaz;
using Behavior.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Behavior.Manager
{
    public class PermisosManager
    {
        IPermisosRepositorio crud;
        public PermisosManager(IPermisosRepositorio _crud)
        {
            crud = _crud;
        }

        public bool Insert(Permisos permisos)
        {
            return crud.Insert(permisos);
        }

        public Permisos Get(string Nombre)
        {
            return crud.Get(Nombre) as Permisos;
        }

        public List<string> GetAllPermisos(int idRol)
        {
            return crud.GetAllPermisos(idRol);
        }
    }
}
