//   OPERADOR DE IGUALDADES    =   mirar si los datos son iguales

let k = 2, m = "2", s = 5;

let v =  k == m;                // Revisa solo el valor sin importar el tipo       ==
console.log(v)

v = k === m;                    // Revisa el valor y también el tipo de dato       ===
console.log(v)


//   OPERADOR DIFERENTE     = saber si los valores son diferentes o no

let num1 = 3, num2 = "3", num3 = "2"    
confirmar = num1 != num2;       // Es verdad porque son distintos, no revisa a el tipo           !=

console.log(confirmar)

confirmar = num1 !== num2;      // Revisa el tipo de dato
console.log(confirmar)


//    OPERADORES:  MAYOR QUE, MENOR QUE Y IGUAL  > < =

igual = num1 < num2             // falso porque son iguales
console.log(igual)

igual = num1 <= num2            // verdad porque dice MENOR O IGUAL
console.log(igual)

igual = num1 >= num2            // verdad porque dice MAYOR O IGUAL
console.log(igual)