/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import Menu from './Menu.js';
import{categoria, menuSubCategorias, menuMensajesDelSistema,menuSubCategoria, subCategoria} from '../main.js';

export default class MenuCategorias extends Menu{
    constructor(){
        super();
        super.setNombre('MENÚ DE LAS CATEGORÍAS');
        super.setNumeroDeOpcionElegido(0);
        this.listaDeNombresDeLasCategoriasMC = document.createElement('div');
        this.listaDeNombresDeLasSubCategoriasMC = document.createElement('div');
        this.NombresDeLasCategoriasMC = [
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div')
        ];
        this.NombresDeLasSubCategoriasMC = [
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div')
        ];
        super.getCuadroDelMenu().setAttribute('id','cuadroMenuCategorias');
        super.getTituloDelMenu().textContent = super.getNombre();
        this.getListaDeNombresDeLasCategoriasMC().setAttribute('id','listaDeNombresDeLasCategoriasMC');
        this.getListaDeNombresDeLasSubCategoriasMC().setAttribute('id','listaDeNombresDeLasSubCategoriasMC'); 
        this.getListaDeNombresDeLasSubCategoriasMC().className = 'ocultar'; 
        this.cargarElementosHTML_A_ListaDeNombresDeLasCategorias();
    }
    getListaDeNombresDeLasCategoriasMC(){
        return this.listaDeNombresDeLasCategoriasMC;
    }
     getListaDeNombresDeLasSubCategoriasMC(){
        return this.listaDeNombresDeLasSubCategoriasMC;
    }
    getNombresDeLasCategoriasMC(){
        return this.NombresDeLasCategoriasMC;
    }
    getNombresDeLasSubCategoriasMC(){
        return this.NombresDeLasSubCategoriasMC;
    }
    añadirEventoClickALosElementosDeNombresDeLasCategoriasMC(){
        for(let i = 0; i < this.NombresDeLasCategoriasMC.length; i++){
            this.NombresDeLasCategoriasMC[i].addEventListener('click',()=>{
                switch(i){
                    case 0 : case 1 : case 3 : case 4 :
                        menuMensajesDelSistema.ocultarCuadroDelMenu();
                        super.setNumeroDeOpcionElegido(i);                       
                        subCategoria.mostrarNombresDeLasSubCategorias(i);
                        this.mostrarNombresDeLasSubCategorias(i)
                        break;
                    case 2 :
                        menuSubCategorias.ocultarCuadroDelMenu();
                        menuSubCategoria.ocultarCuadroDelMenu();
                        super.setNumeroDeOpcionElegido(i);                        
                        menuMensajesDelSistema.mostrarCuadroDelMenu();
                        menuMensajesDelSistema.mostrarSpanMensajeSinStock();
                        break;
                }
            });
        }
    }
    añadirEventoClickALosElementosDeNombresDeLasSubCategoriasMC(){
        for (let i = 0; i < this.getNombresDeLasSubCategoriasMC().length; i++){
            this.getNombresDeLasSubCategoriasMC()[i].addEventListener('click',()=>{
                switch(i){
                    case 0 : case 1 : case 2 : case 3 : case 4 :
                        menuSubCategorias.setNumeroDeOpcionElegido(i);
                        menuSubCategoria.mostrarMenuSubCategoria();
//                        menuSubCategoria.getCuadroDelMenu().appendChild(menuDeNavegacion.getCuadroDelMenu());
                        menuSubCategoria.listarProductosDeLaSubCategoria(this.getNumeroDeOpcionElegido(),i);
                                        break;
                }
            });
        }
    }
    cargarElementosHTML_A_ListaDeNombresDeLasCategorias(){
        for(let i = 0; i < categoria.getNombresDeLasCategorias().length;i++){ 
            this.getListaDeNombresDeLasCategoriasMC().appendChild(this.getNombresDeLasCategoriasMC()[i]);
        }
    }
      cargarElementosHTML_A_ListaDeNombresDeLasSubCategorias(){
        for(let i = 0; i < this.getNombresDeLasSubCategoriasMC().length;i++){ 
            this.getListaDeNombresDeLasSubCategoriasMC().appendChild(this.getNombresDeLasSubCategoriasMC()[i]);
        }
    }
    mostrarMenuDeLasCategorias(){  
        super.getTituloDelMenu().textContent = super.getNombre();
        super.getCuadroDelMenu().appendChild(super.getTituloDelMenu());
        this.añadirEventoClickALosElementosDeNombresDeLasCategoriasMC();
        this.añadirEventoClickALosElementosDeNombresDeLasSubCategoriasMC();
        categoria.listarNombresDeLasCategorias(this);  
       
    }
    mostrarNombresDeLasSubCategorias(numeroDeOpcionElegidoenMenuCategorias){
        if(this.getListaDeNombresDeLasSubCategoriasMC().className == 'ocultar'){
            this.getListaDeNombresDeLasSubCategoriasMC().className = 'mostrar';
        }else{
            this.getListaDeNombresDeLasSubCategoriasMC().className = 'ocultar';
        }        
        this.cargarElementosHTML_A_ListaDeNombresDeLasSubCategorias();
        this.getNombresDeLasCategoriasMC()[numeroDeOpcionElegidoenMenuCategorias].appendChild(this.getListaDeNombresDeLasSubCategoriasMC());
//       console.log(menuCategorias.getListaDeNombresDeLasSubCategoriasMC().appendChild(this.getNombresDeLasSubCategoriasMC())); 
    }
}
