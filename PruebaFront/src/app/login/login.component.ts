import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Login } from '../models/login.model';
import Swal from 'sweetalert2';

declare function init_plugin();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth2: any;
  correo = '';
  recuerdame = false;

  constructor(public router: Router, public _usuarioService: UsuarioService) { }

  ngOnInit() {
    init_plugin();
    // this.googleInit();
    // this.correo = localStorage.getItem('email') || '';

    // if (this.correo.length > 1) {
    //     this.recuerdame = true;
    // }

  }

 onSubmit(forma: NgForm) {

    if (forma.invalid) {
      return;
    }

    const user = new Login(forma.value.nick, forma.value.password);
    this._usuarioService.login(user, forma.value.recuerdame).subscribe (
        resp => { if (resp) {
          this.router.navigate(['/inicio']);
        }
      },
      err => {
        Swal.fire({
          title: 'ERROR',
          text: 'Se presento un error en la conección con el servidor',
          type: 'error',
          confirmButtonText: 'Aceptar'
        });

        console.log(err); }
      );
  }
}
