
export default class Paginador{
        constructor(){
            this.cuadro = document.createElement('div');
            this.botonAnterior = document.createElement('INPUT');
            this.botonSiguiente = document.createElement('INPUT');
            this.elementos = [];
            this.cargarEstilosCSS();
        }
        
        getCuadro(){
            return this.cuadro;
        }
        getBotonAnterior(){
            return this.botonAnterior;
        }
        getBotonSiguiente(){
            return this.botonSiguiente;
        }
        getElementos(){
            return this.elementos;
        }
        
        setCuadro(nuevoCuadro){
            this.cuadro = nuevoCuadro;
        }
        setBotonAnterior(nuevoBotonAnterior){
            this.botonAnterior = nuevoBotonAnterior;
        }
        setBotonSiguiente(nuevoBotonSiguiente){
            this.botonSiguiente = nuevoBotonSiguiente;
        }
        setElementos(elementos){
            this.elementos = elementos;
        }
        
        cargarEstilosCSS(){
            this.getCuadro().classList.add('Paginador');
        }
        
        mostrarElementos(elementoPadre){
            for(let e of this.getElementos()){
                this.getCuadro().appendChild(e.getCuadro());
            }
            elementoPadre.appendChild(this.getCuadro());
        }
        mostrarElementosPaginados(cantidad){
            
        }
        
        vaciarPaginador(){
            while (this.getCuadro().firstChild) {
                this.getCuadro().removeChild(this.getCuadro().firstChild);
            }
        }
}


