using System;
using System.Collections.Generic;
using System.Text;

namespace Behavior.Interfaz
{
    public interface IPermisosRepositorio: ICrudEntity
    {
        public List<string> GetAllPermisos(int idRol);
    }
}
