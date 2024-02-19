/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {categoria, menuCategorias, menuMensajesDelSistema} from '../main.js';
import Menu from './Menu.js';

export 
default class MenuPrincipal extends Menu {        
    constructor(){
        super();
        super.setNombre("MENÚ PRINCIPAL");
        this.textoIngreseAOpciones = document.createElement('h3');
        this.listaDeNombresDeLasCategoriasMP = document.createElement('div');
        this.NombresDeLasCategoriasMP = [
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div')
        ];         
        super.getCuadroDelMenu().setAttribute('id','cuadroMenuPrincipal');
        super.getTituloDelMenu().setAttribute('id','tituloDelMenu');        
        this.getTextoIngreseAOpciones().setAttribute('id','textoIngreseOpciones');
        this.getListaDeNombresDeLasCategoriasMP().setAttribute('id','listaDeNombresDeLasCategoriasMP')
    }
    getListaDeNombresDeLasCategoriasMP(){
        return this.listaDeNombresDeLasCategoriasMP;
    }
    getNombresDeLasCategoriasMP(){
        return this.NombresDeLasCategoriasMP;
    }
    getTextoIngreseAOpciones(){
        return this.textoIngreseAOpciones;
    }      
    mostrarMenuPrincipal(){
        super.getTituloDelMenu().textContent = super.getNombre();
        this.getTextoIngreseAOpciones().textContent = `INGRESE A CUALQUIERA DE LAS SIGUIENTES OPCIONES: `;
        super.getCuadroDelMenu().appendChild(super.getTituloDelMenu());
        super.getCuadroDelMenu().appendChild( this.getTextoIngreseAOpciones());        
        menuCategorias.mostrarMenuDeLasCategorias();      
    }
    
}

