//   WHILE

let premios = 0;

// mientras la variable (premios) sea MENOR a 6, MUESTRA LOS PREMIOS QUE HAY EN ESTA
// por ultimo, le AUMENTA 1 a la variable, y cuando llegue 6 SE ACABA el sistema

while(premios < 6){
    console.log("Tienes:  " + premios + " premios")
    premios++;
}
// Cuando cumpla el número máximo muestra el mensaje:
console.log("Alcanzaste el número máximo de premios que son 6")


//   DO WHILE          = revisa cada dato

let posicion = 2;

// Primero se muestra la variable (posición) sin revisar la condición, y así se va sumando con ++, 
//  después REVISA EL VALOR DE CADA DATO Y lo COMPARA CON LA CONDICION para ver si se cumple o no
// Cuando (posicion) llegue a 6 o mas, el sistema SE PARA

do{
    console.log(posicion);
    posicion++;

}while(posicion <= 5);
console.log("La posicion maxima es 5, no pasaste");


// FOR

// se declara la variable   //condicion      //Si se cumple la condicion, aumenta 
for(let cantidad = 0;       cantidad < 4;         cantidad++ ){
    console.log(cantidad);
}
// Cuando llegue a 3 para porque 4 es el limite de la condición

console.log("La cantidad de productos llego al máximo")


//   BREAK   =     Detiene el bucle al que pertenece

for(let productos = 5; productos >= 1; productos--){
    if(productos % 2 == 0){
    console.log("Ahora quedan productos pares: " + productos);
    break;  //Al terminar con break; se finaliza todo el proceso que lo envuelve, es decir el if y for, 
   } 
}
console.log("Los productos se han vendido");


// CONTINUE - SALTA LAS LINEAS A LAS QUE PERTENECE 
//En este caso continue, hace que todas las líneas de if y for se cancelen y prosiga con las otras

for(let mesa = 8; mesa >= 1; mesa--){
    if( mesa % 2 !== 0){         //Si el residuo de la variable mesa es diferente a 0
        continue;   // Salta el proceso y pasa a la siguiente línea de interacción (SALTA AL ELSE)
    }
    
    else{
        console.log(mesa) // Como los de arriba el residuo no es igual a 0, imprime los que si aca
    }
}

