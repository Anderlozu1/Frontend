let trabajadores = 452;
let mensaje;

if(trabajadores >= 1 && trabajadores <= 5){
    mensaje = "Su empresa es principiante";
}
else if(trabajadores >= 6 && trabajadores <= 25){
    mensaje = "Su empresa es pequeña";
}
else if(trabajadores >= 26 && trabajadores <= 100){
    mensaje = "Su empresa es mediana";
}
else if(trabajadores >= 101 && trabajadores <= 500){
    mensaje = "Su empresa es grande";

     
}

console.log(mensaje)

// switch             Usa una comparación estricta, es decir que todos tienen que ser numeros o todos letras

let transporte = "Avion"                // Variable que se van utilizar para cambiar datos
let aviso = "";                         // Va a mostrar segun el caso que se ejecute

switch(transporte){                     // Se MANIPULA la variable

    case "Auto":                        // Los case se cambian y corresponden al "" de transporte
        aviso = "Usted viaja en auto"   // Si es el caso que se selecciona en la variable principal se muestra
        break;

    case "Avion":
        aviso = "Usted viaja en avion"
        break;                          // break se coloca siempre

    case "tren":
        aviso = "Usted viaja en tren"
        break;

    case "moto":
        aviso = "Usted viaja en moto"
        break;

    default: "No puede viajar"      // default, se utiliza si ningun case corresponde a lo escrito en la variable
}

console.log(aviso)