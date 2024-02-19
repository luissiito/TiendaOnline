
export default class Producto{        
        constructor(){
            this.identificador;
            this.nombre;
            this.marca;
            this.precio;
            this.tamaño;
            this.variedad;
            this.rutaImagen;
            this.cantidadAComprar = 0;
        }
        
        getIdentificador(){
            return this.identificador;
        }
        getNombre(){
            return this.nombre;
        }
        getMarca(){
            return this.marca;
        }
        getTamaño(){
            return this.tamaño;
        }
        getVariedad(){
            return this.variedad;
        }
        getPrecio(){
            return this.precio;
        }
        getRutaImagen(){
            return this.rutaImagen;
        }
        getCantidadAComprar(){
            return this.cantidadAComprar;
        }
        
        setIdentificador(nuevoIdentificador){
            this.identificador = nuevoIdentificador;
        }
        setNombre(nuevoNombre){
            this.nombre = nuevoNombre;
        }
        setMarca(nuevaMarca){
            this.marca = nuevaMarca;
        }
        setTamaño(nuevoTamaño){
            this.tamaño = nuevoTamaño;
        }
        setVariedad(nuevaVariedad){
            this.variedad = nuevaVariedad;
        }
        setPrecio(nuevoPrecio){
            this.precio = nuevoPrecio;
        }
        setRutaImagen(nuevaRutaImagen){
            this.rutaImagen = nuevaRutaImagen;
        }
        setCantidadAComprar(nuevaCantidadAComprar){
            this.cantidadAComprar = nuevaCantidadAComprar;
        }
        
        sumarCantidadAComprar(){
            this.cantidadAComprar++;
        }
}


