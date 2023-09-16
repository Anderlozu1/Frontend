class Producto{

    static ContadorProductos = 0;

    constructor(nombre, precio){

        this._idProducto = ++Producto.ContadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    toString(){
        return this._idProducto + " " + this._nombre + " " + this._precio;
    }
}


class Orden{

    static ContadorOrdenes = 0;

    static get Max_productos(){
        return 3
    }

    constructor(){
        this._idOrdenes = ++Orden.ContadorOrdenes;
        this._productos = [];
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.Max_productos){
            this._productos.push(producto);
        }
        else{
            console.log("Se han imprimido el mayor num de productos")
        }
    }

    calcularTotal(){
        let totalProductos = 0;

        for(let tenerProducto of this._productos){
            totalProductos += tenerProducto._precio;
        }
        return totalProductos
    }

    
    mostrarOrden(){
        let totalOrden = "";

        for(let AlmacenarDatos of this._productos){
            totalOrden += AlmacenarDatos.toString() +   ", "
        }
        console.log(`Orden: ${this._idOrdenes} Total: $${this.calcularTotal()}, Productos: ${totalOrden} `);
    }
}


let Orden1 = new Orden();

let producto1 = new Producto("Yuca", 2000);
let producto2 = new Producto("Arroz", 3000);
let producto3 = new Producto("Papa", 1500);


Orden1.agregarProducto(producto1);
Orden1.agregarProducto(producto2);
Orden1.agregarProducto(producto3);



Orden1.mostrarOrden()