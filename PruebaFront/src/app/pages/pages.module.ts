// import { AdminGuard } from './../services/guards/admin.guard';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { NgModule } from '@angular/core';

// separacion completa de modulo
import { SharedModule } from '../shared/shared.module';

// importamos las rutas
import { PAGES_ROUTE } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ComponentsModule } from '../components/components.module';

import { PipesModule } from '../pipes/pipes.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterseptorRequestService } from '../InterseptorRequest.service';

import { EventsdomDirective } from '../directivas/events-dom.directive';
import { KeyPressDirective } from '../directivas/key-press.directive';
import { InicioPagComponent } from './inicio-pag/inicio-pag.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';


@NgModule({
  declarations: [
    DashboardComponent,
    EventsdomDirective,
    KeyPressDirective,
    BusquedaComponent,
    InicioPagComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
  ],
  exports: [
    DashboardComponent,
    BusquedaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PipesModule,
    PAGES_ROUTE,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,


    ],
    providers: [
      // AdminGuard,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterseptorRequestService,
        multi: true
       },
    ]

})
export class PagesModule {}
