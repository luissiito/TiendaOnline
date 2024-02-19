import BaseDeDatos from '../Datos/BaseDeDatos.js';
import CarritoDeCompras from './CarritoDeCompras.js';
import CarritoDeComprasHTML from '../Vistas/CarritoDeComprasHTML.js';
import MenuDeShampoos from '../Vistas/MenuDeShampoos.js';
import ProductoHTML from '../Vistas/ProductoHTML.js';
import Paginador from '../Paginador.js';

export default class SistemaDeVentas{
        constructor(){
            this.baseDeDatos = new BaseDeDatos();
            this.carritoDeCompras = new CarritoDeCompras();
            this.carritoDeComprasHTML = new CarritoDeComprasHTML();
            this.menuDeShampoos = new MenuDeShampoos();            
            this.paginador = new Paginador();
            this.productosHTML = [];
            this.botonVolver = document.createElement('button');
            this.getBotonVolver().textContent = 'Volver';
            this.añadirEventoClickAlBotonVolver();
            this.añadirEstilosCssAlBotonVolver();
        }
        
        getBaseDeDatos(){
            return this.baseDeDatos;
        }
        getCarritoDeCompras(){
            return this.carritoDeCompras;
        }
        getCarritoDeComprasHTML(){
            return this.carritoDeComprasHTML;
        }
        getMenuDeShampoos(){
            return this.menuDeShampoos;
        }
        getPaginador(){
            return this.paginador;
        }
        getProductosHTML(){
            return this.productosHTML;
        }
        getBotonVolver(){
            return this.botonVolver;
        }
        
        setBaseDeDatos(nuevaBaseDeDatos){
            this.baseDeDatos = nuevaBaseDeDatos;
        }
        setCarritoDeCompras(nuevoCarritoDeCompras){
            this.carritoDeCompras = nuevoCarritoDeCompras;
        }
        setCarritoDeComprasHTML(nuevoCarritoDeComprasHTML){
            this.carritoDeComprasHTML = nuevoCarritoDeComprasHTML;
        }
        setMenuDeShampoos(nuevoMenuDeShampoos){
            this.menuDeShampoos = nuevoMenuDeShampoos;
        }
        setPaginador(nuevoPaginador){
            this.paginador = nuevoPaginador;
        }
        setProductosHTML(nuevosProductosHTML){
            this.productosHTML = nuevosProductosHTML;
        }
        
        añadirEventoClickAlBotonVolver(){
            this.getBotonVolver().addEventListener('click', (e) =>{
                e.preventDefault();
                this.getPaginador().vaciarPaginador();
                this.iniciar();
            });
        }
        añadirEstilosCssAlBotonVolver(){
                this.getBotonVolver().classList.add('botonVolver');
        }
        
        iniciar(){
            this.getBotonVolver().remove();
            this.crearNProductosHTML(this.getBaseDeDatos().getShampoos());
            this.getCarritoDeComprasHTML().mostrar();
            this.getMenuDeShampoos().mostrar();
            this.getPaginador().setElementos(this.getProductosHTML());
            this.getPaginador().mostrarElementos(this.getMenuDeShampoos().getCuadro());
        }
        
        crearProductoHTML(){
            return new ProductoHTML();
        }
        
        crearNProductosHTML(arregloDeProductos){
            for(let i = 0; i < arregloDeProductos.length; i++){
                this.getProductosHTML()[i] = this.crearProductoHTML();
                this.getProductosHTML()[i].cargarInformacion(arregloDeProductos[i]);
            }
        }
        
        removerBotonVolver(){
            this.getBotonVolver().remove();
        }
}
