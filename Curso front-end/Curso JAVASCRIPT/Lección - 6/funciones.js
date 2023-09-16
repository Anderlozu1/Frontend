// CONJUNTO DE INSTRUCCIONES QUE SE AGRUPAN PARA REALIAR UNA TAREA CONCRETA Y SE REUTILIZAN, ESTA COMPUESTA POR
// PARÁMETROS Y ARGUMENTOS

//DECLARAR FUNCION
//llamar funcion   nombre funcion   argumentos
function           miFuncion        (a, b){                                 //Declarar funcion
console.log("Suma: " + (a + b));                 //Se va a ejecutar cada vez que llamemos a la funcion
}

// LLAMAR FUNCION
miFuncion(2, 3); // 2 = a y 3 = b           -la funcion se puede llamar antes o despues de declarar la funcion



//RETURN
function miFuncion(a, b, c){
    return a + b - c;          //Esta funcion va a regresar el resultado de la operacion
}

//El resultado de la operacion TERMINA EN LA VARIABLE RESULTADO PORQUE DE ALLÍ VIENEN LOS VALORES DONDE FUE 
//ENVIADOS PARA QUE SE SOLUCIONE LA OPERACION 
let resultado = miFuncion(3, 5, 2); 
console.log(resultado);


//Declaración variable tipo expresión
let mouse = function(a, b){           //Dentro de la variable mouse se va a escribir valores de la funcion
    return a+b;                       //Se escribi lo que se va a aplicar
}
resultado = mouse(1, 2);      //A los (caracteres) de la variable mouse se le suplantan los datos en la var resultado
console.log(resultado);       //SE IMPRIME RESULTADO


// SELF-INVOKER         =          funciones que se mandan a llamar a si mismas

//Se pasan los valores de (a, m), se ejecuta el mensaje y por ultimo se concatenan
(function (a, m){
    console.log("Ejecutando una función" + (a+m))
})(10, 4); // Solo se puede llamar una vez

//___________________________________________________________________________________

function argumentos(a, b, c){
    console.log(arguments.length) // CONTAR CUANTOS ARGUMENTOS TENEMOS (arguments.length)
    return a + b - c;
}
resultado = argumentos(12, 4, 5)
console.log(resultado)

var miFuncionTexto = argumentos.toString(); //PASAR LA FUNCION (argumentos) A TEXTO
console.log(miFuncionTexto);


// SUMAR FUNCION TIPO FLECHA     (=>)


const flecha = (a, b) => a + b; // Los argumentos y funciones se guardaban en la variable (flecha)
result = flecha(2, 5);          // se cambian los arguentos y se asignan a una variable
console.log(result)
