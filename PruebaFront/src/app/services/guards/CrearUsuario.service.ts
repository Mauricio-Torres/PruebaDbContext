import { AppConsts } from './../../config/AppConstant';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(): boolean {

    const permisos = JSON.parse( localStorage.getItem('permisos'));
    const editarUsuario = permisos.indexOf(AppConsts.PERMISOS['crear.Usuario']) >= 0;

    if (!editarUsuario) {
      this.router.navigate(['/inicio']);
      return false;
    }
    return true;
  }

}
