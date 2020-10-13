import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTableResource } from 'angular7-data-table';
import { ColumnaGrilla } from 'src/app/models/columnaGrilla';

@Component({
  selector: 'app-table-visor',
  templateUrl: './table-visor.component.html',
  styleUrls: ['./table-visor.component.css']
})
export class TablaVisorComponent implements OnInit {

  private grillaResource = new DataTableResource([]);
  public itemsGrilla: any[];
  @Input() mostrarTotalArchivos = true;

  usuariox = 'este aparecio .... ';
  readonly tiposColumnas = {

    textoPlano: 1,
    textoPorcentaje: 2,
    barraPorcentaje: 3,
    nivelDivipol: 4,
    emisorAccion: 5,
    estado: 6,
    comboAccion: 7,
    opcionesUsuario: 8,
    emisorAccionTextoFijo: 9
};

  readonly limiteGrilla: number = 25;
  @Input() filaTotal = false;
  @Input() columnas: ColumnaGrilla[];
  @Input() totalRegistros: number;
  @Input() shortDefaultColumn = 2;
  @Input() sortAscDefault = true;
  @Input() substituteRows = false;
  @Input() visualizarPdf = false;
  @Input() titleHeader = 'Header';
  @Input() visualizarDescripcionTexto = false;

  @Output() columnSelectedEmitter = new EventEmitter();
  @Output() reloadEmitter = new EventEmitter();


  @Input()
  set items(itemsGrilla: any[]) {
      try {
          /** Si fue establecido que la última fila es un total,
           * se establece una característica adicional al item final de los registro, llamada "ultimaFila"
           * que servirá para saber si el registro es el último y la grilla debe mostrarlo como total
           * */

           this.itemsGrilla = itemsGrilla;
           this.grillaResource = new DataTableResource(itemsGrilla);

           // $('.pagination-page').attr('class', 'width: auto !important');

      } catch (e) {

        console.log('error en grilla ', e);
      }
  }
  get items() {
      return this.itemsGrilla;
  }

  constructor() { }

  ngOnInit() {
  }

  emitirAccion(identificadorAccion: string, item) {

    this.columnSelectedEmitter.emit({
        identificador: identificadorAccion,
        valorSeleccionado: item
    });
}

reloadItems(params) {
  try {
      // Se emiten los parametros de paginacion u ordenamiento
      this.reloadEmitter.emit(params);
  } catch (e) { }
}

grillaLista() {

  return this.totalRegistros > 0 && this.itemsGrilla !== undefined;
}

colores() {
  return '#ebebeb';
}

changeclass(index) {
  return '';
}
}
