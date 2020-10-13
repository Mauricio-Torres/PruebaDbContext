import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';

// Rutas
import { APP_ROUTES } from './app.route';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServiceModule } from './services/service.module';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterseptorRequestService } from './InterseptorRequest.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './components/materials/materials.module';
// import { AdminGuard } from './services/guards/admin.guard';
// import { EventsdomDirective } from './directivas/events-dom.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    ComponentsModule,
    SharedModule,
    MaterialsModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterseptorRequestService,
      multi: true
     },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
