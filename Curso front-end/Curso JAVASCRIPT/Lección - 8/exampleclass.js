class PrincipalInfo{                                // CLASE PADRE
    constructor(nombre, apellido, empresa, edad){   //CONSTRUCTOR Y PARAMETROS
        this._nombre = nombre;
        this._apellido = apellido;
        this._empresa = empresa;                    //OBJETOS = ARGUMENTO
        this._edad = edad
    }
                                                  // get: devolver el dato EMPRESA
    get empresa(){     
        return this._empresa
    }
                                                    
    set empresa(cambiar_empresa){                // set: argumentar o definir que actua sobre el get EMPRESA
        this._empresa = cambiar_empresa;
    }

    get edad(){                                  // get: devolver el dato EDAD
        return this._edad;
    }

    set edad(cambiar_edad){                     // set: argumentar o definir que operaciones actua sobre el get edad
        this._edad = cambiar_edad;
    }

    Concatenar_info(){                          // CONCATENAR LOS OBJETOS
        return this._nombre + " " + this._apellido + " " + this._empresa + " " + this._edad;
    }
}



class moreInfo extends PrincipalInfo{           //? CLASE HIJA
    constructor(nombre, apellido, empresa, edad, nacimiento){  // CONSTRUCTOR CON PARAMETROS DE CLASS PADRE Y PROPIO
        super(nombre, apellido, empresa, edad);            //super: ARGUMENTA LOS PARAMETROS DE CLASS PADRE
        this._nacimiento = nacimiento;                     // argumenta parametros del objeto creado en class hija
        
    }

    Concatenar_info(){    // ?SOBREESCRIBIMOS PORQUE VAMOS A CONCATENAR DATOS Y AÑADIR A LA OPERACION this._nacimiento
        return super.Concatenar_info() + ", año nacimiento: " + this._nacimiento   
    }    // Copia todos los objetos de Concatenar_info y lo suma con nacimiento 
    
    toString(){              // toString = para que muestre datos en la pagina
        return this.Concatenar_info()           // toString copia lo mismo de Concatenar_info sobreescrito
    }
    
}

let empleado1 = new moreInfo("Julian" ,"Rojas", "soyhenry", 32, 1990 );
console.log(empleado1);

empleado1._empresa = "Udemy";
empleado1._edad = "33";

console.log(empleado1.Concatenar_info())






