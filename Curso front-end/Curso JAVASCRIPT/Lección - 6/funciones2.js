// DIFERENCIAS PARÁMETROS Y ARGUMENTOS 

//parametros: lista de variables que hay dentro de los ():            function ejemplo(parametros){}
//argumentos: valores NUMERICOS que reemplazan a LOS PARAMETROS       resultado = ejemplo(12);

let parametros =  function(a = 3, b = 5){ 

    console.log(arguments[0]); //El argumento 0 corresponde a = 2
    console.log(arguments[1]); //El argumento 1 corresponde b = 8

    console.log(arguments[2]); // Aunque no este en los parametros, se escribe porque en los argumentos 

    return a * b + arguments[2]; /*Se escribe arguments[2] porque ES UN ARGUMENTO que NO ESTA como PARAMATRO*/
}


resultado = parametros(2, 8, 5);       //MANDA ARGUMENTOS para (a, b), sobreescriben a los que estan dentro del ()
console.log(resultado)


//_____________________________________________________________________________________________________


function sumarTodo(){

    let suma = 0;
    for(i = 0; arguments.length > i; i++){
         suma += arguments[i]        //  suma = suma + arguments[i], 
 //i sirve para indicar cada argumento, ordenarlo, e ir sumandolos uno por uno para tener una suma final con todos
    }           // se va a guardar en la variable suma, y retoma otra vez hasta que la condicion (>) no se cumpla
    return suma;       
}

let total = sumarTodo(5, 4, 8, 9, 2)         //Argumentos
console.log(total)



/* PASO POR VALOR = tipos que no objetos (numericos, boolean) se aplica cuando trabajamos con funciones y se
  argumentos a estas, se pasa una copia del valor */
    
let x = 10;  // valor primitivo : no tiene atributos ni metodos

function cambiarValor (a){
   a = 20;
   console.log(a)
}

cambiarValor(x); // se pasa el valor de x (10), hacia la variable "a", pero como "a" tiene un valor asignado (20)
                 // así que no cambio, pero si  a = 20 no existia, entonces sería a = 10; COPIANDO SOLO EL NUMERO
console.log(x)


// PASO POR REFERENCIA:   cambiamos el valor

const persona = {           // lo que esta dentro de paréntesis son objetos que se almacenan en la const persona
    nombre: "Pablo",
    apellido: "Neruda"      // a través de la variable se puede acceder a los atributos
}

function cambiarValorObjeto(p1){  
    p1.nombre = "Jose";    // la var "p1" selecciona el objeto  que va a cambiar y lo sobre escribe
    p1.apellido = "Jiménez"     // se cambia
}

//cambiarValorObjeto dirige la const persona a la varible p1 para que allí se inserten los cambios para cada uno
cambiarValorObjeto(persona)    

// a través de  la funcion cambiarValorObjeto se pasa la referencia (persona) a la variable p1 y dirige a los 
// valores de los objetos para que se cambien
console.log(persona)


