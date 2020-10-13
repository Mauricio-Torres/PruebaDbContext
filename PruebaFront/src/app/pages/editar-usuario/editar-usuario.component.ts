import { PassDataReportService } from './../../services/reports/pass-data-report.service';
import { ReportUsuariosService } from './../../services/reports/reports.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit, OnDestroy {

  user: Usuario;
  opcionesCheckBox = [];
  usuarioGet: Subscription;
  getUser: Subscription;

  constructor(private serviceReports: ReportUsuariosService, private passDataReportService: PassDataReportService) { }

  ngOnInit() {
    this.usuarioGet = this.passDataReportService.getData().subscribe((data: any) => {
      console.log(data);
      console.log(data.id);
      this.getUser = this.serviceReports.getUsuario(data.id).subscribe((u: any) => {
        console.log(u.data);
        this.user = u.data;
      });

    })
    this.serviceReports.getRoles().subscribe((data: any) =>{
      this.opcionesCheckBox = data;

    });
  }

  ngOnDestroy(): void {
    this.usuarioGet.unsubscribe();
    this.getUser.unsubscribe();
  }

  mostrarComponente() {
    return this.user === undefined || this.user === null;
  }

  editarUsuario(user: Usuario) {
    this.serviceReports.updateUsuario(user).subscribe( (data: any) => {
      if (data.status) {
        Swal.fire({
          title: 'Actualizacion',
          text: 'El usuario fue actualizado con exito',
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
