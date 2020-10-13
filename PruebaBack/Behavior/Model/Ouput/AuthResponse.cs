using System;
using System.Collections.Generic;
using System.Text;

namespace Behavior.Model.Ouput
{
    public class AuthResponse
    {
        public Usuario usuario { set; get; }
        public List<string> permisos { set; get; }
    }
}
