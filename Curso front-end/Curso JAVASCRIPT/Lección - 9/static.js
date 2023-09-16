class PrincipalInfo{                                      // ?CLASE PADRE

                                                //* Atributo de nuestra CLASE
    static contadorObjetosPersona = 0;          // ATRIBUTO STATIC QUE PERTENECE A LA CLASE PrincipalInfo con VALOR INICIAL a 0 
                                                // porque con cada let que se REFIERA A LAS CLASES PADRE Y HIJA VA SUMANDO +1


    email = "Valor email default";              // * Atributo de nuestros OBJETOS, como eje: (nombre, apellido)


    constructor(nombre, apellido){              //*Los atributo se ASOCIAN con los objetos(this.) y estos atributos solo se pueden acceder
        this._nombre = nombre;                  //* Con LA CREACIÓN DE UN OBJETO DE LA CLASE y que LOS DOS SE ASOCIEN
        this._apellido = apellido;              // TODO Ejemplo: this._apellido = apellido;   OBJETO de APELLIDO = ATRIBUTO APELLIDO

        
        PrincipalInfo.contadorObjetosPersona++;     // * SIEMPRE se llama a un STATIC a través del NOMBRE DE LA CLASE  (PrincipalInfo)
        
        console.log("Se increment " + PrincipalInfo.contadorObjetosPersona)
    }                              // ! por cada let que se refiera a PrincipalInfo o moreInfo va a sumar a contadorObjetosPersona +1
                               

    Concatenar_info(){                          
        return this._nombre + " " + this._apellido 
    }
}



class moreInfo extends PrincipalInfo{                     // ?CLASE HIJA
    constructor(nombre, apellido, nacimiento){  
        super(nombre, apellido);            
        this._nacimiento = nacimiento;                     
        
    }

    Concatenar_info(){    
        return super.Concatenar_info() + ", año nacimiento: " + this._nacimiento   
    }    


    // ?STATIC

    static saludar(){                  //  STATIC: Se va a LLAMAR A TRAVES con nuestra CLASE y no con objetos
        console.log("Mensaje saludar desde el static")
    }        

    static saludar2(nombre_persona){    // se crea el static con el NOMBRE saludar2 y el PARÁMETRO nombre_persona
        console.log(nombre_persona._nombre) // el argumento es el OBJETO _nombre de moreInfo(clase hija)
    }                                   // Se pueden concatenar

}

let empleado1 = new moreInfo("Julian" ,"Rojas", 1990 );
console.log(empleado1.Concatenar_info());

let empleado2 = new moreInfo("Andres", "Losada", 2002)



//? METODOS STATIC  =  los metodos static SE LLAMAN DESDE LAS CLASES y NO con los OBJETOS, los metodos se heredan a la clases hijas


// ! empleado1.saludar ERROR porque las VARIABLES o OBJETOS NO se pueden REFERIR a METODOS STATIC
                                
moreInfo.saludar() // Pero SI SE PUEDE LLAMAR mediante el NOMBRE DE LAS CLASES

moreInfo.saludar2(empleado1)


// ? ATRIBUTOS STATIC = se pueden hederar de las clases padres e hijas


                          //!contadorObjetosPersona es un NUEVO OBJETO
console.log(PrincipalInfo.contadorObjetosPersona)  //* SIEMPRE se tiene que llamar el atributo STATIC a través de LA CLASE (CLASEPADRE)
console.log(moreInfo.contadorObjetosPersona)       // *Los atributos static TAMBIEN se HEREDAN hacia las CLASES HIJAS 

// Como hay dos let que se refieren a las 2 clases, se juntan por el extends y se guardan en el 



console.log(empleado1.email); //* email es UN OBJETO suelto y NO es static, por eso es que se llama desde un let
                              //! Y NO desde la clase, email TAMBIÉN SE HEREDA a la clase hija

//* RESUMEN: Los atributos STATIC se asocian A LA CLASE, y los NO ESTÁTICOS solo se pueden utilizar si CREAMOS OBJETOS de esta clase
//*                                                      que se ASOCIEN a estos atributos. COMO CON LOS PARAMETROS Y ARGUMENTOS constructor   



