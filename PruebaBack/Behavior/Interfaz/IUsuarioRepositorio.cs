using Behavior.Interfaz;
using Behavior.Model;
using Behavior.Model.Ouput;
using System.Collections.Generic;

namespace Behavior.Interfas
{
    public interface IUsuarioRepositorio: ICrudEntity
    {
        Entity GetUsuario(int idUsuario);
        Entity GetUsuario(string nombre, string pass);
        List<UsuariosOuput> GetUsuarios(string search, int idRol);

        bool Update(Usuario usuario);
    }
}
