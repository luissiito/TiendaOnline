/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {categoria, menuDeNavegacion} from '../main.js';
import Menu from './Menu.js';
import MenuDePresentacionDelProducto from '../Productos/MenuDePresentacionDelProducto.js';
import SubCategoria from '../Categorias/SubCategorias/SubCategoria.js';

const subCategoria = new SubCategoria();

const listaOrdenada = document.createElement('ol');
const listaOrdenadaDelCuadroMenuSubCategoria = document.createElement('ol');

export default class MenuSubCategoria extends Menu{
        constructor(){
            super();
            super.setNombre('MENÚ DE SUBCATEGORÍA');           
            this.listaDeNombresDeProductosDeLaSubCategoria = document.createElement('div');
            this.ProductosDeLaSubCategoria = [];
            super.getCuadroDelMenu().className = 'ocultar';
            super.getCuadroDelMenu().setAttribute('id','cuadroMenuSubCategoria');
            super.getTituloDelMenu().setAttribute('id','tituloDelMenuSubCategoria');
            super.getTituloDelMenu().innerHTML = super.getNombre();
            this.getListaDeNombresDeProductosDeLaSubCategoria().setAttribute('id','listaDeNombresDeProductosDeLaSubCategoria');
        }    
        getListaDeNombresDeProductosDeLaSubCategoria(){
            return this.listaDeNombresDeProductosDeLaSubCategoria;
        }
        getProductosDeLaSubCategoria(){
            return this.ProductosDeLaSubCategoria;
        }
        limpiarListaDeNombresDeProductosDeLaSubCategoria(){
            while(this.getListaDeNombresDeProductosDeLaSubCategoria().hasChildNodes()){
                this.getListaDeNombresDeProductosDeLaSubCategoria().removeChild(this.getListaDeNombresDeProductosDeLaSubCategoria().firstChild)
            }
        }
        limpiarProductosDeLaSubCategoria(){
            this.ProductosDeLaSubCategoria = [];
        }
        cargarCuadrosDeMenuDePresentacionDelProducto(ProductosDeLaSubCategoriaX){
            for(let i = 0; i < ProductosDeLaSubCategoriaX.length;i++){
                this.ProductosDeLaSubCategoria[i] = new MenuDePresentacionDelProducto();
            }
            
        }
        listarProductosDeLaSubCategoria(numeroDeOpcionElegidoEnMenuCategorias, numeroDeOpcionElegidoEnMenuSubCategorias){
            this.limpiarListaDeNombresDeProductosDeLaSubCategoria(); 
            this.limpiarProductosDeLaSubCategoria();
            menuDeNavegacion.vaciarProductosParaPaginar();
            switch(numeroDeOpcionElegidoEnMenuSubCategorias){
                        case 0 : case 1 : case 2 : case 3 : case 4 :
                            for(let i = 0; i < subCategoria.getNombresDeLasSubCategorias().length; i++){
                                 if((numeroDeOpcionElegidoEnMenuCategorias >= 3)){
                                     super.getTituloDelMenu().innerHTML = "MENÚ SUBCATEGORÍA" + "<br> " + subCategoria.getNombresDeLasSubCategorias()[numeroDeOpcionElegidoEnMenuCategorias - 1][numeroDeOpcionElegidoEnMenuSubCategorias];                                     
                                 }else{
                                     super.getTituloDelMenu().innerHTML = "MENÚ SUBCATEGORÍA" + "<br> " + subCategoria.getNombresDeLasSubCategorias()[numeroDeOpcionElegidoEnMenuCategorias][numeroDeOpcionElegidoEnMenuSubCategorias];
                                 }
                             }
                            super.getCuadroDelMenu().appendChild(super.getTituloDelMenu());                            
                            super.getCuadroDelMenu().appendChild(menuDeNavegacion.getCuadroDelMenu());                            
                            switch(numeroDeOpcionElegidoEnMenuCategorias){                                
                                case 0 : 
                                    this.cargarCuadrosDeMenuDePresentacionDelProducto(subCategoria.getProductosDeLaSubCategoriaBebidas(numeroDeOpcionElegidoEnMenuSubCategorias + 1));
                                    for(let i = 0; i < subCategoria.getProductosDeLaSubCategoriaBebidas(numeroDeOpcionElegidoEnMenuSubCategorias + 1).length; i++){
//                                      this.getNombresDeLosProductosDeLaSubCategoria()[i].innerHTML = subCategoria.getProductosDeLaSubCategoriaBebidas(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].mostrarDescripcionDelProducto();                                             
                                        this.getProductosDeLaSubCategoria()[i].getCuadroDeInformacionDelProducto().id = 'cuadroDeInformacionDelProducto_' + subCategoria.getProductosDeLaSubCategoriaBebidas(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getIdentificador() ;
                                        this.getProductosDeLaSubCategoria()[i].setAtributosAlBoton(this.getProductosDeLaSubCategoria()[i].getBotonAgregar(), {'id':`btnAgregar${i}`,'type':'submit','value':'AGREGAR'});
                                        this.getProductosDeLaSubCategoria()[i].getSubtitulo().innerHTML = `EN OFERTA`;
                                        this.getProductosDeLaSubCategoria()[i].getMarcaDelProducto().textContent = subCategoria.getProductosDeLaSubCategoriaBebidas(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getMarca();
                                        this.getProductosDeLaSubCategoria()[i].getNombreDelProducto().textContent = subCategoria.getProductosDeLaSubCategoriaBebidas(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getNombreParaPresentacion();
                                        this.getProductosDeLaSubCategoria()[i].getSimboloDelDinero().textContent = "$";
                                        this.getProductosDeLaSubCategoria()[i].getPrecioDelProducto().textContent = subCategoria.getProductosDeLaSubCategoriaBebidas(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getPrecio();;
                                        this.getProductosDeLaSubCategoria()[i].getVentaPorUnidad().textContent = "x Unidad";
                                        this.getListaDeNombresDeProductosDeLaSubCategoria().appendChild(this.getProductosDeLaSubCategoria()[i].getCuadroDeInformacionDelProducto());   
                                    }
                                break;
                                case 1 :
                                    this.cargarCuadrosDeMenuDePresentacionDelProducto(subCategoria.getProductosDeLaSubCategoriaCervezas(numeroDeOpcionElegidoEnMenuSubCategorias + 1));    
                                    for(let i = 0; i < subCategoria.getProductosDeLaSubCategoriaCervezas(numeroDeOpcionElegidoEnMenuSubCategorias + 1).length; i++){                                         
                                        this.getProductosDeLaSubCategoria()[i].getCuadroDeInformacionDelProducto().id = 'cuadroDeInformacionDelProducto_' + subCategoria.getProductosDeLaSubCategoriaCervezas(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getIdentificador() ;
                                        this.getProductosDeLaSubCategoria()[i].setAtributosAlBoton(this.getProductosDeLaSubCategoria()[i].getBotonAgregar(), {'id':`btnAgregar${i}`,'type':'submit','value':'AGREGAR'});
                                        this.getProductosDeLaSubCategoria()[i].getSubtitulo().innerHTML = `EN OFERTA`;
                                        this.getProductosDeLaSubCategoria()[i].getMarcaDelProducto().textContent = subCategoria.getProductosDeLaSubCategoriaCervezas(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getMarca();
                                        this.getProductosDeLaSubCategoria()[i].getNombreDelProducto().textContent = subCategoria.getProductosDeLaSubCategoriaCervezas(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getNombreParaPresentacion();
                                        this.getProductosDeLaSubCategoria()[i].getSimboloDelDinero().textContent = "$";
                                        this.getProductosDeLaSubCategoria()[i].getPrecioDelProducto().textContent = subCategoria.getProductosDeLaSubCategoriaCervezas(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getPrecio();;
                                        this.getProductosDeLaSubCategoria()[i].getVentaPorUnidad().textContent = "x Unidad";
                                        this.getListaDeNombresDeProductosDeLaSubCategoria().appendChild(this.getProductosDeLaSubCategoria()[i].getCuadroDeInformacionDelProducto());//                                      
                                    }
                                break;
                                case 3 :  
                                    this.cargarCuadrosDeMenuDePresentacionDelProducto(subCategoria.getProductosDeLaSubCategoriaJugos(numeroDeOpcionElegidoEnMenuSubCategorias + 1));
                                    for(let i = 0; i < subCategoria.getProductosDeLaSubCategoriaJugos(numeroDeOpcionElegidoEnMenuSubCategorias + 1).length; i++){                                        
                                        this.getProductosDeLaSubCategoria()[i].getCuadroDeInformacionDelProducto().id = 'cuadroDeInformacionDelProducto_' + subCategoria.getProductosDeLaSubCategoriaJugos(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getIdentificador() ;
                                        this.getProductosDeLaSubCategoria()[i].setAtributosAlBoton(this.getProductosDeLaSubCategoria()[i].getBotonAgregar(), {'id':`btnAgregar${i}`,'type':'submit','value':'AGREGAR'});
                                        this.getProductosDeLaSubCategoria()[i].getSubtitulo().innerHTML = `EN OFERTA`;
                                        this.getProductosDeLaSubCategoria()[i].getMarcaDelProducto().textContent = subCategoria.getProductosDeLaSubCategoriaJugos(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getMarca();
                                        this.getProductosDeLaSubCategoria()[i].getNombreDelProducto().textContent = subCategoria.getProductosDeLaSubCategoriaJugos(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getNombreParaPresentacion();
                                        this.getProductosDeLaSubCategoria()[i].getSimboloDelDinero().textContent = "$";
                                        this.getProductosDeLaSubCategoria()[i].getPrecioDelProducto().textContent = subCategoria.getProductosDeLaSubCategoriaJugos(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getPrecio();;
                                        this.getProductosDeLaSubCategoria()[i].getVentaPorUnidad().textContent = "x Unidad";
                                        this.getListaDeNombresDeProductosDeLaSubCategoria().appendChild(this.getProductosDeLaSubCategoria()[i].getCuadroDeInformacionDelProducto());//                                      
                                    }
                                break;
                                case 4 :  
                                    this.cargarCuadrosDeMenuDePresentacionDelProducto(subCategoria.getProductosDeLaSubCategoriaLacteos(numeroDeOpcionElegidoEnMenuSubCategorias + 1));
                                    for(let i = 0; i < subCategoria.getProductosDeLaSubCategoriaLacteos(numeroDeOpcionElegidoEnMenuSubCategorias + 1).length; i++){                                         
                                        this.getProductosDeLaSubCategoria()[i].getCuadroDeInformacionDelProducto().id = 'cuadroDeInformacionDelProducto_' + subCategoria.getProductosDeLaSubCategoriaLacteos(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getIdentificador() ;
                                        this.getProductosDeLaSubCategoria()[i].setAtributosAlBoton(this.getProductosDeLaSubCategoria()[i].getBotonAgregar(), {'id':`btnAgregar${i}`,'type':'submit','value':'AGREGAR'});
                                        this.getProductosDeLaSubCategoria()[i].getSubtitulo().innerHTML = `EN OFERTA`;
                                        this.getProductosDeLaSubCategoria()[i].getMarcaDelProducto().textContent = subCategoria.getProductosDeLaSubCategoriaLacteos(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getMarca();
                                        this.getProductosDeLaSubCategoria()[i].getNombreDelProducto().textContent = subCategoria.getProductosDeLaSubCategoriaLacteos(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getNombreParaPresentacion();
                                        this.getProductosDeLaSubCategoria()[i].getSimboloDelDinero().textContent = "$";
                                        this.getProductosDeLaSubCategoria()[i].getPrecioDelProducto().textContent = subCategoria.getProductosDeLaSubCategoriaLacteos(numeroDeOpcionElegidoEnMenuSubCategorias + 1)[i].getPrecio();;
                                        this.getProductosDeLaSubCategoria()[i].getVentaPorUnidad().textContent = "x Unidad";
                                        this.getListaDeNombresDeProductosDeLaSubCategoria().appendChild(this.getProductosDeLaSubCategoria()[i].getCuadroDeInformacionDelProducto());//                                      
                                    }
                                break;
                                } 
                                break;
                            }
                            menuDeNavegacion.setNumeroDePaginaActual(1);
                            menuDeNavegacion.setProductosParaPaginar(this.getProductosDeLaSubCategoria());
                            menuDeNavegacion.obtenerCantidadDePaginas();
                            menuDeNavegacion.mostrarPaginacion();
       }  
        mostrarMenuSubCategoria(){//ES LLAMADA DESDE LA CLASE Categoria EN Categoria.js
            super.getCuadroDelMenu().classList.remove('ocultar');
            super.getCuadroDelMenu().appendChild(super.getTituloDelMenu());  
        }
        ocultarCuadroDelMenu(){
            super.getCuadroDelMenu().className = 'ocultar';
        }
}