using Behavior.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Behavior.Interfaz
{
    public interface IRolesPermisosRepositorio: ICrudEntity
    {
        public Entity Get(int idRol, int idPermiso);
    }
}
