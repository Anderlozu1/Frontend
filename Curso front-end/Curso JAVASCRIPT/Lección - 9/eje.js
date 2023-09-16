class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static ContadorRaton = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.ContadorRaton;
    }

    toString(){
        return `Raton: [idRaton ${this._idRaton}, marca: ${this._marca}, tipo Entrada ${this._tipoEntrada}]`
    }
}

let raton1 = new Raton("USB", "Steel Series");
let raton2 = new Raton("Bluetooth", "Razer Viper")

class Teclado extends DispositivoEntrada{
    static ContadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.ContadorTeclado;
    }

    toString(){
        return `Teclado [idTeclado ${this._idTeclado}, marca ${this._marca}, tipo Entrada ${this._tipoEntrada}]`
    }
}

let teclado1 = new Teclado("USB", "Razer");
let teclado2 = new Teclado("USB", "Apple")

class Monitor{

    static ContadorMonitor = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.ContadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    toString(){
        return `Monitor [idMonitor ${this._idMonitor}, marca ${this._tamaño}, tamaño ${this._tamaño}]`
    }
}

let monitor1 = new Monitor("MSI", "24 pulgadas");
let monitor2 = new Monitor("Razer", "21 pulgadas")


class Computadora{

    static ContadorComputadora = 0;

    constructor(nombre, monitor, teclado, raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.ContadorComputadora;
    }

    toString(){
        return `Computadora ${this._nombre}: /n [${this._monitor}, /n ${this._teclado}, /n ${this._raton}]`
    }
}

class Orden{

    static ContadorOrden = 0;

    constructor(){
        this._idOrden = ++Orden.ContadorOrden;
        this._computadoras = [];
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let OrdenTotal = "";

        for(let compuConcatenar of this._computadoras){
            OrdenTotal += ` /n ${compuConcatenar}`
        }

        console.log(`Orden ${this._idOrden}, /n ${OrdenTotal} /n`)
    }
}

let pc1 = new Computadora("Hutsman", monitor1, teclado1, raton1);
let pc2 = new Computadora("OFFICE", monitor2, teclado2, raton2)



let Orden1 = new Orden();

Orden1.agregarComputadora(pc1);
Orden1.agregarComputadora(pc2);

Orden1.mostrarOrden()
