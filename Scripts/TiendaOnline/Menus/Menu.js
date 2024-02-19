/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import General from '../General.js';

export default class Menu extends General{
    constructor(){
        super();
        this.cuadroDelMenu = document.createElement('div');
        this.tituloDelMenu = document.createElement('h2');
        this.numeroDeOpcionElegido;
    }   
    getCuadroDelMenu(){
        return this.cuadroDelMenu;
    }
    getTituloDelMenu(){
        return this.tituloDelMenu;
    }    
    getNumeroDeOpcionElegido(){
        return this.numeroDeOpcionElegido;
    }
    setNumeroDeOpcionElegido(numeroDeOpcionElegido){
        this.numeroDeOpcionElegido = numeroDeOpcionElegido;
    }
    setAtributosAlElemento(elementoHTML, atributos_y_valores ){
        for (let atributo in atributos_y_valores){
            elementoHTML.setAttribute(atributo, atributos_y_valores[atributo]);
        }
    }
}

