import { AppConsts } from './../../config/AppConstant';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { URL_SERVICE } from 'src/app/Config/config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: any;
  menu: any[] = [];

  constructor( public htpp: HttpClient, public router: Router) {

    this.cargarToken();
  }

estaLogueado() {

  if ( this.usuario) {
    if (this.usuario.nombre !== '') {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}


cargarToken() {

  try {
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse( localStorage.getItem('usuario'));
    } else {
      this.usuario = null;
    }
  } catch {
    this.logout();
  }
}

guardarLocalStorage( data: any, permisos: any) {

  localStorage.setItem('usuario', JSON.stringify(data) );
  localStorage.setItem('permisos', JSON.stringify(permisos) );
  this.usuario = new  Usuario(data);

}


logout() {

  localStorage.removeItem('usuario');
  localStorage.removeItem('permisos');
  this.usuario = null;
  this.router.navigate(['/login']);
}

tienePermiso() {
  const permisos = JSON.parse( localStorage.getItem('permisos'));
  if (permisos.indexOf(AppConsts.PERMISOS['listar.Usuario']) >= 0) {
    return true;
  }
  return false;
}

setIdCompany() {
    const url = URL_SERVICE + '/SetIdCompany';
    return this.htpp.post(url, '');
}

login( login: Login, recordar: boolean = false) {

    // const url = URL_SERVICE + '/AuthUser?nick=' + login.nick + '&pass=' + login.pass;
    const url = URL_SERVICE + '/Login';

    return this.htpp.post(url, login).pipe( map((res: any) => {

      if (res.status ) {
        this.guardarLocalStorage(res.data.usuario, res.data.permisos );

      } else {
        Swal.fire({
          title: 'ERROR',
          text: res.error,
          type: 'error',
          confirmButtonText: 'Aceptar'
        });
      }

      return res.status;
    }),
    // catchError( (err: any) => {

    //   Swal.fire({
    //     title: 'ERROR',
    //     text: err.error,
    //     type: 'error',
    //     confirmButtonText: 'Aceptar'
    //   });

    //   // tslint:disable-next-line: deprecation
    //   return Observable.throw(err);
    // })

      );
    }
}
