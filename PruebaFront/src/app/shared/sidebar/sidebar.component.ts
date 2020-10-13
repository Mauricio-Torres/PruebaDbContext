import { element } from 'protractor';
import { SidebarService } from 'src/app/services/service.index';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  usuario: Usuario;

  // tslint:disable-next-line: variable-name
  constructor(public _sideBarService: SidebarService, public servicioUsuario: UsuarioService) { }

  ngOnInit() {

    this.usuario = this.servicioUsuario.usuario;
    this._sideBarService.cargarMenu();
  }

  doPag(pag: any) {

    const element1 = document.getElementById('dashboard');
    const element2 = document.getElementById('inicio');

    if (pag === 'dashboard') {

      element1.classList.add('active')
      element2.classList.remove('active')
    } else {

      element1.classList.remove('active')
      element2.classList.add('active')
    }
  }

}
