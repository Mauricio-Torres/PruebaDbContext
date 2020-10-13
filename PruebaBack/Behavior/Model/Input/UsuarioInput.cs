using System;
using System.Collections.Generic;
using System.Text;

namespace Behavior.Model.Input
{
    public class UsuarioInput
    {
        public int? id { set; get; }
        public string nombre { set; get; }
        public string password { set; get; }
        public int? idRol { set; get; }
        public bool? status { set; get; }
    }
}
