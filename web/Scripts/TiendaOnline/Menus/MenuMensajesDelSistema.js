/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import Menu from './Menu.js';

export default class MenuMensajesDelSistema extends Menu {
        constructor(){
            super();
            super.setNombre('MENÚ DE MENSAJES DEL SISTEMA');
            this.spanMensajeSinStock = document.createElement('span');
            super.getCuadroDelMenu().style.display = 'none';
            super.getCuadroDelMenu().setAttribute('id','menuDeMensajesDelSistema')
            this.getSpanMensajeSinStock().setAttribute('id','spanMensajeSinStock');
            this.getSpanMensajeSinStock().innerHTML = "SIN STOCK DE PRODUCTOS";
        }
        getSpanMensajeSinStock(){
            return this.spanMensajeSinStock;
        }
        mostrarCuadroDelMenu(){
            super.getTituloDelMenu().innerHTML = super.getNombre();
            super.getCuadroDelMenu().appendChild(super.getTituloDelMenu());
            super.getCuadroDelMenu().style.display = 'block';
        }
        ocultarCuadroDelMenu(){
            super.getCuadroDelMenu().style.display = 'none';
        }
        mostrarSpanMensajeSinStock(){
            super.getCuadroDelMenu().appendChild(this.getSpanMensajeSinStock());
        }
        ocultarSpanMensajeSinStock(){
            super.getCuadroDelMenu().removeChild(this.getSpanMensajeSinStock());
        }
}