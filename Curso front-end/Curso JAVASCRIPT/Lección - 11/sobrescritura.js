//TODO La clase hija va a crear sus propios argumentos o datos

class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    ObtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo};`
    }
}


class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);                // super para utilizar los atributos de la clase padre(nombre, sueldo)
        this._departamento = departamento;
    }
 
    //TODO   SOBREESCRIBIR la funcion padre y concatenarlo con el dato departamento

    ObtenerDetalles(){   //? super.ObtenerDetalles porque super DEVUELVE todo el contenido de la función y lo concatena
        return `Gerente: ${super.ObtenerDetalles()}, departamento: ${this._departamento}`
    }
}


// Cuando se sobreescribe un metodo en la clase hija, se elimina el acceso al de la clase padre(que tiene menos datos)
// pero para ello esta el super, que en este caso REUTILIZAMOS los objetos de la clase padre y lo concatenamos con el nuevo

let empleado1 = new Empleado("Jorge Pelaez", "1100 dolares")
let gerente1 = new Gerente("Luis Mendez", "2900 dolares", "Administración");


//? POLIMORFISMO   =   Imprime el objeto según a lo que este va dirigido, diferenciando los detalles segun cada clase

//Si se pone empleado1 que viene de la clase PADRE, como se va a imprimir la FUNCION ObtenerDetalles, muestra los valores NOMBRE Y SUELDO
//Si se pone gerente1 que viene de la CLASE HIJA,   como se va a imprimir la FUNCION ObtenerDetalles, muestra NOMBRE, SUELDO Y DEPARTAMENTO


function determinarTipo(variable_tipo){
    console.log(variable_tipo.ObtenerDetalles())


//? INSTANCEOF = verifica si esa razón pertenece a la clase indicada 

        // si la variable indicada pertenece a la clase gerente, va a mostrar el mensaje: 
    if(variable_tipo instanceof Gerente){       
        console.log("Es un objeto de tipo gerente")
    }

    else if(variable_tipo instanceof Empleado){
        console.log("Es  un objeto de tipo empleado")
    }
}


// El código indica que se va a tomar la funcion ObtenerDetalles del objeto al que se utiliza va referido(Empleado o Gerente)

determinarTipo(empleado1); //? LOS DATOS DE EMPLEADO1 son el ARGUMENTO de variable_tipo, se imprime el metodo padre de ObtenerDetalles
                     // Osea que  se imprime el NOMBRE Y SUELDO porque así esta indicado en el padre

determinarTipo(gerente1);  //? Los DATOS DE GERENTE1 son el ARGUMENTO de variable_tipo, se imprime el metodo hijo de ObtenerDetalles
                // Osea que se imprime el NOMBRE, SUELDO Y DEPARTAMENTO, que fue lo que se concateno en la clase hija

                

//? INSTANCE OF, linea 42-43

//! CASO 1: instanceof Empleado     (clase padre)

//Empleado lo va a mostrar porque es a la clase a la que se dirige
//Gerente lo va a mostrar PORQUE ES UNA CLASE HIJA de tipo Empleado

//! CASO 2: instanceof Gerente      (clase hija)

//Empleado NO va a mostrar que es una instancia porque INSTANCEOF solo refiere a ESA MISMA CLASE o A LAS HIJAS DE ESA CLASE
// En este caso que EMPLEADO es la clase Padre, por lo que no se refiere.


//? CONCLUSION: instanceof solo refiere a esa misma clase  a la que se refiere y a las clases hijas que esta clase padre contenga