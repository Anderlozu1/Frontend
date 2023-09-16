class Amazon{

    static ContadorPersonas = 0;   //? Le va a dar un valor numérico a cada objeto QUE SEA MENOR A DOS

    static get max_objetos(){      //* max_objetos obtiene un valor de 2, a partir de 2 ContadorPersonas
        return 2;                  //* NO LES VA A DAR UN DATO NUMERICO              
    }

    constructor(nombre, apellido){
        if(Amazon.max_objetos > Amazon.ContadorPersonas){  // Si amazon.max_objetos > amazon.contadorpersonas
            this._idPersona = ++Amazon.ContadorPersonas;  // en el objeto idpersona vas a guardar el valor de contado
        }
        else{console.log("Se ha llegado al maximo de objetos permitidos")}
        
        //* ++Amazon.ContadorPersona = 0 = antes de que se asigna el valor a cada objeto se suma +1, objeto1 = 1
        //* la información de static se guarda en el objeto idPersona   
    //! POR cada objeto que hay de Clase AMAZON, suma a ContadorPersona +1 y esa misma info se guarda en idPersona
        

        this._nombre = nombre;
        this._apellido = apellido;
    }

   Concatenar(){
        return  this._idPersona + " " + this._nombre + " " + this._apellido;
    }  

    toString(){
        return this.Concatenar();
    }
}



class user_moreInfo extends Amazon{                     //? CLASE HIJA
    constructor(nombre, apellido, direccion){
        super(nombre, apellido)
        this._direccion = direccion;
    }

    Concatenar(){
        return super.Concatenar() + " " + this._direccion;
    }
    

    static user(user){
        console.log(user._apellido)
    }
}


//? DECLARACION DE OBJETOS 


let Usuario1 = new user_moreInfo("Mauricio", "Rojas", "cra#2994 prado")
console.log(Usuario1.toString())

let Usuario2 = new Amazon("Jose", "Castaño");
console.log(Usuario2.toString());

//! TOSTRING SIEMPRE TIENE QUE IR EN LA CLASE PADRE, se asocia CON LAS CLASES PADRES E HIJAS

//TODO     El valor numérico es un STATIC guardado en un objeto llamado idPersona
console.log(Amazon.ContadorPersonas);



//TODO    Como ahora con Usuario3 hay 3 objetos, se deberia de sumar +1, como el maximo es 2 aparece undefined

let Usuario3 = new user_moreInfo("Luis", "Martinez", 3338472838, "cra38 sur")
console.log(Usuario3.toString())

// se dirige con el nombre de la clase porque es un static
console.log(Amazon.ContadorPersonas) 




//?  OBJETOS STATIC QUE NO SE CAMBIAN DE VALOR

console.log(Amazon.max_objetos) //* Obtiene el valor de 5 al que se había referido
Amazon.max_objetos = 10;        //* A pesar de que SE INTENTE CAMBIAR EL VALOR de max_objetos no se puede
console.log(Amazon.max_objetos)













class Concecionaria_empleados{  

    static Enumeracion_empleados = 0;

    constructor(nombre, apellidos, edad){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.enumerar = ++Concecionaria_empleados.Enumeracion_empleados;
    }

    Concatenar_Empleados(){
        return this.enumerar + ". " + this.nombre + " " + this.apellidos + " " + this.edad;
    }

    toString(){
        return this.Concatenar_Empleados()
    }

}


class EmpleadosInfo_Laboral extends Concecionaria_empleados{
    constructor(nombre, apellidos, edad, experiencia, estrato){
        super(nombre, apellidos, edad);
        this.experiencia = experiencia;
        this.estrato = edad;
    }

    Concatenar_Empleados(){
        return super.Concatenar_Empleados() + " " + this.experiencia + " " + this.edad;
    }
}


let Empleado1 = new EmpleadosInfo_Laboral("Juan", "Perez Flores", 32, "6 años", 3);
console.log(Empleado1.toString())

let Empleado2 = new EmpleadosInfo_Laboral("Andres", "Losada Gimenez", 21, "2 años", 2);
console.log(Empleado2.toString())

console.log(EmpleadosInfo_Laboral.Enumeracion_empleados)