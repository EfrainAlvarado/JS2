  // Simulador: Carrito de compras de un producto seleccionado por el cliente
  // Efrain Alvarado

//************

    let nombreTienda = "XYZ STORE"
    let numero_de_productos = prompt('Ingrese un numero entero con el numero de productos a comprar');


    let contador = 0;
    let listaProductos = [ ]

class Tienda {
    
    // Constructor
    constructor( nombre, producto ) {

        this._nombre = function () {
            return nombre;
        };

        this._producto = function () {
            return producto || [];
        };
    }
    
    // Metodos
    getName() {
        return this._nombre();
    }

    setName( nuevo_nombre ) {
        this._nombre = function () {
            return nuevo_nombre;
        };
    }

    agregarProducto( producto ) {
        this.producto.push(producto);
    }

    getProductos() {

        this._producto().forEach(function ( elemento, index ) {
            console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
            console.log(`Numero de Producto: ${index}`);
            console.log(`Nombre: ${elemento._nombre()}`);
            console.log(`Precio: ${elemento._precio()}`);
        });

    }


    getProductoNombre( busquedaDeNombre ) {

        this._producto().forEach(function (elemento, index) {

            if (elemento._nombre() == busquedaDeNombre) {

                console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
                console.log(`Numero de Producto: ${index}`);
                console.log(`Nombre: ${elemento._nombre()}`);
                console.log(`Precio: ${elemento._precio()}`);

            }

        });

    }
}
 
class Producto {

    // Constructor del Objeto
    constructor( nombre, precio ) {

        this._nombre = function () {
            return nombre;
        };

        this._precio = function () {
            return precio;
        };

    }

    // Metodos asociados para obtener y modificar get y set
    getName() {
        return this._nombre();
    }
    getPrecio() {
        return this._precio();
    }

    setName(nuevo_nombre) {
        this._nombre = function () {
            return nuevo_nombre;
        };
    }
    setPrecio(nuevo_precio) {
        this._precio = function () {
            return nuevo_precio;
        };
    }
}

while( contador < numero_de_productos ){

      
      let nombre = prompt('Ingrese el nombre del producto')
      let precio = parseInt(prompt('Ingrese el precio'))

      let producto = new Producto( nombre, precio )
      
      listaProductos.push( producto )      
   
      contador++

}

let buscar = prompt('Ingrese el nombre del producto que desea buscar. Luego revise el console.log')

const imprimirTienda = ( Tienda, productos, buscar )=>{
    
    console.log( 'Nombre del Tienda:', tienda.getName() )
    console.log('=*=*=*NOMBRE DE PRODUCTOS OBJETO PACIENTE=*=*=*')
    
    // console.log( 'Salida de ARRAY OBJETOS PRODUCTOS')
    for(let producto of productos){
        console.log('Salida de producto', producto._nombre())
    }
    console.log('=*=*=*SALIDA DE PRODUCTOS POR TIENDA=*=*=*')
    tienda.getProductos() 
    console.log('=*=*=*SALIDA DE PRODUCTO BUSCADO POR NOMBRE=*=*=*')
    tienda.getProductoNombre(buscar);
}

let tienda = new Tienda( nombreTienda, listaProductos )

imprimirTienda( tienda,listaProductos, buscar )