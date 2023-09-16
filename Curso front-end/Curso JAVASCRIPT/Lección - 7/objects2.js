function terraVision_dataBase(polo, zone, country){
    this.pol = polo;
    this.zone = zone;
    this.country = country;

    this.everything = function(number_country, finally_option){       //PARAMETROS, FUNCTION
        return  number_country  + " "+ this.pol + " " + this.country + " " +  finally_option;

    }
}
terraVision_dataBase.prototype.planet = "World"    // PROTOTYPE

let mexico = new terraVision_dataBase("south", "oeste", "mexico");       // NEW DATE
console.log(mexico)
console.log(mexico.everything("one", "tueh"))  //ARGUMENTOS PARA CAMBIAR PARAMETROS EN FUNCTION
console.log(mexico.planet)


//_____________________________________________________________________________________________________


let data_baseTerraVision_Country1 = {
    country_name: "Poland",
    poblation_country: "34 million",

    total: function(data_country){                   // PARAMETER
        return this.country_name + ", " + this.poblation_country + " " + data_country ;
    }

}
// IMPRIMIR NORMAL
console.log(data_baseTerraVision_Country1.total(", popular country"))


let country_2 = {
    country_name: "New zeland",
    poblation_country: "15 million"

}

// USAR LA MISMA FUNCTION DE data_baseTerraVision sin volver a escribirla UTILIZANDO CALL
console.log(data_baseTerraVision_Country1.total.call(country_2, "technologic"))

// USAR LA MISMA FUNCTION PERO CON (APPLY)
let more = ["bad country"] // El argumento se guarda dentro de la variable more
//A 
console.log(data_baseTerraVision_Country1.total.apply(country_2, more));
//


let nuevoObjeto2 = {nombre: "ana"};

let miCadena2 = "Hola";

let numero2= 12;

let boolean2 = true;

let arreglo2 = ["BMW", "Audi", "Mclaren"];

let funcion2 = function(){}

