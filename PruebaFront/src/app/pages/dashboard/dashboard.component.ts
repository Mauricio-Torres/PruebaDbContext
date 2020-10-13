import { AppConsts } from './../../config/AppConstant';
import { PassDataReportService } from './../../services/reports/pass-data-report.service';
import { SearchReports } from './../../models/searchReports';
import { ReportUsuariosService } from './../../services/reports/reports.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ColumnaGrilla } from '../../models/columnaGrilla';
import { Usuario } from '../../models/usuario.model';
import { Subscription, Observable, interval } from 'rxjs';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TIME_GET_DATA } from '../../Config/config';
declare function init_plugin();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {


  picker: any;
  itemsGrilla: [];
  totalRegistrosGrilla: any;
  form: FormGroup;
  searchReports: SearchReports = new SearchReports();
  selected = 0;

  opcionesCheckBox = [];

columnas: ColumnaGrilla[] = [
    new ColumnaGrilla(
        'Nombre',
        'nombre',
        1,
        1,
        true
    ),
    new ColumnaGrilla(
        'Rol',
        'rol',
        2,
        1,
        true
    ),
    new ColumnaGrilla(
      'Status',
      'status',
      3,
      1,
      true
    ),
];


edicion =
  new ColumnaGrilla(
    'Edicion Usuario',
    '',
    4,
    5,
    false,
    'edicion',
    true,
    'fa fa-unlock',
    'btnTrasparent3' );

eliminar = new ColumnaGrilla(
  'Eliminar Usuario',
  '',
  4,
  5,
  false,
  'eliminar',
  true,
  'fa fa-minus-circle',
  'btnTrasparent4'
  );

dataGrilla: Subscription;
busqueda: Subscription;
getDataGrilla: Subscription;
findItemTxt: Subscription;
accelerationSensorSubscription: any;

usuario = new Usuario (JSON.parse( localStorage.getItem('usuario')));
permisos = JSON.parse( localStorage.getItem('permisos'));

  constructor(public router: Router,
              private serviceReports: ReportUsuariosService,
              private passDataReportService: PassDataReportService) {

                this.addColumnasPorPermisos();
                this.inicializarConsulta();
                this.getDataInterval();
  }

  inicializarConsulta() {
    this.searchReports.search = '';
    this.searchReports.idRol = 0;
  }

  getData() {

    this.dataGrilla = this.serviceReports.getReports(this.searchReports).subscribe( (data: any) => {

      if (data.status) {
        this.itemsGrilla = data.data;
        this.totalRegistrosGrilla = data.countData;
        this.adicionColumnaGrilla();
      } else {

        this.handleError(data.error);
      }
    });
  }

  refrescar() {
    this.getData();
  }

  getDataInterval() {

    this.accelerationSensorSubscription = interval(TIME_GET_DATA)
    .subscribe(() => {
      this.getData();
    });
  }

  ngOnDestroy(): void {
    this.dataGrilla.unsubscribe();
    this.busqueda.unsubscribe();
    this.accelerationSensorSubscription.unsubscribe();
    this.findItemTxt.unsubscribe();
  }

  ngOnInit() {

    init_plugin();

    this.serviceReports.getRoles().subscribe((data: any) =>{
      this.opcionesCheckBox = data;

    });

    this.busqueda = this.passDataReportService.getClick().subscribe((data: any) => {

      if (data === 'enter') {
        if (this.searchReports.search.length > 0) {
          this.totalRegistrosGrilla = 0;
          this.itemsGrilla = [];
          this.getData();
        }
      }
    });

    this.inicializarConsulta();
    this.getData();

    this.removeTxtTable();
  }

  cambioEnGrilla( event: any ) {

    // this.searchReports.order = event.sortBy - 1;
    // this.searchReports.page = (event.offset / event.limit) + 1;
    // this.searchReports.rows = event.limit;
    // this.searchReports.asc = event.sortAsc;

    // this.getData();
  }

  mostrarGrilla = () => this.itemsGrilla.length > 0;

  crearUsuario() {
    this.router.navigate(['/crear']);
  }

  emisionAccionColumna(event: any) {

    const obj = event.valorSeleccionado;
    const identificador = event.identificador;

    if (identificador === 'edicion') {
      this.passDataReportService.setData(obj);
      this.router.navigate(['/editar']);
    }

    if (identificador === 'eliminar') {
      this.serviceReports.deleteUsuario(obj.id).subscribe((data: any) => {

        if (data.status) {
          if(data.data) {
            this.getData();
            this.handleMessage('Usuario Eliminado', 'Usuario eliminado correctamente');
          } else {
            this.handleError(data.error);
          }
        } else {
          this.handleError(data.error);
        }

        console.log(data)
      });
    }
  }

  quitarColumnaGrilla( obj: any) {

    obj.forEach(item => {
        const i = this.columnas.indexOf(item);
        if (i !== -1) {
          this.columnas.splice(i, 1);
        }
    });
  }
permisosCrearUsuario() {
  return this.permisos.indexOf(AppConsts.PERMISOS['crear.Usuario']) >= 0 ;
}
addColumnasPorPermisos() {

if (this.permisos.indexOf(AppConsts.PERMISOS['editar.Usuario']) >= 0 ) {
    this.columnas.push(this.edicion);
  }

if (this.permisos.indexOf(AppConsts.PERMISOS['eliminar.Usuario']) >= 0 ) {
    this.columnas.push(this.eliminar);
  }
}

permisosFiltrarPorRol() {
 return this.permisos.indexOf(AppConsts.PERMISOS['filtrar.Usuario.Rol']) >= 0;
}

adicionColumnaGrilla() {

  const objDelete = [];

  objDelete.push(this.edicion, this.eliminar );

  this.quitarColumnaGrilla( objDelete);
  this.addColumnasPorPermisos();
}

  changeBox(event) {

    this.searchReports.idRol = event.value;
    this.adicionColumnaGrilla();
    this.totalRegistrosGrilla = 0;
    this.itemsGrilla = [];
    this.getData();
  }

  handleError( error: any) {
    Swal.fire({
      title: 'ERROR',
      text: error,
      type: 'error',
      confirmButtonText: 'Aceptar'
    });
  }

  handleMessage( titulo: any, mess: any) {
    Swal.fire({
      title: titulo,
      text: mess,
      type: 'success',
      confirmButtonText: 'Aceptar'
    });
  }
  removeTxtTable() {
    this.findItemTxt = interval(200)
    .subscribe(() => {

      const txtRange = document.querySelectorAll('.pagination-range');
      const inputGroup = document.querySelectorAll('.input-group-text');

      if (txtRange.length > 0 && inputGroup.length > 0) {

          inputGroup.forEach(item => {
            item.remove();
          });
          txtRange.forEach( item => {
            item.innerHTML = item.textContent.replace(item.textContent, ''); // .replace('to', 'a').replace('of', 'de');
          });
      }
    });
  }

  txtBusqueda(event) {

    this.searchReports.search = event;
    if (this.searchReports.search.length === 0) {
      this.totalRegistrosGrilla = 0;
      this.itemsGrilla = [];
      this.getData();
    }
  }

  permisosBusqueda() {
    return this.permisos.indexOf(AppConsts.PERMISOS['filtrar.Usuario.Nombre']) >= 0;
  }
}
