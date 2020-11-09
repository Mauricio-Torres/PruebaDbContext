using System.Collections.Generic;

namespace Behavior.Model.Ouput
{
    public class AuthResponse
    {
        public UsuariosOuput usuario { set; get; }
        public List<string> permisos { set; get; }
    }
}
