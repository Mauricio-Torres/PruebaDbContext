
export class Usuario {

    id: any;
    nombre: any;
    idRol: any;
    status: any;
    password: any;


  constructor(data) {
    if (data !== undefined) {
      this.id = data['id'] !== undefined ? data['id'] : 0;
      this.idRol = data['idRol'] !== undefined ? data['idRol'] : 0;
      this.nombre = data['nombre'] !== undefined ? data['nombre'] : '';
      this.password = data['password'] !== undefined ? data['password'] : '';
      this.status = data['status'] !== undefined ? data['status'] : false;

    }
  }

  static fromJS(data) {
    return new Usuario(data);
  }

  toJS(data?: any) {
    data = data === undefined ? {} : data;
    if (this.id !== undefined && this.id !== null) {
      data['id'] = this.id;
    }
    if (this.idRol !== undefined && this.idRol !== null) {
      data['idRol'] = this.idRol;
    }
    if (this.nombre !== undefined && this.nombre !== null) {
      data['nombre'] = this.nombre;
    }
    if (this.status !== undefined && this.status !== null) {
      data['status'] = this.status;
    }
    if (this.password !== undefined && this.password !== null) {
      data['password'] = this.password;
    }
    return data;
  }

  toJSON() {
    return JSON.stringify(this.toJS());
  }

  clone() {
    const json = this.toJSON();
    return new Usuario(JSON.parse(json));
  }
}
