import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URL_SERVICE } from 'src/app/Config/config';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  @Output() txtBusqueda = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit() {

  }

  busqueda(termino: any) {
    this.txtBusqueda.emit(termino);
  }
}
