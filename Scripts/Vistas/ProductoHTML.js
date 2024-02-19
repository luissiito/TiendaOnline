
import Global from './Global.js';
import {sistemaDeVentas} from '../main.js'; 

export default class ProductoHTML extends Global{
        constructor(){
            super();
            this.producto;
            this.imagen = document.createElement('img');
            this.nombre = document.createElement('h2');
            this.marca = document.createElement('h3');
            this.tamaño = document.createElement('h3');
            this.variedad = document.createElement('h3');
            this.precio = document.createElement('h2');
            this.botonAgregar = document.createElement('button');
            this.botonEliminar = document.createElement('button');
            this.cantidadAComprar = document.createElement('div');
            this.agregarEventoClickAlBotonAgregar();
            this.agregarEventoClickAlBotonEliminar();
            this.armar();
            this.cargarEstilosCSS();            
        }        
        
        getProducto(){
            return this.producto;
        }
        getImagen(){
            return this.imagen;
        }
        getNombre(){
            return this.nombre;
        }
        getMarca(){
            return this.marca;
        }
        getTamaño(){
            return this.tamaño;
        }
        getVariedad(){
            return this.variedad;
        }
        getPrecio(){
            return this.precio;
        }
        getBotonAgregar(){
            return this.botonAgregar;
        }
        getBotonEliminar(){
            return this.botonEliminar;
        }
        getCantidadAComprar(){
            return this.cantidadAComprar;
        }
        
        setProducto(nuevoProducto){
            this.producto = nuevoProducto;
        }
        setImagen(nuevaImagen){
            this.imagen = nuevaImagen;
        }
        setNombre(nuevoNombre){
            this.nombre = nuevoNombre;
        }
        setMarca(nuevaMarca){
            this.marca = nuevaMarca;
        }
        setTamaño(nuevoTamaño){
            this.tamaño = nuevoTamaño;
        }
        setVariedad(nuevaVariedad){
            this.variedad = nuevaVariedad;
        }
        setPrecio(nuevoPrecio){
            this.precio = nuevoPrecio;
        }
        setBotonAgregar(nuevoBotonAgregar){
            this.botonAgregar = nuevoBotonAgregar;
        }
        setBotonEliminar(nuevoBotonEliminar){
            this.botonEliminar = nuevoBotonEliminar;
        }
        setCantidadAComprar(nuevaCantidadAComprar){
            this.cantidadAComprar = nuevaCantidadAComprar;
        }
        
        agregarEventoClickAlBotonAgregar(){
            this.getBotonAgregar().addEventListener('click', () =>{
              sistemaDeVentas.getCarritoDeCompras().agregarProducto(this.getProducto());
              sistemaDeVentas.getCarritoDeCompras().mostrarProductos();
              sistemaDeVentas.getCarritoDeComprasHTML().cargarInformacion(sistemaDeVentas.getCarritoDeCompras());
              this.getCantidadAComprar().textContent = `x ${this.getProducto().getCantidadAComprar()}`;
              this.getCantidadAComprar().style = 'display: grid';
            });
        }
        agregarEventoClickAlBotonEliminar(){
            this.getBotonEliminar().addEventListener('click', () =>{
              sistemaDeVentas.getCarritoDeCompras().eliminarProducto(this.getProducto());
              sistemaDeVentas.getCarritoDeComprasHTML().cargarInformacion(sistemaDeVentas.getCarritoDeCompras());
              sistemaDeVentas.getCarritoDeComprasHTML().eliminarProducto(this, sistemaDeVentas.getCarritoDeCompras().getCantidadDeProductos());
              sistemaDeVentas.getCarritoDeComprasHTML().mostrarProductos();
              sistemaDeVentas.getCarritoDeCompras().calcularTotal(sistemaDeVentas.getCarritoDeCompras().getProductos());
              this.getCantidadAComprar().textContent = `x ${this.getProducto().getCantidadAComprar()}`;
              this.getCantidadAComprar().style = 'display: grid';
              
            });
        }
        
        armar(){
            super.getCuadro().append(this.getImagen(),this.getNombre(),
                                    this.getMarca(),this.getTamaño(),
                                    this.getVariedad(), this.getPrecio(),
                                    this.getBotonAgregar(), this.getCantidadAComprar());
        }
        cargarEstilosCSS(){
            super.getCuadro().classList.add('ProductoHTML');
            this.getTamaño().classList.add('tamaño');
            this.getVariedad().classList.add('variedad');
            this.getPrecio().classList.add('precio');
            this.getBotonAgregar().classList.add('botonAgregar');
            this.getBotonEliminar().classList.add('botonEliminar');
            this.getCantidadAComprar().classList.add('cantidadAComprar');
        }
        
        cargarInformacion(producto){
            this.setProducto(producto);
            this.getNombre().textContent = producto.getNombre();
            this.getMarca().textContent = producto.getMarca();
            this.getTamaño().textContent = producto.getTamaño();
            this.getVariedad().textContent = producto.getVariedad();
            this.getPrecio().textContent = `$${producto.getPrecio()}`;
            this.getImagen().src = producto.getRutaImagen();   
            if(!this.getProducto().getCantidadAComprar() == 0){
                this.getCantidadAComprar().textContent = `x ${this.getProducto().getCantidadAComprar()}`;
                this.getCantidadAComprar().style = 'background-color: green; color: white; display: grid';
            }
        }        
}


