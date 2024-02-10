/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import Menu from '../Menus/Menu.js';

export default class MenuDePresentacionDelProducto extends Menu{
        constructor(){
            super();            
            this.cantidadDelMismoProducto = 0;
            this.cuadroCantidadDelMismoProducto = document.createElement('div');
            this.cuadroDeInformacionDelProducto = document.createElement('div');
            this.subtitulo = document.createElement('h3');
            this.marcaDelProducto = document.createElement('h3');
            this.nombreDelProducto = document.createElement('h2');
            this.simboloDelDinero = document.createElement('h3');
            this.precioDelProducto = document.createElement('h3');
            this.spanCantidadDelMismoProducto = document.createElement('span');
            this.ventaPorUnidad = document.createElement('h3');
            this.botonAgregar = document.createElement('INPUT'); 
            this.getSpanCantidadDelMismoProducto().id = 'spanCantidadDelMismoProducto';
            this.getSpanCantidadDelMismoProducto().textContent = this.getCantidadDelMismoProducto();
            this.getCuadroCantidadDelMismoProducto().id = 'cuadroCantidadDelMismoProducto';
            this.getSubtitulo().setAttribute('id','MensajeEN_OFERTA');
            this.getMarcaDelProducto().id = 'MarcaDelProducto';
            this.getNombreDelProducto().setAttribute('id','NombreParaPresentacion');
            this.getSimboloDelDinero().setAttribute('id','SimboloDeDinero');
            this.getPrecioDelProducto().setAttribute('id','PrecioDelProducto');
            this.getVentaPorUnidad().id = 'VentaPorUnidad';
            this.MisElementos = [
              this.getCuadroCantidadDelMismoProducto(),  
              this.getSubtitulo(), 
              this.getMarcaDelProducto(),
              this.getNombreDelProducto(),
              this.getSimboloDelDinero(),
              this.getPrecioDelProducto(),
              this.getVentaPorUnidad(),
              this.getBotonAgregar()
          ];
          this.cargarMisElementosAlCuadroDeInformacionDelProducto();   
          this.añadirEventoClickAlBotonAgregar();
        }
        getCantidadDelMismoProducto(){
            return this.cantidadDelMismoProducto;
        }
        getCuadroDeInformacionDelProducto(){
            return this.cuadroDeInformacionDelProducto;
        }
        getCuadroCantidadDelMismoProducto(){
            return this.cuadroCantidadDelMismoProducto;
        }
        getSubtitulo(){
            return this.subtitulo;
        }
        getMarcaDelProducto(){
            return this.marcaDelProducto;
        }
        getNombreDelProducto(){
            return this.nombreDelProducto;
        }
        getSimboloDelDinero(){
            return this.simboloDelDinero;
        }
        getSpanCantidadDelMismoProducto(){
            return this.spanCantidadDelMismoProducto;
        }
        getPrecioDelProducto(){
            return this.precioDelProducto;
        }
        getVentaPorUnidad(){
            return this.ventaPorUnidad;
        }
        getBotonAgregar(){
            return this.botonAgregar;
        }
        getMisElementos(){
            return this.MisElementos;
        }
        setCantidadDelMismoProducto(cantidadDelMismoProducto){
            this.cantidadDelMismoProducto = cantidadDelMismoProducto;
        }
        setCuadroCantidadDelMismoProducto(cuadroCantidadDelMismoProducto){
            this.cuadroCantidadDelMismoProducto = cuadroCantidadDelMismoProducto;
        }
        setCantidadDelMismoProducto(cantidadDelMismoProducto){
            this.cantidadDelMismoProducto = cantidadDelMismoProducto;
        }
        setAtributosAlBoton(elementoHTML, atributos_y_valores ){
            for (let atributo in atributos_y_valores){
                elementoHTML.setAttribute(atributo, atributos_y_valores[atributo]);
            }
        }     
        /*FIN FUNCIONES GET y SET */
        añadirEventoClickAlBotonAgregar(){
            this.getBotonAgregar().addEventListener('click',()=>{
                this.setCantidadDelMismoProducto(this.sumarCantidadDelMismoProducto());
                this.getSpanCantidadDelMismoProducto().textContent = this.getCantidadDelMismoProducto();
            });
        }
        cargarMisElementosAlCuadroDeInformacionDelProducto(){
            for(let i = 0; i < this.getMisElementos().length; i++){
                this.getCuadroDeInformacionDelProducto().appendChild(this.getMisElementos()[i]);      
            }            
            this.getCuadroCantidadDelMismoProducto().appendChild(this.getSpanCantidadDelMismoProducto());
          }
          sumarCantidadDelMismoProducto(){
              this.cantidadDelMismoProducto++;
              return this.getCantidadDelMismoProducto();
          }
//        mostrarMenuDePresentacionDelProducto(){            
//        }
        
}
