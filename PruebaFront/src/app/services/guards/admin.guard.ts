import { AppConsts } from './../../config/AppConstant';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(public usuarioService: UsuarioService, private router: Router) {

  }

  canActivate(): boolean {

    if (!this.usuarioService.tienePermiso()) {
      this.router.navigate(['/inicio']);
      return false;
    }
    return true;
  }

}
