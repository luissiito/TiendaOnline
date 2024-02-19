
export default class Global{
        constructor(){
            this.cuadro = document.createElement('div');
        }
        
        getCuadro(){
            return this.cuadro;
        }
        
        setCuadro(nuevoCuadro){
            this.cuadro = nuevoCuadro;
        }
}


