

class ClasePadre{
  constructor(name, apellido, tel){
    this._nombre = name;
    this._apellido = apellido;
    this._NumberPhone = tel;
  }                                   // El nombre del get y set de un objeto tiene QUE SER EL MISMO

  get nombre(){                       // obtenemos el get NOMBRE
    return this._nombre               // devuelve el valor nombre del constructor
  }

  set nombre(change_Nombre){          // Establecemos el set nombre, con el parámetro (change_nombre)
    this._nombre = change_Nombre      // el valor de nombre es = change_nombre por lo que el valor que se guarda es el de _nombre
  }                                   //cuando el valor de _nombre cambie, al imprimir va a mostrar el valor cambiado en el get por el set

  get apellido(){
    return this._apellido             // devuelve el valor apellido del constructor
  }
                                             
  set apellido(change_apellido){
    this._apellido = change_apellido; // Se guardan los cambios por el argumento del objeto apellido
  }

  get telefono(){
    return this._NumberPhone
  }

  set telefono(change_tel){
    this._NumberPhone = change_tel
  }

  solution_more(){                // CONCATENAR nombre, apellido y phonenumber
    return this._apellido + " " + this._nombre + " " + this._NumberPhone;

  }
  
  // toString =    QUE SE MUESTRE EN LA PAGINA LOS VALORES REALES y no [object]
  toString(){
     return this.solution_more()
  }
}


class ClaseHija extends ClasePadre{  // EXTENDS cuando se quiere contraer datos de la clase PADRE
  constructor(area, name, apellido, tel){ // se escriben los mismos parametros de la clase PADRE y los que estan dentro del nuevo constructor
    super(name, apellido, tel);           // super sirve como el argumento dentro de la clase HIJA
    this._area = area;               // se argumenta el nuevo parametro de la clae HIJA
  }

  get area(){
    return this._area;               // Devuelve el nuevo valor de area
  }

  set area(change_area){
    this._area = change_area;        // Cambia el valor de area y lo manda hacia el get
  }
 

  // SOBREESCRIBIR DATOS
  solution_more(){                            // TIENE QUE TENER EL MISMO NOMBRE
    return this._area + " " + super.solution_more() // el this. proviene del nombre que le hayamos dado al parámetro
  }  
  //Se coloca el super porque nos referimos a unos valores ya dados, y solution_more porque ya es UNA FUNCION HECHA
  //en la clase PADRE, lo unico que se hace es sobreescribir o copiar el codigo que EN ESTE CASO CONCATENA LOS 
  // PARAMETROS de la CLASE PADRE, y por ultimo lo concatenamos todo eso con this._area
  
}



// Imprimir ClasePadre (name, apellido, numberphone)
let person1 = new ClasePadre("Anderson", "Lozano", 231421441)
console.log(person1.solution_more());


// Imprimir ClaseHija (colocando los parametros del clase padre con los parametros del constructor de clase hija),y con el argumento super()
let person2 = new ClaseHija("Fisiologia", "manuel", "Suarez", 1438130)
console.log(person2)

person2._nombre = "Josua"  // el valor nombre se cambia a josua


// Imprimir mediante una funcion get concatenando todos los valores
console.log(person2.solution_more()) //josua se cambio


// imprimir toString

console.log(person2.toString())  // Ajusta los 4 parametros que tiene person2


console.log(person1.toString())  // Ajusta los 3 parametros que tiene person1








