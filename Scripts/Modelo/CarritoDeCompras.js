
export default class CarritoDeCompras{
        constructor(){
            this.productos = [];
            this.cantidadDeProductos = 0;
            this.total;
        }
        
        getProductos(){
            return this.productos;
        }
        getCantidadDeProductos(){
            return this.cantidadDeProductos;
        }
        getTotal(){
            return this.total;
        }
        
        setProductos(nuevosProductos){
            this.productos = nuevosProductos;
        }
        setCantidadDeProductos(nuevaCantidadDeProductos){
            this.cantidadDeProductos = nuevaCantidadDeProductos;
        }
        setTotal(nuevoTotal){
            this.total = nuevoTotal;
        }
        
        agregarProducto(producto){
            if(!this.chequearDuplicidad(producto)){
                this.getProductos().push(producto);
            }
            else{
                console.log('Producto Ya Existe en el Carrito');
            }
            producto.sumarCantidadAComprar();
            this.cantidadDeProductos ++;
            console.log('%c Producto Agregado al Carrito! ', 'background: #222; color: #bada55');            
            this.calcularTotal(this.getProductos());
        }
        
        calcularTotal(productos){
            this.setTotal(0);
            for(let p of productos){
                this.total += p.getPrecio() * p.getCantidadAComprar();
            }  
            document.querySelector('.total').textContent = (this.getTotal() != 0) ? `Total: $ ${this.getTotal()}` : '';                
           
        }
        
        chequearDuplicidad(producto){
            let aviso = false;
            for(let p of this.getProductos()){
                if(producto.getIdentificador() == p.getIdentificador()){
                    return true;                    
                }
            }
            return aviso;
        }
        
        eliminarProducto(producto){      
            this.cantidadDeProductos -= producto.getCantidadAComprar();
            producto.setCantidadAComprar(0);
            let i = 0;
            for(let p of this.getProductos()){
                if(p.getIdentificador() == producto.getIdentificador()){                    
                    p.setCantidadAComprar(0);
                    this.getProductos().splice(i, 1);
                }
                i++;
            }
        }
        
        mostrarProductos(){
            console.log('%c Productos en el Carrito: ' + this.getCantidadDeProductos(), 'background: #555; color: #bada55');
            for(let p of this.getProductos()){
                console.log('%c Producto: ', 'background: #777; color: #bada55');
                console.log(p.getNombre());
                console.log(p.getMarca());
                console.log(p.getTamaño());
                console.log(p.getVariedad());
                console.log(p.getPrecio());
                console.log('%c' + p.getIdentificador(), 'font-weight:bolder;');
                if(p.getCantidadAComprar() > 1){
                    console.log('%c Cantidad A Comprar: ' + p.getCantidadAComprar(), 'font-weight:bolder;');
                }
            }
        }
}


