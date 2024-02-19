import Shampoo from '../Modelo/Shampoo.js';

export default class BaseDeDatos{
        constructor(){
            this.shampoos = [];
            this.cargarShampoos();
            this.setInformacionALosShampoos();
        }
        
        getShampoos(){
            return this.shampoos;
        }
        getRutasImagenesShampoos(){
            return this.rutasImagenesShampoos;
        }
        
        setShampoos(nuevosShampoos){
            this.shampoos = nuevosShampoos;
        }
        
        cargarShampoos(){
            this.setShampoos([
                new Shampoo(),new Shampoo(),new Shampoo(),new Shampoo(),new Shampoo(),
                new Shampoo(),new Shampoo(),new Shampoo(),new Shampoo(),new Shampoo()
            ]);
        }
        
        setInformacionALosShampoos(){
            let rutaDirectorio = './assets/Imágenes/Perfumería/Shampoos/';
            let extensionImagen = '.jpeg'
            let i= 0;
            let identificadorAleatorio = 7000222;
            for(let s of this.getShampoos()){
                s.setIdentificador(identificadorAleatorio);
                s.setNombre('Shampoo');
                s.setMarca('Head & Shoulders');
                s.setTamaño('375ml');
                switch(i){
                    case 0: 
                        s.setVariedad('Manzana'); break;
                    case 1: 
                        s.setVariedad('Limpieza y Revitalización'); break;
                    case 2: 
                        s.setVariedad('Limpieza Renovadora'); break;
                    case 3: 
                        s.setVariedad('Suave y Manejable'); break;
                    case 4: 
                        s.setVariedad('Crece Fuerte'); break;
                    case 5: 
                        s.setVariedad('Hidratación'); break;
                    case 6: 
                        s.setVariedad('MEN Old Spice'); break;
                    case 7: 
                        s.setVariedad('Alivio Refrescante'); break;
                    case 8: 
                        s.setVariedad('Humectación'); break;
                    case 9: 
                        s.setVariedad('MEN'); break;
                    default: s.setVariedad('Manzana'); break;
                }
                s.setPrecio(1000);
                s.setRutaImagen(`${rutaDirectorio}${s.getMarca()} ${s.getTamaño()} ${s.getVariedad()}${extensionImagen}`);
                identificadorAleatorio++;
                i++;
            }
        }
        
}


