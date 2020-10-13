using System;
using System.Collections.Generic;
using Behavior.Model;
using System.Text;

namespace Behavior.Interfaz
{
    public interface ICrudEntity
    {
        public Entity Get(string nombre);
        bool Insert(Entity entity);
        bool Delet(int id);
        // 
    }
}
