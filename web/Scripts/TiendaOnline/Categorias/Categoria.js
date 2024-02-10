/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {categoria, menuPrincipal, menuCategorias, menuSubCategoria, menuMensajesDelSistema} from '../main.js';
import General from '../General.js';
import SubCategoria from './SubCategorias/SubCategoria.js';

const subCategoria = new SubCategoria();   

export default class Categoria extends General{
    constructor(){
        super();
        this.NombresDeLasCategorias = [];
        this.NombresDeLasCategorias[0] = "BEBIDAS";
        this.NombresDeLasCategorias[1] = "CERVEZAS";
        this.NombresDeLasCategorias[2] = "DULCES (SIN STOCK)";
        this.NombresDeLasCategorias[3] = "JUGOS";
        this.NombresDeLasCategorias[4] = "LÁCTEOS";  
        this.CategoriaBebidas = [];
        this.CategoriaBebidas = [
            subCategoria.getProductosDeLaSubCategoriaBebidas(1), // PRODUCTOS SUBCATEGORÍA BEBIBAS NORMALES BOTELLA 3 LT 
            subCategoria.getProductosDeLaSubCategoriaBebidas(2), // PRODUCTOS SUBCATEGORÍA BEBIBAS NORMALES BOTELLA 2 LT 
            subCategoria.getProductosDeLaSubCategoriaBebidas(3), // PRODUCTOS SUBCATEGORÍA BEBIBAS NORMALES BOTELLA 1.5 LT 
            subCategoria.getProductosDeLaSubCategoriaBebidas(4), // PRODUCTOS SUBCATEGORÍA BEBIBAS NORMALES BOTELLA 1 LT
            subCategoria.getProductosDeLaSubCategoriaBebidas(5)  // PRODUCTOS SUBCATEGORÍA BEBIBAS NORMALES BOTELLA LATA 350 CC
        ];
    } 
    mostrarMenuSubCategorias(numeroDeOpcion){//ES LLAMADA DESDE LA CLASE Categoria EN Categoria.js
        menuCategorias.getTituloDelMenu().appendChild(menuCategorias.getTituloDelMenu());       
        this.mostrarNombresDeLasCategorias(numeroDeOpcion);
    }
    // INICIO FUNCIONES GET AND SET
    getNombresDeLasCategorias(){
        return this.NombresDeLasCategorias;
    }
    getCategoriaBebidas(){
       return this.categoriaBebidas; 
    }
    // FIN FUNCIONES GET AND SET
    
    listarNombresDeLasCategorias(menuX){
        switch(menuX.getNombre()){
            case 'MENÚ PRINCIPAL':
                for(let i = 0; i < this.getNombresDeLasCategorias().length; i++){    
                    menuPrincipal.getNombresDeLasCategoriasMP()[i].innerHTML = `<a href="#">${this.getNombresDeLasCategorias()[i]}</a>`;
                    menuPrincipal.getListaDeNombresDeLasCategoriasMP().appendChild(menuPrincipal.getNombresDeLasCategoriasMP()[i]);
                } 
                menuPrincipal.getCuadroDelMenu().appendChild(menuPrincipal.getListaDeNombresDeLasCategoriasMP());
                break;
            case 'MENÚ DE LAS CATEGORÍAS':
                for(let i = 0; i < this.getNombresDeLasCategorias().length; i++){    
                    menuCategorias.getNombresDeLasCategoriasMC()[i].innerHTML = `<a href="#">${this.getNombresDeLasCategorias()[i]}</a>`;
                    menuCategorias.getListaDeNombresDeLasCategoriasMC().appendChild(menuCategorias.getNombresDeLasCategoriasMC()[i]);
                }   
                menuCategorias.getCuadroDelMenu().appendChild(menuCategorias.getListaDeNombresDeLasCategoriasMC());   
                break;
        }
    }   
} 
