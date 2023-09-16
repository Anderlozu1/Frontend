let a = 10

if(a % 2 == 0){                              // Si el RESIDUO de la división SOBRE 2 es IGUAL A 0,
    console.log("El valor si es par: " + a)
}
else{                                        // Si ES DIFERENTE A CERO
    console.log("Es un número impar" + a)
}


let edadminima = 18, edad_usuario = 19

if(edadminima < edad_usuario){          // Si la edad del usuario ES MAYOR a la EDAD MINIMA,  el usuario PASA
    console.log("El usuario puede ingresar al contenido")
}
else{                                   // Si la EDAD MINIMA es MAYOR a la EDAD DEL USUARIO,  el usuario no accede 
    console.log("Usted no cumple el requisito de edad mínima")
}


//    OPERADOR AND    &&          // Los dos tienen que ser verdaderos para que se cumpla

let carlos = 38;
let edad_minima = 20, edad_maxima = 35;

if( edad_minima <= carlos && carlos <= edad_maxima){
    console.log("Carlos puede entrar a la empresa")
}
else{
    console.log("Carlos no puede entrar a la empresa")
}

/*Carlos tiene 38 años, la edad mínima es de 20 años y la máxima es de 35.
  Si la edad de carlos es mayor a la edad mínima, pasa la primera fase
  Si la edad de carlos es menor a la edad máxima ingresa a la empresa
  
  Como carlos es 20 < 38 PERO > 35 NO ENTRA A LA EMPRESA*/ 


//     OPERADOR   OR             son verdaderos si uno de ellos son verdaderos

let vacaciones = false, diaDescanso = false;

if( vacaciones || diaDescanso){
    console.log("El padre puede asistir al juego del hijo")
}
else{
    console.log("El padre está ocupado")
}

// Como los dos valores son falsos, va a aparecer un valor negativo


//    OPERADOR TERNARIO    ?   

let numero = 9;

let resultado = (numero>2) ? "primero" : "segundo";
console.log(resultado)

/* Aplica al resultado de la operación entre paréntesis lo que se le escriba
   Si la operación es verdadera se va a reemplazar por lo que haya en el primer "" 
   Si no es falsa lo ocupa el segundo "" */
  