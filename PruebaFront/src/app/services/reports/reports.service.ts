import { Observable } from 'rxjs/internal/Observable';
import { URL_SERVICE } from 'src/app/Config/config';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SearchReports } from '../../models/searchReports';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ReportUsuariosService {

  constructor(public htpp: HttpClient, public router: Router) { }

  getReports(search: SearchReports) {
    const url = URL_SERVICE + '/GetUsuarios';

    return this.htpp.post(url, search).pipe((data: any) => data);
  }

  getRoles() {
    const url = URL_SERVICE + '/GetRoles';

    return this.htpp.get(url).pipe((data: any) => data);
  }

  insertUsuario(user: Usuario) {

    if (user) {
      const usuario = {
        id: user.id,
        nombre: user.nombre,
        password: user.password,
        idRol: user.idRol,
        status: user.status
      };

      const url = URL_SERVICE + '/CrearUsuario';
      return this.htpp.post(url, usuario).pipe((res: any) => res);
    } else {
      return new Observable(() => { });
    }
  }

  updateUsuario(user: Usuario) {

    if (user) {
      const usuario = {
        id: user.id,
        nombre: user.nombre,
        password: user.password,
        idRol: user.idRol,
        status: user.status
      };

      const url = URL_SERVICE + '/UpdateUsuario';
      return this.htpp.post(url, usuario).pipe((res: any) => res);
    } else {
      return new Observable(() => { });
    }
  }

  deleteUsuario(idUser: any) {

    if (idUser && idUser > 0) {
      const url = URL_SERVICE + '/DeleteUsuario?idUsuario=' + idUser;

      return this.htpp.delete(url, idUser).pipe((res: any) => res);
    } else {
      return new Observable(() => { });
    }
  }

  getUsuario(idUser: any ) {
    if (idUser) {
      const url = URL_SERVICE + '/GetUser?idUsuario=' + idUser;
      return this.htpp.get(url);
    } else {
      return new Observable(() => { });
    }
  }
}
