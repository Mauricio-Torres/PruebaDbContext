import { ReportUsuariosService } from './../../services/reports/reports.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  opcionesCheckBox = [];
  constructor(private serviceReports: ReportUsuariosService,) { }

  ngOnInit() {
    this.serviceReports.getRoles().subscribe((data: any) =>{
      this.opcionesCheckBox = data;

    });
  }

  crearUsuario(usuario: any) {
    this.serviceReports.insertUsuario(usuario).subscribe( (data: any) => {
      if (data.status) {
        Swal.fire({
          title: 'Usuario creado',
          text: 'El usuario fue creado con exito',
          type: 'success',
          confirmButtonText: 'Aceptar'
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: data.error,
          type: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    });
  }

}
