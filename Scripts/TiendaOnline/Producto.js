/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import General from './General.js';

export default class Producto extends General{
    constructor(identificador, nombreDelProducto, marcaDelProducto,tipoDeEnvase,tamaño,nombreDeLaSubcategoría,precio){
        super();
        this.identificador = identificador, 
        super.nombre = nombreDelProducto, 
        this.marca = marcaDelProducto, 
        this.tipoDeEnvase = tipoDeEnvase,
        this.tamaño = tamaño, 
        this.nombreDeLaSubcategoría = nombreDeLaSubcategoría, 
        this.precio = precio;
    }
    
    getIdentificador(){
        return this.identificador;
    }
    setIdentificador(identificador){
        this. identificador = identificador;
    }
    mostrarDescripcionDelProducto(){
        let texto_descripcion = "", s = " ";
        texto_descripcion = this.nombre + s + this.marca + s + this.tipoDeEnvase + s + this.tamaño + ".";
        
        return texto_descripcion;
    }
    getMarca(){
        return this.marca;
    }
    setMarca(marca){
        this.marca = marca;
    }
    getTipoDeEnvase(){
        return this.tipoDeEnvase;
    }
    setTipoDeEnvase(tipoDeEnvase){
        this.tipoDeEnvase = tipoDeEnvase;
    }
    getTamaño(){
        return this.tamaño;
    }
    setTamaño(tamaño){
        this.tamaño = tamaño;
    }
    getNombreDeLaSubcategoría(){
        return this.nombreDeLaSubcategoría;
    }
    setnombreDeLaSubcategoría(nombreDeLaSubcategoría){
        this.nombreDeLaSubcategoría = nombreDeLaSubcategoría;
    }
    getPrecio(){
        return this.precio;
    }
    setPrecio(precio){
        this.precio = precio;
    }
    getNombreParaPresentacion(){
        return this.getNombre() + ' ' + this.getTipoDeEnvase() + ' ' + this.getTamaño();
    }
}
