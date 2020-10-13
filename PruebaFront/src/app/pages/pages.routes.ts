import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosEditarGuard } from '../services/guards/usuarios.guard';
import { AdminGuard } from '../services/service.index';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioPagComponent } from './inicio-pag/inicio-pag.component';
import { CrearUsuarioService } from '../services/guards/CrearUsuario.service';

const pageRoutes: Routes = [
  {
    path: 'inicio',
    component: InicioPagComponent,
    data: { titulo: 'Inicio' , animation: 'isLeft'}
  },
  {
    path: 'dashboard',
    canActivate: [AdminGuard],
    component: DashboardComponent,
    data: { titulo: 'Dashboard' , animation: 'isLeft'}
  },
  {
    path: 'editar',
    canActivate: [UsuariosEditarGuard],
    component: EditarUsuarioComponent,
    data: { titulo: 'Editar Usuario' , animation: 'isLeft'}
  },
  {
    path: 'crear',
    canActivate: [CrearUsuarioService],
    component: CrearUsuarioComponent,
    data: { titulo: 'Crear Usuario' , animation: 'isLeft'}
  },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];
/**
 * ruta secundarias que se extraen para tener diferentes componentes
 */
export const PAGES_ROUTE = RouterModule.forChild(pageRoutes);
