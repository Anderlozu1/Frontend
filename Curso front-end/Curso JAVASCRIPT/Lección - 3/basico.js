let x = 3;
let y = 2;
let z = (x + y);

//     OPERACIONES BÁSICAS 
console.log("Resultado de la suma " + z);

z = x - y;
console.log("Resultado de la resta: " + z);

z = x * y;
console.log("Resultado de la multiplicación es " + z);

z = x / y;
console.log("Resultado de la división es " + z);

z = x % y;   // RESIDUO DE LA DIVISIÓN
console.log("Resultado de la residuo es " + z);

z = x ** y;  // EXPONENTES
console.log("Resultado de la operación es " + z);


// INCREMENTO  Y DECREMENTO
// pre-incremento = el operador ++ antes de la variable

z = ++x;                 //Se le asigna un incremento de 1 a x, como su valor es 3 asciende a 4 EN EL MISMO MOMENTO

console.log(x);
console.log(z);

// post-incremento 

z = y++;                 //primero se aplica el valor de y inicial a z: 2 - Después se suma el incremento a y: 3
console.log(y);
console.log(z);

// descendiente, lo mismo pero restándole 1
z = --x;
console.log(x);
console.log(z);

z = x--;
console.log(x);
console.log(z);


// JERARQUIA DE OPERACIONES EN JAVASCRIPT   -     SE LEE DE IZQUIERDA A DERECHA

let a = 3, b = 2, c = 3, e = 5;

d = b + a * c / e;        // Porque se aplica la jerarquía de operaciones, primero mult y division, después suma
console.log(d);


a *= 3;             // a = a * 3
console.log(a);
                    // Continua la operación según el valor anterior
a -= 5;             // a = a - 5
console.log(a);

