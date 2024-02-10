/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import Menu from './Menu.js';
import {menuCategorias, menuMensajesDelSistema, menuSubCategoria} from '../main.js';

export default class MenuSubCategorias extends Menu {
    constructor(){
        super();
        super.setNombre('MENÚ DE LAS SUBCATEGORÍAS');
        super.getCuadroDelMenu().style.display = 'none';
        super.getCuadroDelMenu().setAttribute('id','cuadroMenuSubCategorias')
        this.listaDeNombresDeLasSubCategoriasMSC = document.createElement('div');
        this.getListaDeNombresDeLasSubCategoriasMSC().setAttribute('id','listaDeNombresDeLasCategoriasMSC')   
        this.NombresDeLasSubCategoriasMSC = [
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div')
        ];
        this.cargarElementosHTML_A_ListaDeNombresDeLasSubCategorias();
    }
    getListaDeNombresDeLasSubCategoriasMSC(){
        return this.listaDeNombresDeLasSubCategoriasMSC;
    }
    getNombresDeLasSubCategoriasMSC(){
        return this.NombresDeLasSubCategoriasMSC;
    }
    añadirEventoClickALosElementosDeNombresDeLasSubCategorias(){
        for (let i = 0; i < this.getNombresDeLasSubCategoriasMSC().length; i++){
            this.getNombresDeLasSubCategoriasMSC()[i].addEventListener('click', ()=>{
                switch(i){
                    case 0 : case 1 : case 2 : case 3 : case 4 :
                        this.setNumeroDeOpcionElegido(i);
                        menuSubCategoria.mostrarMenuSubCategoria();
                        menuSubCategoria.listarProductosDeLaSubCategoria(menuCategorias.getNumeroDeOpcionElegido(), super.getNumeroDeOpcionElegido());
                        break;
                }
            });
        }
    }
    cargarElementosHTML_A_ListaDeNombresDeLasSubCategorias(){
        for(let i = 0; i < this.getNombresDeLasSubCategoriasMSC().length;i++){ 
            this.getListaDeNombresDeLasSubCategoriasMSC().appendChild(this.getNombresDeLasSubCategoriasMSC()[i]);
        }
    }
    mostrarCuadroDelMenu(){ //LLAMADA DESDE MenuCategorias.js en la fn añadirEventoClickALosElementosDeNombresDeLasCategoriasMC
        super.getCuadroDelMenu().style.display = 'block';
        super.getTituloDelMenu().innerHTML = super.getNombre();
        super.getCuadroDelMenu().appendChild(super.getTituloDelMenu());
        super.getCuadroDelMenu().appendChild(this.getListaDeNombresDeLasSubCategoriasMSC());  
        this.añadirEventoClickALosElementosDeNombresDeLasSubCategorias();
    }
    ocultarCuadroDelMenu(){
        super.getCuadroDelMenu().className = 'ocultar';
    }
}
        