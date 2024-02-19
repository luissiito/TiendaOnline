/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import Menu from './Menu.js';

export 
default class MenuDeNavegacion extends Menu {
        constructor(){
            super();
            this.botonAnterior = document.createElement('INPUT');
            this.botonSiguiente = document.createElement('INPUT');
            this.cantidadDePaginas = 0;
            this.listaDeProductos = document.createElement('div');
            this.Paginas = [];
//            this.posicionDelIndice = 0;
            this.ProductosParaPaginar = [];            
            this.numeroDePaginaActual = 1;            
            super.setNombre('MENÚ DE NAVEGACIÓN');
            super.getCuadroDelMenu().id = 'cuadroMenuDeNavegacion';
            super.setAtributosAlElemento(this.getBotonAnterior(),{'id':'btnAnterior', 'type':'button', 'value': 'Anterior'});
            super.setAtributosAlElemento(this.getBotonSiguiente(),{'id':'btnSiguiente', 'type':'button', 'value': 'Siguiente'});
            this.getListaDeProductos().id = "listaDeProductosMNAV";
            this.añadirEventoClickAlBotonSiguiente();
            this.añadirEventoClickAlBotonAnterior();
        }
        getBotonAnterior(){
            return this.botonAnterior;
        }
        getBotonSiguiente(){
            return this.botonSiguiente;
        }
        getCantidadDePaginas(){
            return this.cantidadDePaginas;
        }
        getListaDeProductos(){
            return this.listaDeProductos;
        }
        getNumeroDePaginaActual(){
            return this.numeroDePaginaActual;
        }
        getPaginas(){
            return this.Paginas;
        }
        getProductosParaPaginar(){
            return this.ProductosParaPaginar;
        }
        setCantidadDePaginas(cantidadDePaginas){
            this.cantidadDePaginas = cantidadDePaginas;
        }
        setNumeroDePaginaActual(paginaActual){
            this.numeroDePaginaActual = paginaActual;
        }
        setProductosParaPaginar(ProductosParaPaginar){
            this.ProductosParaPaginar = ProductosParaPaginar;
        }
        añadirEventoClickAlBotonSiguiente(){
           this.getBotonSiguiente().addEventListener('click',()=>{
               this.avanzarALaPaginaSiguiente(this.getNumeroDePaginaActual());
           });
        }
        añadirEventoClickAlBotonAnterior(){
           this.getBotonAnterior().addEventListener('click',()=>{
               this.retrocederALaPaginaAnterior(this.getNumeroDePaginaActual());
           });
       }
       avanzarALaPaginaSiguiente(paginaActual){
            this.setNumeroDePaginaActual(paginaActual);
            this.numeroDePaginaActual++;
            this.mostrarPaginacion();
       }
       limpiarListaDeProductos(){
           while(this.getListaDeProductos().hasChildNodes()){//1º LIMPIAR LA Lista De Productos
                this.getListaDeProductos().removeChild(this.getListaDeProductos().firstChild);
            }
       }
       obtenerCantidadDePaginas(){
           for(let i = 0; i < Math.ceil(this.getProductosParaPaginar().length / 6); i++){
               this.Paginas[i] = i;
           }
           this.setCantidadDePaginas(this.getPaginas().length);
       }
        mostrarPaginacion(){
            this.limpiarListaDeProductos();
            this.mostrarPagina(this.getNumeroDePaginaActual());
            super.getCuadroDelMenu().appendChild(this.getListaDeProductos());
            super.getCuadroDelMenu().appendChild(this.getBotonAnterior());
            this.getCuadroDelMenu().appendChild(this.getBotonSiguiente());
            if(this.getNumeroDePaginaActual() > 1){
                this.getBotonAnterior().classList.remove('deshabilitar');
            }else{
                this.getBotonAnterior().className = 'deshabilitar';
            }
             if(this.getNumeroDePaginaActual() < Math.ceil(this.getProductosParaPaginar().length / 6)){
                this.getBotonSiguiente().classList.remove('deshabilitar');
            }else{
                this.getBotonSiguiente().className = 'deshabilitar';
            }
        }
        mostrarPagina(numeroDePagina){
             for(let i = 0; i < this.getCantidadDePaginas(); i++){                
                if((numeroDePagina - 1) == this.getPaginas()[i]){
                    for(let c = (this.getPaginas()[i] * 6); c < (this.getPaginas()[i] * 6) + 6; c++){
                        if(this.getProductosParaPaginar()[c] != null){
                            this.getListaDeProductos().appendChild(this.getProductosParaPaginar()[c].getCuadroDeInformacionDelProducto());
                        } 
                    }      
                }
            }
        }       
        retrocederALaPaginaAnterior(paginaActual){
            this.setNumeroDePaginaActual(paginaActual);
            this.numeroDePaginaActual--;
            this.mostrarPaginacion();
        }
        vaciarProductosParaPaginar(){
            this.ProductosParaPaginar = [];
        }
        
}   
