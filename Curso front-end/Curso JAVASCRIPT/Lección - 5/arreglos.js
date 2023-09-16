// Arreglos viejos let autos = new Array("BMW", "Mercedes", "Volvo");

let vehiculos = ["BMW", "Mercedes", "Volvo"]; //Los datos se quedan guardados en la variable (vehiculos)
console.log(vehiculos);

console.log(vehiculos[0]) //EMPIEZA DESDE 0 que corresponde al PRIMER DATO que hay
console.log(vehiculos[1]) //Segundo dato que hay
console.log(vehiculos[2]) //Tercer dato que hay

// lenght: la cantidad de caracteres y letras que hay dentro de vehiculos (3)

// Como tengo 3 valores en (vehiculos), y como es mayor que la numeración (0)
// como 0<3 la función SE CUMPLE y aumenta +1

for(let numeracion = 0; vehiculos.length > numeracion; numeracion++){ 
    
    console.log(numeracion + ": " +  vehiculos[numeracion]);
}


vehiculos[0] = "$50.000" //REEMPLAZA EL VALOR DE UN CIERTO OBJETO
console.log(vehiculos[0])

vehiculos.push("Audi");  //push: agrega nuevos valores a la variable
console.log(vehiculos)

//____________________________________________________________________________________

let compras = ["Computadora", "Laptop", "Mouse"]; //Indicar valores dentro de una sola variable

//Indicador para marcar el orden, si tengo más compras que indicadores, va a sumar al indicador 1
//       0                3                0          1
for(let indicador = 0;compras.length > indicador; indicador++){
    console.log("Las cosas que compraste aqui son: " + indicador + " " + compras[indicador])
} //Se pone al final[indicador] para que de un salto de línea cuando indique cada elemento

console.log(compras.length);  //muestra la CANTIDAD de elementos que hay dentro de compras


//FORMAS DE AÑADIR NUEVOS VALORES
compras[4] = "Pantalla"
compras[compras.length] = "Tarjetas" 
compras.push("Mousepad")
console.log(compras)


//PREGUNTAR SI UNA VARIABLE ES UN ARREGLO O NO
console.log(Array.isArray(compras))

console.log(compras instanceof Array);

