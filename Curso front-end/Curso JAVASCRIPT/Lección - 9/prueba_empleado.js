// PRACTICAR TODO LO QUE HEMOS VISTO    SECTION: 32

class Persona{

  static contadorPersonas = 0;

  constructor(nombre, apellido, edad){
  this._nombre = nombre;
  this._apellido = apellido;
  this._edad = edad;
  this._idpersona = ++Persona.contadorPersonas;
  }

  get idPersona(){
    return this.idPersona;
  }

  get nombre(){
    return this._nombre;
  }

  set nombre(cambiar_nombre){
    this._nombre = cambiar_nombre;
  }

  get apellido(){
    return this._apellido;
  }

  set apellido(cambiar_apellido){
    this._apellido = cambiar_apellido;
  }

  get edad(){
    return this._edad;
  }

  set edad(cambiar_edad){
    this._edad = cambiar_edad;
  }

  Concatenar_Persona(){
    return this._idpersona + ". " + this._nombre + " " + this._apellido + " " + this._edad;
  }

  toString(){
    return this.Concatenar_Persona();
  }
}


class Empleado extends Persona{

  static contadorEmpleado = 0;

  constructor(nombre, apellido, edad, sueldo){
    super(nombre, apellido, edad)
    this._sueldo = sueldo;
    this._idEmpleado = ++Empleado.contadorEmpleado;
  }

  get idEmpleado(){
    return this._idEmpleado
  }

  get sueldo(){
    return this._sueldo;
  }

  set sueldo(cambiar_sueldo){
    this._sueldo = cambiar_sueldo 
  }

  Concatenar_Persona(){
    return super.Concatenar_Persona() + " " + this.sueldo
  }

  toString(){
    return this.Concatenar_Persona()
  }
}


class Cliente extends Persona{

  static contadorCliente = 0;

  constructor(nombre, apellido, edad, fechaRegistro){
    super(nombre, apellido, edad);
    this._fechaRegistro = fechaRegistro;
    this._idCliente = ++Cliente.contadorCliente;
  }

  get idCliente(){
    return this.idCliente;
  }

  get fechaRegistro(){
    return this._fechaRegistro;
  }

  set fechaRegistro(cambiar_fecha){
    this._fechaRegistro = cambiar_fecha
  }

  Concatenar_Persona(){
    return  this._fechaRegistro + ": " + super.Concatenar_Persona() 
  }

  toString(){
    return this.Concatenar_Persona()
  }
}


let cliente1 = new Cliente("Juan",  "Perez", 23, "28/10/2022");
console.log(cliente1.toString())


