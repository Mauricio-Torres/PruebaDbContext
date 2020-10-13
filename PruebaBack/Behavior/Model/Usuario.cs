using System;
using System.Collections.Generic;
using System.Text;

namespace Behavior.Model
{
    public class Usuario: Entity
    {
        public string Nombre { set; get; }
        public string Password { set; get; }
        public int IdRol { set; get; }
        public bool Status { set; get; }

    }
}
