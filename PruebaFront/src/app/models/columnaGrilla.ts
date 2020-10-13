
export class ColumnaGrilla {
  /**
   * Título a mostrar en la columna
   **/
  titulo: string;

  /**
   * Propiedad a mostrar en la columna perteneciente al objeto de la fila.
   **/
  columnaValor: string;

  /**
   * Orden de la columna en la grilla.Esta propiedad sirve para realizar el ordenado en back.
   * */
  orden: number;

  /**
   * Identificador del tipo de la columna. Este es definido por la constante "tipos_columnas" dentro
   * del archivo de constantes
   **/
  tipo: number;

  /**
   * Identificador dado por el padre de la grilla para identificar el evento emitido
   *      * por la columna que sea tipo Emisor de acciones
   **/
  identificadorAccion: string;

  /**
   * Identifica el campo del item cuyo valor nulo, indefinido, vacío o 0, bloquea la acción de la columna
   * Ya sea navegación de divipol, o emisión de acción
   * */
  // bloqueoAccion: string;


  /**
   * Indica si la columna es ordenable o no
   **/
  sortable: boolean;

  /**
   * visualizar boton
   **/
  visualizarBtn: boolean;

  /**
   * forma que tendra el boton
   **/
  classBoton: string;

  /**
   * color que tendra el boton
  **/
  classColorButton: string;

  /**
   * Constructor de la clase ColumnaGrilla
   * @param titulo
   * @param columnaValor
   * @param tipo
   * @param sortable
   * @param opcionNA?
   * @param identificadorAccion?
   */
  constructor(titulo: string,
              columnaValor: string,
              orden: number,
              tipo: number,
              sortable: boolean = true,
              identificadorAccion?: string,
              visualizarBtn: boolean = false,
              formaBoton?: string,
              classColorButton?: string) {
      this.titulo = titulo;
      this.columnaValor = columnaValor;
      this.orden = orden;
      this.tipo = tipo;
      this.sortable = sortable;
      this.identificadorAccion = identificadorAccion;
      this.visualizarBtn = visualizarBtn;
      this.classBoton = formaBoton;
      this.classColorButton = classColorButton;
  }

}
