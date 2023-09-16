// una clase es una PLANTILLA que vamos a defenir los ATRIBUTOS y METODOS, que queremos que tengan NUESTROS OBJETOS

// La CLASE NO tiene VALORES, y si los tiene APLICA A TODOS LOS OBJETOS

// super() = sirve para ACCEDER de los ATRIBUTOS y METODOS definidos la CLASE PADRE

// Una clase TIENE NOMBRE, que CONTIENEN ATRIBUTOS y METODOS (operaciones) y con este se podrán
// CREAR OBJETOS que tengan LOS MISMOS ATRIBUTOS Y OPERACIONES, aunque CADA objeto TIENE SUS VALORES

// CREAR CLASS

class Persona{                    // constructor, get y set son METODOS

  constructor(nombre, apellido){    //constructor es la BASE y es como un function,   nombre y apellido = PARAMETROS
    this.name = nombre;                //this.nombre es propiedad = nombre es un parametro
    this.lastname = apellido;}

  get nombre(){                             // get es una función
    return this.name + " " + this.lastname}   // retorna a los valores de constructor y los concatena

  set nombre(nom){                     //nombe es el nombre de set, nom es un parametro
    this.name = nom;                  // del nuevo valor de name va a ser igual al parametro nom
                                      // así que CUANDO SE LLAMA nombe, va a imprimir el nuevo valor de NAME
  }
    
}

// nuevo objeto de tipo Persona
let persona1 = new Persona("Pablo", "Lopez")            // Se pasan los argumentos
console.log(persona1)

console.log(persona1.nombre) //get

persona1.name = "Juan carlos" //cambia nombre
console.log(persona1.nombre) //Aplica el set, por el cambio de nombre



// HOISTING Y CLASES = primero tenemos que definir nuestra clase para poderla utilizar, mientras q en function no
//                     osea que si escribimos el argumento antes de la class no va a funcionar 


class structure_base2{
  constructor(auto, tipo){
    this._car = auto;
    this._type = tipo;
  }

  get car(){
    return this._car;
  }
//                                   Imprimimos los datos y cambiamos los datos de (car)
  set car(date){
    this._car = date;
  }


  get type(){
    return this._type;
  }
//                                  Como se cambio el valor de _type en set, el cambio se va a guardar en el get
  set type(ourtype){
    this._type = ourtype;
  }

  autoCompleto(){                 // No es necesario escribir function
    return this._car + " " + this._type;
  }


  toString(){                    // Se sobreescribe para que no aparezca [object object]
    return this.autoCompleto() ;  // Se aplica el polimorfismo, EL METODO SE EJECUTA DEPENDIENDO SI ES REFERENCIA DE TIPO PADRE O HIJO
  }                              
//  coche1 pertenece a la clase Hija let coche1= new SegundaClass entonces PERTENECE A ESTA y imprime los parametros de este y Clase padre
//  CarOne pertenece a la clase padre let CarOne = new structure_base 2 por lo que PERTENECE A ESTA y imprime SOLO PARAMETROS DE PADRE
} 


// CLASE HIJA                                                                         (car, type),  (get, set)
class SegundaClass extends structure_base2{  // Dentro de "SegundaClass" se heredan los atributos y metodos

  constructor(auto, tipo, velocity){        // Se pasan los parametros del CONSTRUCTOR PADRE, para que añadir todos
    super(auto, tipo);                      // super el "ARGUMENTO", se tienen que definir todos los valores 
//                                             super MANDA A LLAMAR a parametros de la CLASE PADRE

    this._velocidad = velocity;            // velocity, es un parámetro, y _velocidad es un objeto que se define
  }

  get velocidad(){
    return this._velocidad;                 // Regresa el dato "velocidad"
  }

  set velocidad(speed){                    // speed = parámetro, se va a modifiar el dato de "speed"
    this._velocidad = speed;               // se va a cambiar el valor de velocidad, y se va a reflejar en el get
  }


  //SOBREESCRITURA
  autoCompleto(){                           // se tiene que escribir el mismo nombre del metodo
    return super.autoCompleto() + ", " + this._velocidad; 

//super pega toda la linea de atributos que hay dentro de autoCompleto, y nosotros concatenamos en el class Hija lo que falta concatenar
// linea de atributos: this._car + " " + this._type, y por ultimo nosotros concatenamos
  }
}



// ARGUMENTOS

let carOne = new structure_base2("Honda NSX", "Deportivo");   // CLASE PADRE 
console.log(carOne)

//CAMBIAR VALOR CAR, LET
carOne._car = "Nissan GTR";  // Se cambia el valor de nissanGTR, y lo que hace es imprimir el get, con el set cambiado
console.log(carOne.car)
//CAMBIAR VALOR TYPE, LET
carOne._type = "Luxury";     // Se cambia a luxury
console.log(carOne._type)


// CREAR ARGUMENTOS PARA SegundaClass

let coche1 = new SegundaClass("Ford", "Mustang" ,"240km")
console.log(coche1)

//Se manda a llamar autoCompleto desde el clasePadre, utilizando el objeto de clase hija
console.log(coche1.autoCompleto())

/* autoCompleto es un metodo del ClasePadre, donde es llamado desde la clase hija(SegundaClass), allí se utilizan los valores de
 coche1 para que se utilize como argumento y reemplace los parámetros de la clase padr, así se pueda imprimir autoCompletado

En total se dirige autoCompleto desde la SegundaClass, allí se dirigen los valores de coche1 para que reemplacen y desde segundaClass
se puede llamar a imprimir los valores*/


// SOBREESCRITURA
   console.log(coche1.autoCompleto()) // Le falta el valor 240km


// TO STRING   =   Lo que se va a mostrar como resultado en el navegador

console.log(coche1.toString()) // con el error solo muestra [object object]


//La solucion va a sobreescribir los valores de toString, reutilizando o creando un codigo que ejecute objetos
/*   toString(){
          return this.autoCompleto()               autoCompleto ya tiene concatenado los valores
}*/ 

console.log(coche1.toString()) //Ahora aparece los datos 

