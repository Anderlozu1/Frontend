//? Strict sirve para que sea OBLIGATORIO DECLARAR una VARIABLE

"use strict";

let x = 10;  //TODO aparece que no está definida porque no se ha puesto let o const
console.log(x); 


function miFuncion(){

    "use strict"               //! "use strict" se puede UTILIZAR al inicio del js o al inicio de una function

     k = 1;
     console.log(k)             // no se imprime
}