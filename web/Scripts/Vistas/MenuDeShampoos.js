
import Global from './Global.js';

export default class MenuDeShampoos extends Global{
        constructor(){
            super();
            this.cargarEstilosCSS();
        }
        
        cargarEstilosCSS(){
            super.getCuadro().classList.add('MenuDeShampoos');
        }
        mostrar(){
            document.querySelector('body').appendChild(super.getCuadro());
        }
}


