
//         TIPOS DE DATOS EN JAVASCRIPT

//         DATOS STRING                        

var nombre = "carlos";
console.log(nombre);              //Se imprime el contenido de la variable


//         DATO NUMÉRICO

var numero = 11;
console.log(numero);


//        DATO OBJECT                   VARIOS OBJETOS EN UNA VARIABLE 

var objeto = { 
    nombre : "Juan",              /* Dentro de {} y  se le asignan varios objetos para que los imprima */
    apellido : "Perez",
    edad : "21"
}

console.log(objeto);


//       TYPEOFF                DICE QUE TIPO DE DATO SE ENCUENTRA EN LA VARIABLE


nombre = 11;
console.log(typeof nombre)


//       DATO BOOLEAN           (TRUE Y FALSE)

var boolean = "true";
console.log(boolean)


//       DATO FUNCTION          Utiliza líneas de codigo

function miFuncion(){}              //FUNCTION es la variable
console.log(miFuncion);             


//       DATO SYMBOL

var simbolo = Symbol("Mi simbolo 1");    //Antes del CONTENIDO VA EL SYMBOL      
console.log(simbolo);


//  CLASES EN JAVASCRIPT

class Persona{
    constructor(nombre, apellido){
        this.nombre= nombre                  /* this = se refiere a lo que está dentro de constructor */
        this.apellido = apellido;
    }
}

console.log(Persona)


//  TIPO INDEFINIDO             NO SE MUESTRA NINGÚN DATO,  PERO ES UN TIPO DE DATO

var x;                         /*no se le asigna un valor*/
console.log(x)

/* O se le puede dar como valor indefinido a una variable */

x = undefined                  /*se le asigna un valor como dato indefinido*/ 
console.log(x)


//      DATO NULL        AUSENCIA DE DATOS, se puede UTILIZAR PARA COMPROBAR O ASIGNAR SI UNA VARIABLE ES NULL

var y = null;
console.log(y)


//     ARREGLO          AGRUPACIÓN DE VARIOS DATOS STRING, SE CONOCE COMO OBJECT

var marcas = ["Adidas", "Puma", "Nike"]
console.log(marcas)
console.log(typeof marcas)


//     CADENA VACIA       DATO QUE SE PUEDE UTILIZAR

var vacio = "";
console.log(vacio)


//     CONCATENAR CADENAS    =   Unir valores 

var nombre = "Juan";
var apellido = "Javela";
var años = "31";

/* se aplica todas las variables a una sola para que aplique a un solo resultado  */

/* si NO ESTÁ dentro de comillas SE APLICA LOS VALORES DE LA VARIABLE */
/* si ESTA dentro de comillas se aplica lo que se escribe entre estas */

var nombreCompleto = nombre + " " + apellido + " edad: " + años;
console.log(nombreCompleto);


/* Se escribe dentro de paréntesis para hacer sumas */

var ejemplo = "Camilo"

var total= ejemplo + (27 + 4);
console.log(total)



