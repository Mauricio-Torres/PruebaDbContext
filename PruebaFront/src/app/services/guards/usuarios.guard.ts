import { AppConsts } from './../../config/AppConstant';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosEditarGuard implements CanActivate  {

  constructor(private router: Router) {

  }

  canActivate(): boolean {

    const permisos = JSON.parse( localStorage.getItem('permisos'));
    const editarUsuario = permisos.indexOf(AppConsts.PERMISOS['editar.Usuario']) >= 0;

    if (!editarUsuario) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }

}
