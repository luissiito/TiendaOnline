import Global from './Global.js';
import ProductoHTML from './ProductoHTML.js';
import {sistemaDeVentas} from '../main.js';

export default class CarritoDeComprasHTML extends Global{
        constructor(){
            super();
            this.productos = [];
            this.productosHTML = [];
            this.imagen = document.createElement('img');
            this.cantidadDeProductos = document.createElement('h3');
            this.mensajeDeInformacion = document.createElement('p');
            this.total = document.createElement('div');
            this.armar();
            this.agregarEventoClickAlCuadro();
            this.agregarEventoMouseOverAlCuadro();
            this.agregarEventoMouseOutAlCuadro();
            this.cargarEstilosCSS();
        }
        
        getProductos(){
            return this.productos;
        }
        getProductosHTML(){
            return this.productosHTML;
        }
        getImagen(){
            return this.imagen;
        }
        getCantidadDeProductos(){
            return this.cantidadDeProductos;
        }
        getMensajeDeInformacion(){
            return this.mensajeDeInformacion;
        }
        getTotal(){
            return this.total;
        }
        
        setProductos(nuevosProductos){
            this.productos = nuevosProductos;
        }
        setProductosHTML(nuevosProductosHTML){
            this.productosHTML = nuevosProductosHTML;
        }
        setImagen(nuevaImagen){
            this.imagen = nuevaImagen;
        }
        setCantidadDeProductos(nuevaCantidadDeProductos){
            this.cantidadDeProductos = nuevaCantidadDeProductos;
        }
        setMensajeDeInformacion(nuevoMensajeDeInformacion){
            this.mensajeDeInformacion = nuevoMensajeDeInformacion;
        }
        setTotal(nuevoTotal){
            this.total = nuevoTotal;
        }
        
        agregarEventoClickAlCuadro(){
            super.getCuadro().addEventListener('click', () =>{
                this.mostrarProductos();
            });
        }
        
        agregarEventoMouseOverAlCuadro(){
            super.getCuadro().addEventListener('mouseover', () =>{
                if(this.chequearSiEstaVacio()){
                    super.getCuadro().style = 'cursor: no-drop;'
                    this.getMensajeDeInformacion().textContent = 'El carrito está vacío';
                    this.getMensajeDeInformacion().classList.add('mensajeDeInformacion');
                }
                else{
                    super.getCuadro().style = 'cursor: grab;'
                    this.getMensajeDeInformacion().textContent = 'Haz click para revisar el carrito';
                    this.getMensajeDeInformacion().classList.add('mensajeDeInformacion');
                    this.getMensajeDeInformacion().style = 'right: 17em;';
                }
                super.getCuadro().append(this.getMensajeDeInformacion());
            });
        }
        agregarEventoMouseOutAlCuadro(){
            super.getCuadro().addEventListener('mouseout', () =>{
                    this.getMensajeDeInformacion().remove();
            });
        }
        
        agregarBotonEliminarATodosLosProductosHTML(){
            for(let pHTML of this.getProductosHTML()){
                pHTML.getCuadro().appendChild(pHTML.getBotonEliminar());
            }
        }
        
        armar(){
            this.getImagen().src = './assets/Imágenes/Vistas/CarritoDeCompras/CarritoDeCompras.png';
            super.getCuadro().append(this.getImagen(),this.getCantidadDeProductos(), this.getTotal());
        }
        
        calcularTotal(productos){
            for(let p of productos){
                this.total += p.getPrecio();
            }
        }
        
        chequearSiEstaVacio(){
            return this.getProductos().length == 0;
        }
        
        
        cargarEstilosCSS(){
            super.getCuadro().classList.add('CarritoDeComprasHTML');
            this.getImagen().classList.add('carritoDeCompras');
            this.getTotal().classList.add('total');
        }
        
        cargarInformacion(carritoDeCompras){
            this.setProductos(carritoDeCompras.getProductos());
            this.getCantidadDeProductos().innerHTML = (carritoDeCompras.getTotal() != 0)? `Productos en el Carrito: <span class='cantidadDeProductos'>${carritoDeCompras.getCantidadDeProductos()}</span>` : 'fgg';
        }
        
        crearProductoHTML(){
            return new ProductoHTML();
        }
        
        crearNProductosHTML(arregloDeProductos){     
            for(let i = 0; i < this.getProductos().length; i++){
                this.getProductosHTML()[i] = this.crearProductoHTML();
                this.getProductosHTML()[i].cargarInformacion(arregloDeProductos[i]);
            }
        }
        
        eliminarProducto(producto, cantidadDeProductos){
            this.getCantidadDeProductos().textContent = cantidadDeProductos;
            this.productosHTML = [];
            producto.getCuadro().remove();
            if(this.getProductosHTML().length == 0){
                sistemaDeVentas.iniciar();
            }
        }
        mostrar(){
            document.querySelector('body').appendChild(super.getCuadro());
        }
        
        mostrarProductos(){
            if(!this.chequearSiEstaVacio()){
                document.querySelector('body').appendChild(sistemaDeVentas.getBotonVolver());
                this.cargarInformacion(sistemaDeVentas.getCarritoDeCompras());
                this.crearNProductosHTML(this.getProductos());                
                this.agregarBotonEliminarATodosLosProductosHTML();
                sistemaDeVentas.getPaginador().vaciarPaginador();
                sistemaDeVentas.getMenuDeShampoos().getCuadro().remove();
                sistemaDeVentas.getPaginador().setElementos(this.getProductosHTML());
                sistemaDeVentas.getPaginador().mostrarElementos(document.querySelector('body'));
            }
        }
}


