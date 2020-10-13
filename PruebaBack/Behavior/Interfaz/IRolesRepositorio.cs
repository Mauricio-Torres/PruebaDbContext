using Behavior.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Behavior.Interfaz
{
    public interface IRolesRepositorio: ICrudEntity
    {
        public List<Roles> GetAll();
    }
}
