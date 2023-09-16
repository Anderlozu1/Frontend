class Producto{

    constructor(marca, calidad, precio){
        this._marca = marca;
        this._calidad = calidad;
        this._precio = precio;
    }
}

class Blusa extends Producto{

    constructor(nombre, marca, calidad, precio){
        super(marca, calidad, precio);
        this._nombre = nombre;
    }

    toString(){
        return `Nombre-blusa: ${this._nombre}, Marca: ${this._marca}, Calidad: ${this._calidad}, Precio: ${this._precio}`
    }
}

let blusa1 = new Blusa("Blusa tiras", "Leonisa", "Buena", 48000);

class Pantalon extends Producto{
    constructor(nombre, marca, calidad, precio){
        super(marca, calidad, precio);
        this._nombre = nombre;
    }

    toString(){
        return `Nombre-pantalon: ${this._nombre}, Marca: ${this._marca}, Calidad: ${this._calidad}, Precio: ${this._precio}}`
    }
}

let pantalon1 = new Pantalon("Pantalon Vaquero", "Levi's", "Excelente", 160000);

class Zapatos extends Producto{
    constructor(nombre, marca, calidad, precio){
        super(marca, calidad, precio);
        this._nombre = nombre;
    }

    toString(){
        return `Nombre-zapatos: ${this._nombre}, Marca: ${this._marca}, Calidad: ${this._calidad}, Precio: ${this._precio}`
    }
}

let zapatos1 = new Zapatos("Nike Dior", "Nike", "Excelente", 790000)

class Outfit{

    static OutfirId = 0;

    constructor(nombre, blusa, pantalon, zapatos){
        this._blusa = blusa;
        this._pantalon = pantalon; 
        this._zapatos = zapatos;
        this._nombreOutfit = nombre
        this._OutfitID = ++Outfit.OutfirId;
    }

    toString(){
        return `Outfit: ${this._nombreOutfit} \n [${this._blusa},\n ${this._pantalon},\n ${this._zapatos}]`
    }
}

let Outfit1 = new Outfit("Monq", blusa1, pantalon1, zapatos1)

class Orden{

    static contadorOrden = 0;

    constructor(){
        this._TotalRopa = [];
        this._IdOrden = ++Orden.contadorOrden;
    }
 
    agregarProducto(outfit){
        this._TotalRopa.push(outfit);
    }

    mostrarOrden(){
        let totalOrden = "";

        for(let myropa of this._TotalRopa){
            totalOrden += ` \n ${myropa}`
        }
        console.log(`Orden ${this._IdOrden}: \n ${totalOrden} \n `)
    }
}

let Orden1 = new Orden();

Orden1.agregarProducto(Outfit1)


Orden1.mostrarOrden()

