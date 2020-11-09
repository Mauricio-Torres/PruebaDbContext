using Behavior.Interfas;
using Behavior.Interfaz;
using Behavior.Manager;
using DataConect.Repositorios;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using PruebaTecnica.DataBase;
using System;
using System.Linq;

namespace PruebaColfuturo
{
    public class Startup
    {
        private const string _defaultCorsPolicyName = "localhost";
        private const string _appConfiguration = "http://localhost:4200";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public string AllowAllOriginsPolicy = "localhost";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DataContext>(options => options.UseSqlServer(Configuration.GetConnectionString("MyConnection")));

            services.AddScoped<IUsuarioRepositorio, UsuarioRepositorio>();
            services.AddScoped<IPermisosRepositorio, PermisosRepositorio>();
            services.AddScoped<IRolesPermisosRepositorio, RolesPermisosRepositorio>();
            services.AddScoped<IRolesRepositorio, RolesRepositorio>();

            services.AddScoped<UsuarioManager, UsuarioManager>();
            services.AddScoped<PermisosManager, PermisosManager>();
            services.AddScoped<RolesManager, RolesManager>();
            services.AddScoped<RolesPermisosManager, RolesPermisosManager>();
            services.AddScoped<DataContext, DataContext>();
            // Add CORS policy

            services.AddCors(
              options => options.AddPolicy(
                  _defaultCorsPolicyName,
                  builder => builder
                      .WithOrigins(
                          _appConfiguration
                              .Split(",", StringSplitOptions.RemoveEmptyEntries)

                              .ToArray()
                      )
                      .AllowAnyHeader()
                      .AllowAnyMethod()
                      .AllowCredentials()
              )
          );

            services.AddControllers();
            ConfigureSwagger(services);
        }


        private static void ConfigureSwagger(IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddFile("Log-{Date}.txt");

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(AllowAllOriginsPolicy);

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
