// CREAR OBJETOS --- MÁS NORMAL
let persona1 = {             // persona1 es un OBJETO y dentro de ella se pueden AÑADIR PROPIEDADES
     nombre: "Juan",                
     apellido: "perez",              //propiedades: nombre, apellido, email y edad
     email: "jperez@gmail.com",
     edad: 28,

     nombreCompleto: function(){      // CONCATENAR objetos:
        return this.nombre + " " + this.apellido         // ACCEDER A LAS PROPIEDADES de los objetos
     }
}                

persona1.nombre = "Mateo";
console.log(persona1.nombre);

console.log(persona1);

console.log(persona1.nombreCompleto());
// Se colocan los paréntesis al final para saber que se manda a llamar una funcion


// CREAR OBJETO CON new Object()     --- MENOS USADO


let persona2 = new Object();       // Se crea un NUEVO OBJETO 
persona2.apellido = "Serrato";      //las propiedades apunta al nuevo objeto que se esta creó llamado persona2
persona2.address = "Cra18#49-12b";
persona2.neighborhood = "Timanco";
persona2.tel = "383 3189318"

persona2.direction = function(){
   return this.address + " " + this.neighborhood;
} 

delete persona2.tel                        //ELIMINAR UNA PROPIEDAD
console.log(persona2.tel)

console.log(persona2.direction());
console.log(persona2["apellido"])    //Otra forma de acceder a propiedad


// FOR IN   = devuelve los objetos y VALORES de objetos


console.log(persona2)  // Devuelve valores y objetos juntos

for( valorperson2 in persona2){           //Dentro de valorperson2 se va a guardar los objetos de persona2
    console.log( valorperson2 );        //Solo almacena objetos
    console.log(persona2[valorperson2]) //Se ve la correspondencia de cada objeto
}


//Imprimir objetos = concatenar valor de cada propiedad


console.log(persona2.address);

for(val0res in persona2){
   console.log(persona2[val0res]);}

let personaArray = Object.values (persona2);
console.log(personaArray);

let personaString = JSON.stringify(persona2);    //Convierte nuestro objeto en una cadena
console.log(personaString);


// GET Y SET  =   acceder y modificar valores de las propiedades de nuestros objetos


let site_21 = {
    name: "mauricio",
    lastname: "hernandez",
    apartment: 21,

    get user(){
        return this.name.toUpperCase() + " " + this.lastname.toUpperCase()
    },

    set user(user){
    this.lastname = user.toUpperCase()
    }

}
console.log(site_21.user)

site_21.lastname = "suarez";
console.log(site_21.user)


// MUY IMPORTANTE 
// Constructores = funcion especial que se trabaja con objetos, new


function Persona(nombre, apellido, email){     //nombre, apellido, email son variables
//  propiedad    parametro
    this.nombre = nombre;       // se manda a decir que trabajamos con el parámetro nombre y es el mismo atributo
// this, significa que estamos trabajando con las propiedades del objeto (nombre), si no se refiere al parámetro.
    this.apellido = apellido;
//Se define la propiedad apellido, y se asigna al parámetro apellido de la function
    this.email = email;

    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido         //this toma el valor del objeto con el que se trabaje
    }
}

// quiere decir que LOS DATOS NUEVOS que se mandan a la function(persona), se ASIGNAN A CADA VARIABLE QUE SE MANDA
// osea que la FUNCTION PERSONA organiza LOS DATOS QUE MANDAN y los devuelve  A LA VARIABLE QUE SE MANDARON

let padre = new Persona("Juan", "Perez", "jperez@gmail.com");   
console.log(padre) 

let madre = new Persona("Daniela", "Sierra", "sierradani@gmail,com");
console.log(madre.nombreCompleto())




