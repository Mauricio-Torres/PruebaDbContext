using Behavior.Manager;
using Behavior.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PruebaTecnica.DataBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PruebaTecnica.InicializarData
{
    public class InsertData
    {
        public static async Task Initialize(IServiceProvider serviceProvider)
        {
            try
            {
                using (var context = new DataContext(
              serviceProvider.GetRequiredService<DbContextOptions<DataContext>>()))
                {

                    var stateRol = false;
                    var stateUser = false;
                    var statePermisos = false;

                    List<Permisos> permisos = new List<Permisos>() {
                    new Permisos()
                    {
                        Permiso = "mensaje.Bienvenida"
                    },
                    new Permisos()
                    {
                        Permiso = "mensaje.Noticias"
                    },
                    new Permisos()
                    {
                        Permiso = "listar.Usuario"
                    },
                    new Permisos()
                    {
                        Permiso = "filtrar.Usuario.Nombre"
                    },
                    new Permisos()
                    {
                        Permiso = "filtrar.Usuario.Rol"
                    },
                    new Permisos()
                    {
                        Permiso = "editar.Usuario"
                    },
                    new Permisos()
                    {
                        Permiso = "crear.Usuario"
                    },
                    new Permisos()
                    {
                        Permiso = "eliminar.Usuario"
                    },
                };

                    statePermisos = EnsurePermisos(serviceProvider, permisos).Result;

                    List<Roles> roles = new List<Roles>() {
                    new Roles()
                    {
                        NombreRol = "Visitante"
                    },
                    new Roles()
                    {
                        NombreRol = "Asistente"
                    },
                    new Roles()
                    {
                        NombreRol = "Editor"
                    },
                    new Roles()
                    {
                        NombreRol = "Administrador"
                    },
                };

                    stateRol = EnsureRole(serviceProvider, roles).Result;
                    if (stateRol)
                    {
                        List<Usuario> usuarios = new List<Usuario>() {
                    new Usuario() {
                        IdRol = GetRol("Visitante", serviceProvider),
                        Nombre= "visitante",
                        Password="123",
                        Status = true
                    },
                    new Usuario()
                    {
                        IdRol = GetRol("Asistente", serviceProvider),
                        Nombre = "asistente",
                        Password = "123",
                        Status = true
                    },
                    new Usuario()
                    {
                        IdRol = GetRol("Editor", serviceProvider),
                        Nombre = "editor",
                        Password = "123",
                        Status = true
                    },
                    new Usuario()
                    {
                        IdRol = GetRol("Administrador", serviceProvider),
                        Nombre = "administrador",
                        Password = "123",
                        Status = true
                    } };

                        stateUser = EnsureUser(serviceProvider, usuarios).Result;
                    }

                    if (stateUser && statePermisos)
                    {
                        List<PermisoRol> permisoRols = new List<PermisoRol>() {
                        new PermisoRol() {
                             IdPermiso = GetPermiso("mensaje.Bienvenida", serviceProvider),
                             IdRol = GetRol("Visitante", serviceProvider)
                        },
                         new PermisoRol() {
                             IdPermiso = GetPermiso("mensaje.Noticias", serviceProvider),
                             IdRol = GetRol("Visitante", serviceProvider)
                        },

                         new PermisoRol() {
                             IdPermiso = GetPermiso("mensaje.Noticias", serviceProvider),
                             IdRol = GetRol("Asistente", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("mensaje.Bienvenida", serviceProvider),
                             IdRol = GetRol("Asistente", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("filtrar.Usuario.Nombre", serviceProvider),
                             IdRol = GetRol("Asistente", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("filtrar.Usuario.Rol", serviceProvider),
                             IdRol = GetRol("Asistente", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("listar.Usuario", serviceProvider),
                             IdRol = GetRol("Asistente", serviceProvider)
                        },


                        new PermisoRol() {
                             IdPermiso = GetPermiso("mensaje.Noticias", serviceProvider),
                             IdRol = GetRol("Editor", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("editar.Usuario", serviceProvider),
                             IdRol = GetRol("Editor", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("mensaje.Bienvenida", serviceProvider),
                             IdRol = GetRol("Editor", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("filtrar.Usuario.Nombre", serviceProvider),
                             IdRol = GetRol("Editor", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("filtrar.Usuario.Rol", serviceProvider),
                             IdRol = GetRol("Editor", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("listar.Usuario", serviceProvider),
                             IdRol = GetRol("Editor", serviceProvider)
                        },

                        new PermisoRol() {
                             IdPermiso = GetPermiso("mensaje.Noticias", serviceProvider),
                             IdRol = GetRol("Administrador", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("editar.Usuario", serviceProvider),
                             IdRol = GetRol("Administrador", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("mensaje.Bienvenida", serviceProvider),
                             IdRol = GetRol("Administrador", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("filtrar.Usuario.Nombre", serviceProvider),
                             IdRol = GetRol("Administrador", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("filtrar.Usuario.Rol", serviceProvider),
                             IdRol = GetRol("Administrador", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("crear.Usuario", serviceProvider),
                             IdRol = GetRol("Administrador", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("eliminar.Usuario", serviceProvider),
                             IdRol = GetRol("Administrador", serviceProvider)
                        },
                        new PermisoRol() {
                             IdPermiso = GetPermiso("listar.Usuario", serviceProvider),
                             IdRol = GetRol("Administrador", serviceProvider)
                        },
                    };

                        EnsureRolesPermisos(serviceProvider, permisoRols);
                    }
                }
            }
            catch (Exception ex)
            {

                throw;
            }

        }

        private static int GetRol(string NombreRol, IServiceProvider serviceProvider)
        {
            var roleManager = serviceProvider.GetService<RolesManager>();
            var rol = roleManager.Get(NombreRol);
            return rol.Id;
        }

        private static int GetPermiso(string NombrePermiso, IServiceProvider serviceProvider)
        {
            var permisoManager = serviceProvider.GetService<PermisosManager>();
            var rol = permisoManager.Get(NombrePermiso);
            return rol.Id;
        }

        private static async Task<bool> EnsureUser(IServiceProvider serviceProvider, List<Usuario> usuarios)
        {
            try
            {
                var userManager = serviceProvider.GetService<UsuarioManager>();

                usuarios.ForEach((usuario) =>
                {

                    var user = userManager.GetUsuario(usuario.Nombre, usuario.Password);
                    if (user == null)
                    {
                        userManager.Insert(usuario);
                    }
                });

                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }

        private static async Task<bool> EnsurePermisos(IServiceProvider serviceProvider, List<Permisos> permisos)
        {
            try
            {
                var permisosManager = serviceProvider.GetService<PermisosManager>();

                permisos.ForEach(permisos =>
                {

                    var p = permisosManager.Get(permisos.Permiso);
                    if (p == null)
                    {
                        permisosManager.Insert(permisos);
                    }
                });

                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }
        private static async Task<bool> EnsureRole(IServiceProvider serviceProvider, List<Roles> roles)
        {
            var roleManager = serviceProvider.GetService<RolesManager>();
            try
            {
                roles.ForEach(rolx =>
                {

                    var rol = roleManager.Get(rolx.NombreRol);
                    if (rol == null)
                    {
                        roleManager.Insert(rolx);
                    }
                });

                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }

        private static async void EnsureRolesPermisos(IServiceProvider serviceProvider, List<PermisoRol> rolesPermisos)
        {
            var rolePermisoManager = serviceProvider.GetService<RolesPermisosManager>();

            try
            {

                rolesPermisos.ForEach(rp =>
                {

                    var rol = rolePermisoManager.Get(rp.IdRol, rp.IdPermiso);
                    if (rol == null)
                    {
                        rolePermisoManager.Insert(rp);
                    }
                });
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
