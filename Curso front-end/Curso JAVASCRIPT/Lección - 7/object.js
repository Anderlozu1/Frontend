// OBJETOS EN JS = es un CONTENEDOR que GUARDA PROPIEDADES, que estan TIENEN UN NOMBRE Y VALOR

let person1 = {                    // OBJETO
    name: "Juan",                  // PROPIEDAD
    apellido: "Losada",            // PROPIEDAD

    nombre: function(){             // LA PROPIEDAD APELLIDO GUARDA UNA FUNCTION 

/* dice que retorne a las propiedades de person1 y que vamos a manipular los objetos name y apellido del objeto person1
   RETURN: retorne a los valores anteriores
   THIS  : manipular la propiedad que indicamos  */
    return this.name + " " + this.apellido;  
    }
}
console.log(person1);
console.log(person1.nombre())  // Se escribe () porque es una función


// CREAR OBJETO CON new Object


let person2 = new Object();        // Lo mismo que let person1 = {}, pero de una forma distinta y MENOS USADA
    person2.name = "Julian";               
    person2.apellido = "Polo";
    person2.tel = 251315

    person2.nombreCompleto = function(){
        return this.name + " " + this.apellido;
    }

    console.log(person2.name)
    console.log(person2.nombreCompleto())


// llamar objetos FOR IN (identificar y llamarlos)


for(info_persona in person2){  //
    console.log(info_persona) //info_persona guarda las propiedades
    console.log(person2[info_persona]) // imprime los valores
}


// borrar propiedad


delete person2.tel;
console.log(person2.tel) // COMPROBAMOS QUE SE ELIMINO


// IMPRIMIR OBJETOS


let personaArray = Object.values(person2)     // se imprime los valores del objeto person2 y se guarda en la var 
console.log(personaArray)  //personaArray para imprimirlos

let personaString = JSON.stringify(person2) 
console.log(personaString)


// GET 

let person3 = {
    name: "Karol",
    apellido: "jimenez",

    get completeName(){     // se extraen los valores, y se concatenan en completeName SIN SER UNA PROPIEDAD
        return this.name + " " + this.apellido;},

    set completeName(completeName){    //Dentro del objeto completo vamos a modificar los valores de completeName
        this.name = completeName.toUpperCase(); 
    }
    
}

console.log(person3.completeName) // GET

person3.name = "Pablo"         //A name, cambiamos su valor  y en vez de ser karol se CAMBIA a pablo
console.log(person3)      // El valor de name ha cambiado



// METODO CONSTRUCTOR = añadir datos desde otras variables 


function base_datos(nombre, apellido, telefono){ //nombre, apellido, telefono PARAMETROS (datos que se pueden cambiar)
    this.name = nombre;
    this.lastname = apellido; //this, son objetos que se pueden manipular y SU RESULTADO VA A SER UN ARGUMENTO
    this.phone = telefono;


    this.info = function(numeration){  // numeration es un parametro que SE DEFINE EN EL console.log
        return numeration + " " + this.name + " " + this.lastname + " " + this.phone}
     //numeration no lleva this porque es una propiedad que NO ESTA DEFINIDA en la function
}


//Dentro de la var persona 1, se AÑADE UN NUEVO ARGUMENTO (new) a base_datos
let persona1 = new base_datos("Pedro", "Romero", 82374827)  // Se escriben los ARGUMENTOS
console.log(persona1)

// dentro de ("") SE ESCRIBE LOS ARGUMENTOS DE LOS DATOS QUE NO ESTAN DEFINIDOS, como lo son "numeration"
console.log(persona1.info("PRIMERO."));


// PROTOTYPE = que todos los objetos de base_datos lleven la propiedad que se denomine


base_datos.prototype.email = "empresarios@gmail.com"
console.log(persona1.email)


// CALL   =  poder usar las funciones de otros objetos para no volver a escribirlo

let people1 = {
    nombres: "Juan Manuel",
    apellido: "Lopez peña",

    nombreCompleto: function(numerador){    //numerador es un PARAMETRO
        return numerador + " " + this.nombres.toUpperCase() + " " + this.apellido.toUpperCase();
                         //toUpperCase = Convertir a MAYÚSCULAS
    }
}

console.log(people1.nombreCompleto.call(people1, "1."))


let people2 = {
    nombres: "Juliana",        // TIENE QUE TENER LAS MISMAS PROPIEDADES para que funcione el call
    apellido: "Polo"
}

// Se llama a people1 (porque tiene la funcion nombreCompleto), y dice que se utilizaran los valores de people2
console.log(people1.nombreCompleto.call(people2, "2."))

