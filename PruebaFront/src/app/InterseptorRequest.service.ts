import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './models/usuario.model';

@Injectable()
export class InterseptorRequestService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const usuarioObj = JSON.parse( localStorage.getItem('usuario'));

    if (usuarioObj) {

      const usuario = new Usuario (usuarioObj);

      const obj = {
        idUser: usuario.id
      };

      const enviar = JSON.stringify(obj);

      const reqWithAuth = req.clone( { headers: req.headers.set('Authorization', `Bearer ${enviar}`) });
      return next.handle(reqWithAuth);
    }

    return next.handle(req);

  }

}
