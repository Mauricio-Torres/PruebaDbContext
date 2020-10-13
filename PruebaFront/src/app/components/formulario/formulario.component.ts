import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public formGroup: FormGroup;

  form;
  rolSelected;
  usuario: Usuario;
  selectEstatus = [{ display: 'Activo', value: true }, {display: 'Inactivo', value: false}];
  statusSelected = false;


  @Output() SetUsuario = new EventEmitter<any>();
  @Input() opcionesCheckBox = [];
  @Input() editando = false;
  @Input() claseButton = 'fa fa-plus-circle';
  @Input()
  set user(userInput: Usuario) {
      try {
        this.usuario = userInput;
        this.rolSelected = userInput.idRol;
      } catch (e) {

        console.log('error ', e);
      }
  }
  get items() {
      return this.usuario;
  }

  constructor(private formBuilder: FormBuilder) {


  }


  private validateSelectRol(control: AbstractControl) {
    const rol = control.value;
    let error = null;
    if (rol === 0) {
      error = { ...error, seleccionarRol: 'Seleccione un Rol' };
    }

    return error;
  }

  submit() {
    if (this.form.valid) {

      const obj = {
        id: this.usuario === undefined? 0: this.usuario.id,
        nombre: this.form.value['firstname'],
        idRol: this.form.value['rol'],
        status: true,
        password: this.form.value['password'],
      }
      const user = new Usuario(obj);
      this.SetUsuario.emit(user);


    } else {
      Swal.fire({
        title: 'Error',
        text: 'Complete los campos requeridos',
        type: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  }
  ngOnInit() {

    console.log(this.usuario)
    this.form = this.formBuilder.group({
      firstname: [this.usuario === undefined ? '' : this.usuario.nombre , Validators.required],
      password: [this.usuario === undefined ? '' : this.usuario.password, Validators.required],
      rol: [this.usuario === undefined ? 0 : this.usuario.idRol, [Validators.required, this.validateSelectRol] ],
      status: [this.usuario === undefined ? '' : this.usuario.status ]
    });
  }

  changeBox(event) {
  }
}
