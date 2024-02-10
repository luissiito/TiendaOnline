
import {menuCategorias, menuSubCategorias} from '../../main.js';
import Categoria from '../../Categorias/Categoria.js';
import General from '../../General.js';
import Menu from '../../Menus/Menu.js';
import Producto from '../../Producto.js';

export default class SubCategoria extends General{
    
    constructor(){
        super();
        this.NombresDeLasSubCategoriasDeLaCategoriaBebidas = [];
        this.NombresDeLasSubCategoriasDeLaCategoriaCervezas = [];
        this.NombresDeLasSubCategoriasDeLaCategoriaJugos = [];
        this.NombresDeLasSubCategoriasDeLaCategoriaLacteos = [];
        this.ProductosDeLaSubCategoriaBebidas = [];   
        this.ProductosDeLaSubCategoriaCervezas = []; 
        this.ProductosDeLaSubCategoriaJugos = []; 
        this.ProductosDeLaSubCategoriaLacteos = [];
        this.tipoDeEnvase;
        this.tamaño;        
        
        let nombreSubCategoria = "BEBIDAS NORMALES";
        
        this.NombresDeLasSubCategoriasDeLaCategoriaBebidas = [
            nombreSubCategoria + " " + "BOTELLA 3 LT",
            nombreSubCategoria + " " + "BOTELLA 2 LT",
            nombreSubCategoria + " " + "BOTELLA 1.5 LT",
            nombreSubCategoria + " " + "BOTELLA 1 LT",
            nombreSubCategoria + " " + "LATA 350 CC"
        ];
        nombreSubCategoria = "CERVEZAS TRADICIONALES";
        this.NombresDeLasSubCategoriasDeLaCategoriaCervezas = [
            nombreSubCategoria + " " + "LATA 500 CC",
            nombreSubCategoria + " " + "BOTELLA 1 LT",
            nombreSubCategoria + " " + "BOTELLA 750 CC",
            "CERVEZAS PREMIUM" + " " + "LATA 500 CC",
            "CERVEZAS PREMIUM" + " " + "BOTELLA 750 CC"
        ];        
        nombreSubCategoria = "JUGOS";
        this.NombresDeLasSubCategoriasDeLaCategoriaJugos = [
            nombreSubCategoria + " " + "BOTELLA 1.5 LT",
            nombreSubCategoria + " " + "CAJA 1 LT",
            nombreSubCategoria + " " + "CAJA 200 CC",
            nombreSubCategoria + " " + "FRESCOS BOTELLA 1 LT",
            nombreSubCategoria + " " + "FRESCOS CAJA 1 LT"
        ]; 
        this.NombresDeLasSubCategoriasDeLaCategoriaLacteos = [
            "LECHES LÍQUIDAS ENTERAS" + " " + "CAJA 1 LT",
            "LECHES LÍQUIDAS DESCREMADAS" + " " + "CAJA 1 LT",
            "YOGURES BATIDOS SABORES" + " " + "POTE 125 GR",
            "YOGURES BATIDOS NATURALES" + " " + "POTE 125 GR",
            "YOGURES BATIDOS SIN AZÚCAR SABORES" + " " + "POTE 125 GR"
        ];
        this.NombresDeLasSubCategorias = [
            this.getNombresDeLasSubCategoriasDeLaCategoriaBebidas(),
            this.getNombresDeLasSubCategoriasDeLaCategoriaCervezas(),
            this.getNombresDeLasSubCategoriasDeLaCategoriaJugos(),
            this.getNombresDeLasSubCategoriasDeLaCategoriaLacteos()
        ];        
    }
    
    //INICIO FUNCIONES GET AND SET
  
    getNombresDeLasSubCategorias(){
        return this.NombresDeLasSubCategorias;
    }
    getNombresDeLasSubCategoriasDeLaCategoriaBebidas(){
        return this.NombresDeLasSubCategoriasDeLaCategoriaBebidas;
    } 
    getNombresDeLasSubCategoriasDeLaCategoriaCervezas(){
        return this.NombresDeLasSubCategoriasDeLaCategoriaCervezas;
    }
    getNombresDeLasSubCategoriasDeLaCategoriaJugos(){
        return this.NombresDeLasSubCategoriasDeLaCategoriaJugos;
    }
    getNombresDeLasSubCategoriasDeLaCategoriaLacteos(){
        return this.NombresDeLasSubCategoriasDeLaCategoriaLacteos;
    }
    getProductosDeLaSubCategoriaBebidas(){
        return this.ProductosDeLaSubCategoriaBebidas;
    }
    getProductosDeLaSubCategoriaCervezas(){
        return this.ProductosDeLaSubCategoriaCervezas;
    }
    getProductosDeLaSubCategoriaJugos(){
        return this.ProductosDeLaSubCategoriaJugos;
    }
    getProductosDeLaSubCategoriaLacteos(){
        return this.ProductosDeLaSubCategoriaLacteos;
    }
    setProductosDeLaSubCategoriaBebidas(productosDeLaSubCategoriaBebidas){
        this.ProductosDeLaSubCategoriaBebidas = productosDeLaSubCategoriaBebidas;
    }
    
    getTipoDeEnvase(){
        return this.tipoDeEnvase;
    }
    setTipoDeEnvase(tipoDeEnvaseDelProducto){
        this.tipoDeEnvase = tipoDeEnvaseDelProducto;
    }
    getTamaño(){
        return this.tamaño;
    }
    setTamaño(tamañoDelProducto){
        this.tamaño = tamañoDelProducto;
    }
       //FUNCIONES GET AND SET CON SOBREESCRITURA PERSONAL
       
    getProductosDeLaSubCategoriaBebidas(numeroDeOpcion){
        //let c = 0; // MI CONTADOR PARA ACCEDER A LOS ÍNDICES DEL ARREGLO AUTOMÁTICAMENTE. NO MANUALMENTE ASÍ : arreglo[0] = "algo" ó arreglo[1] = "algo"
        this.setNombre("BEBIDA NORMAL");
        switch(numeroDeOpcion){            
            case 1 :
                //super.setNombre(this.getNombresDeLasSubCategoriasDeLaCategoriaBebidas()[numeroDeOpcion - 1]);//BEBIDAS NORMALES BOTELLA 3 LT
                this.setTipoDeEnvase("BOTELLA")
                this.setTamaño("3 LT")
                this.ProductosDeLaSubCategoriaBebidas = [
                    new Producto(1,this.getNombre(), "BILZ", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 2300),
                    new Producto(2,this.getNombre(), "CANADA DRY", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 2200),
                    new Producto(3,this.getNombre(), "COCA-COLA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 2250),
                    new Producto(4,this.getNombre(), "FANTA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 2150),
                    new Producto(48,this.getNombre(), "KEM PIÑA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 2000),
                    new Producto(49,this.getNombre(), "KEM EXTREME", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 2450),
                    new Producto(5,this.getNombre(), "LIMON SODA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 2100),
                    new Producto(6,this.getNombre(), "ORANGE CRUSH", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 2200),
                    new Producto(7,this.getNombre(), "PAP", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 2050),
                    new Producto(8,this.getNombre(), "PEPSI", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 2000),
                    new Producto(9,this.getNombre(), "SEVEN UP", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 2100),
                    new Producto(10,this.getNombre(), "SPRITE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 2200)
                ];                 
                break;
            case 2 : 
                //super.setNombre(this.getNombresDeLasSubCategoriasDeLaCategoriaBebidas()[numeroDeOpcion - 1]); //BEBIDAS NORMALES BOTELLA 2 LT
                this.setTipoDeEnvase("BOTELLA")
                this.setTamaño("2 LT")
                this.ProductosDeLaSubCategoriaBebidas = [
                    new Producto(11,this.getNombre(), "BILZ", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1900),
                    new Producto(12,this.getNombre(), "CANADA DRY", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1850),
                    new Producto(13,this.getNombre(), "COCA-COLA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1870),
                    new Producto(14,this.getNombre(), "FANTA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1750),
                    new Producto(48,this.getNombre(), "KEM PIÑA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1700),
                    new Producto(49,this.getNombre(), "KEM EXTREME", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1850),
                    new Producto(15,this.getNombre(), "LIMON SODA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1800),
                    new Producto(16,this.getNombre(), "ORANGE CRUSH", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1880),
                    new Producto(17,this.getNombre(), "PAP", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1850),
                    new Producto(18,this.getNombre(), "PEPSI", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1790),
                    new Producto(19,this.getNombre(), "SEVEN UP", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1800),
                    new Producto(20,this.getNombre(), "SPRITE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1750)
                ]; 
               break;
            case 3 :
                //super.setNombre(this.getNombresDeLasSubCategoriasDeLaCategoriaBebidas()[numeroDeOpcion - 1]); //BEBIDAS NORMALES BOTELLA 1.5 LT
                this.setTipoDeEnvase("BOTELLA")
                this.setTamaño("1.5 LT")
                this.ProductosDeLaSubCategoriaBebidas = [
                    new Producto(21,this.getNombre(), "BILZ", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1500),
                    new Producto(22,this.getNombre(), "CANADA DRY", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1450),
                    new Producto(23,this.getNombre(), "COCA-COLA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1550),
                    new Producto(24,this.getNombre(), "FANTA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1600),
                    new Producto(48,this.getNombre(), "KEM PIÑA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1550),
                    new Producto(49,this.getNombre(), "KEM EXTREME", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1650),
                    new Producto(25,this.getNombre(), "LIMON SODA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1450),
                    new Producto(26,this.getNombre(), "ORANGE CRUSH", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1490),
                    new Producto(27,this.getNombre(), "PAP", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1550),
                    new Producto(28,this.getNombre(), "PEPSI", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1590),
                    new Producto(29,this.getNombre(), "SEVEN UP", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1400),
                    new Producto(30,this.getNombre(), "SPRITE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1550)
                ];
                break;
            case 4 :
                //super.setNombre(this.getNombresDeLasSubCategoriasDeLaCategoriaBebidas()[numeroDeOpcion - 1]); //BEBIDAS NORMALES BOTELLA 1 LT
                this.setTipoDeEnvase("BOTELLA")
                this.setTamaño("1 LT")
                this.ProductosDeLaSubCategoriaBebidas = [
                    new Producto(31,this.getNombre(), "BILZ", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1200),
                    new Producto(32,this.getNombre(), "CANADA DRY", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1150),
                    new Producto(33,this.getNombre(), "COCA-COLA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1100),
                    new Producto(34,this.getNombre(), "FANTA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1000),
                    new Producto(48,this.getNombre(), "KEM PIÑA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 900),
                    new Producto(49,this.getNombre(), "KEM EXTREME", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1200),
                    new Producto(35,this.getNombre(), "LIMON SODA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1100),
                    new Producto(36,this.getNombre(), "ORANGE CRUSH", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1180),
                    new Producto(37,this.getNombre(), "PAP", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1050),
                    new Producto(38,this.getNombre(), "PEPSI", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1200),
                    new Producto(39,this.getNombre(), "SEVEN UP", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1150),
                    new Producto(40,this.getNombre(), "SPRITE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1150)
                ]; 
                break;
            case 5 :
                //super.setNombre(this.getNombresDeLasSubCategoriasDeLaCategoriaBebidas()[numeroDeOpcion - 1]); //BEBIDAS NORMALES LATA 350 CC
                this.setTipoDeEnvase("LATA")
                this.setTamaño("350 CC")
                this.ProductosDeLaSubCategoriaBebidas = [
                    new Producto(41,this.getNombre(), "BILZ", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 700),
                    new Producto(42,this.getNombre(), "CANADA DRY", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 650),
                    new Producto(43,this.getNombre(), "COCA-COLA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 600),
                    new Producto(44,this.getNombre(), "FANTA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 650),
                    new Producto(45,this.getNombre(), "FANTA BERRY", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 650),
                    new Producto(46,this.getNombre(), "GINGER ALE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 550),
                    new Producto(47,this.getNombre(), "INCA COLA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 650),
                    new Producto(48,this.getNombre(), "KEM PIÑA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 600),
                    new Producto(49,this.getNombre(), "KEM EXTREME", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 850),
                    new Producto(50,this.getNombre(), "LIMON SODA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 550),
                    new Producto(51,this.getNombre(), "NORDIC", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 550),
                    new Producto(51,this.getNombre(), "ORANGE CRUSH", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 600),
                    new Producto(52,this.getNombre(), "ORANGE CRUSH GRAPE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 600),
                    new Producto(53,this.getNombre(), "ORANGE CRUSH STRAWBERRY", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 600),
                    new Producto(54,this.getNombre(), "PAP", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 550),
                    new Producto(55,this.getNombre(), "PEPSI", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 650),
                    new Producto(56,this.getNombre(), "QU4TRO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 650),
                    new Producto(57,this.getNombre(), "SEVEN UP (7UP)", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 520),
                    new Producto(58,this.getNombre(), "SEVEN UP (7UP) CHERRY", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 520),
                    new Producto(59,this.getNombre(), "SPRITE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 650),
                    new Producto(60,this.getNombre(), "TAÍ", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 450),
                    new Producto(61,this.getNombre(), "SPRITE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 650)
                ];                 
        }
        return this.ProductosDeLaSubCategoriaBebidas;
    }
       //FIN FUNCIONES GET AND SET CON SOBREESCRITURA PERSONAL
    //FIN FUNCIONES GET AND SET   
    getProductosDeLaSubCategoriaCervezas(numeroDeOpcion){
        //let c = 0; // MI CONTADOR PARA ACCEDER A LOS ÍNDICES DEL ARREGLO AUTOMÁTICAMENTE. NO MANUALMENTE ASÍ : arreglo[0] = "algo" ó arreglo[1] = "algo"
        switch(numeroDeOpcion){
            case 1 :
                //super.setNombre(this.getNombresDeLasSubCategoriasDeLaCategoriaCervezas()[0]);//CERVEZAS TRADICIONALES LATA 500CC
                this.setNombre("CERVEZA TRADICIONAL");
                this.setTipoDeEnvase("LATA")
                this.setTamaño("500 CC")
                this.ProductosDeLaSubCategoriaCervezas = [
                    new Producto(101,this.getNombre(), "BECKER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 700),
                    new Producto(102,this.getNombre(), "CRISTAL", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 680),
                    new Producto(103,this.getNombre(), "DORADA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 720),
                    new Producto(104,this.getNombre(), "ESCUDO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 680),
                    new Producto(105,this.getNombre(), "ESCUDO SILVER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 640),
                    new Producto(106,this.getNombre(), "BEAR BEER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 700),
                    new Producto(107,this.getNombre(), "PATAGONIA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 650),
                    new Producto(108,this.getNombre(), "ROYAL GUARD", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 650)
                ];                 
                break;  
            case 2 :
                //super.setNombre(this.getNombresDeLasSubCategoriasDeLaCategoriaCervezas()[1]);//CERVEZAS TRADICIONALES LATA 500CC
                this.setNombre("CERVEZA TRADICIONAL");
                this.setTipoDeEnvase("BOTELLA")
                this.setTamaño("1 LT")
                this.ProductosDeLaSubCategoriaCervezas = [
                    new Producto(109,this.getNombre(), "BECKER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1300),
                    new Producto(110,this.getNombre(), "CRISTAL", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1200),
                    new Producto(111,this.getNombre(), "DORADA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1050),
                    new Producto(112,this.getNombre(), "ESCUDO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1100),
                    new Producto(113,this.getNombre(), "ESCUDO SILVER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1000),
                    new Producto(114,this.getNombre(), "BEAR BEER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1100),
                    new Producto(115,this.getNombre(), "PATAGONIA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1050),
                    new Producto(116,this.getNombre(), "ROYAL GUARD", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1200)
                ];                 
                break;              
            case 3 :
                //super.setNombre(this.getNombresDeLasSubCategoriasDeLaCategoriaCervezas()[2]);//CERVEZAS TRADICIONALES LATA 500CC
                this.setNombre("CERVEZA TRADICIONAL");
                this.setTipoDeEnvase("BOTELLA")
                this.setTamaño("750 CC")
                this.ProductosDeLaSubCategoriaCervezas = [
                    new Producto(117,this.getNombre(), "BECKER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 900),
                    new Producto(118,this.getNombre(), "CRISTAL", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 850),
                    new Producto(119,this.getNombre(), "DORADA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 780),
                    new Producto(120,this.getNombre(), "ESCUDO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 810),
                    new Producto(121,this.getNombre(), "ESCUDO SILVER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 880),
                    new Producto(122,this.getNombre(), "BEAR BEER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 790),
                    new Producto(123,this.getNombre(), "PATAGONIA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 800),
                    new Producto(124,this.getNombre(), "ROYAL GUARD", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 850)
                ];                 
                break;              
            case 4 :
                //super.setNombre(this.getNombresDeLasSubCategoriasDeLaCategoriaCervezas()[3]);//CERVEZAS TRADICIONALES LATA 500CC
                this.setNombre("CERVEZA PREMIUM");
                this.setTipoDeEnvase("LATA")
                this.setTamaño("500 CC")
                this.ProductosDeLaSubCategoriaCervezas = [
                    new Producto(125,this.getNombre(), "AUSTRAL", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 550),
                    new Producto(126,this.getNombre(), "BUDWEISER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 680),
                    new Producto(127,this.getNombre(), "CUSQUEÑA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 590),
                    new Producto(128,this.getNombre(), "HEINEKEN", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 700),
                    new Producto(129,this.getNombre(), "KROSS", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 750),
                    new Producto(130,this.getNombre(), "KUNSTMANN", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 730),
                    new Producto(131,this.getNombre(), "SOL", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 780),
                    new Producto(132,this.getNombre(), "STELLA ARTOIS", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 720)
                ];                 
                break;              
            case 5 :
                //super.setNombre(this.getNombresDeLasSubCategoriasDeLaCategoriaCervezas()[4]);//CERVEZAS TRADICIONALES LATA 500CC
                this.setNombre("CERVEZA PREMIUM");
                this.setTipoDeEnvase("BOTELLA")
                this.setTamaño("750 CC")
                this.ProductosDeLaSubCategoriaCervezas = [
                    new Producto(133,this.getNombre(), "AUSTRAL", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 790),
                    new Producto(134,this.getNombre(), "BUDWEISER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 770),
                    new Producto(135,this.getNombre(), "CUSQUEÑA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 790),
                    new Producto(136,this.getNombre(), "HEINEKEN", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 780),
                    new Producto(137,this.getNombre(), "KROSS", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 750),
                    new Producto(138,this.getNombre(), "KUNSTMANN", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 760),
                    new Producto(139,this.getNombre(), "SOL", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 750),
                    new Producto(140,this.getNombre(), "STELLA ARTOIS", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 740)
                ];                 
                break;              
        }
        return this.ProductosDeLaSubCategoriaCervezas;
    }
    getProductosDeLaSubCategoriaJugos(numeroDeOpcion){
        //let c = 0; // MI CONTADOR PARA ACCEDER A LOS ÍNDICES DEL ARREGLO AUTOMÁTICAMENTE. NO MANUALMENTE ASÍ : arreglo[0] = "algo" ó arreglo[1] = "algo"        
        switch(numeroDeOpcion){            
            case 1 :
                //super.setNombre(this.getNombresDeLasSubCategoriasDeLaCategoriaBebidas()[numeroDeOpcion - 1]);//BEBIDAS NORMALES BOTELLA 3 LT
                this.setNombre("JUGO DE FRUTA");
                this.setTipoDeEnvase("BOTELLA")
                this.setTamaño("1.5 LT")
                this.ProductosDeLaSubCategoriaJugos = [
                    new Producto(201,this.getNombre(), "ANDINA DEL VALLE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1230),
                    new Producto(202,this.getNombre(), "CEPITA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1150),
                    new Producto(203,this.getNombre(), "GUALLARAUCO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1200),
                    new Producto(204,this.getNombre(), "JUSTY", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1190),
                    new Producto(205,this.getNombre(), "LIDER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1050),
                    new Producto(206,this.getNombre(), "LIVEAN", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1100),
                    new Producto(207,this.getNombre(), "QUILLAYES", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1150),                    
                    new Producto(208,this.getNombre(), "WATT'S", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1220),
                    new Producto(209,this.getNombre(), "YUKERY", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1180),
                    new Producto(210,this.getNombre(), "YUZ", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1200)
                ];                 
                break;
            case 2 : 
                this.setNombre("JUGO DE FRUTA");
                this.setTipoDeEnvase("CAJA")
                this.setTamaño("1 LT")
                this.ProductosDeLaSubCategoriaJugos = [
                    new Producto(210,this.getNombre(), "AFE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 700),
                    new Producto(211,this.getNombre(), "ANDINA DEL VALLE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 730),
                    new Producto(212,this.getNombre(), "COLUN", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 610),
                    new Producto(213,this.getNombre(), "DEL MONTE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 650),
                    new Producto(214,this.getNombre(), "GUALLARAUCO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 700),
                    new Producto(215,this.getNombre(), "HIT", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 640),
                    new Producto(216,this.getNombre(), "JUMEX", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 690),
                    new Producto(217,this.getNombre(), "SOPROLE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 590),
                    new Producto(218,this.getNombre(), "VIVO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 600),
                    new Producto(219,this.getNombre(), "WATT'S", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 620)
                ]; 
               break;
            case 3 :
                this.setNombre("JUGO DE FRUTA");
                this.setTipoDeEnvase("CAJA")
                this.setTamaño("200 CC")
                this.ProductosDeLaSubCategoriaJugos = [
                    new Producto(221,this.getNombre(), "ADES", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 330),
                    new Producto(222,this.getNombre(), "A.M.A", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 300),
                    new Producto(223,this.getNombre(), "ANDINA DEL VALLE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 250),
                    new Producto(224,this.getNombre(), "COLUN", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 280),
                    new Producto(225,this.getNombre(), "LIVEAN", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 290),
                    new Producto(226,this.getNombre(), "SOPROLE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 300),
                    new Producto(227,this.getNombre(), "VIVO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 250),
                    new Producto(228,this.getNombre(), "WATT'S", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 270),
                    new Producto(229,this.getNombre(), "YUZ", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 280),
                    new Producto(230,this.getNombre(), "ZUKO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 260)
                ];
                break;
            case 4 :
                this.setNombre("JUGO FRESCO");
                this.setTipoDeEnvase("BOTELLA")
                this.setTamaño("1 LT")
                this.ProductosDeLaSubCategoriaJugos = [
                    new Producto(231,this.getNombre(), "BIO FRUT", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1600),
                    new Producto(232,this.getNombre(), "CITRIC", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1590),
                    new Producto(236,this.getNombre(), "FLORIDA'S NATURAL", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1490),
                    new Producto(234,this.getNombre(), "FRUGO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1520),
                    new Producto(235,this.getNombre(), "FUNDO SOFRUCO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1480),
                    new Producto(236,this.getNombre(), "GUALLARAUCO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1620),
                    new Producto(237,this.getNombre(), "JUMEX", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1580),
                    new Producto(238,this.getNombre(), "PULP", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1500),
                    new Producto(239,this.getNombre(), "TROPICANA", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1600),
                    new Producto(240,this.getNombre(), "WATT'S", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1580)
                ]; 
                break;
            case 5 :
                this.setNombre("JUGO FRESCO");
                this.setTipoDeEnvase("CAJA")
                this.setTamaño("1 LT")
                this.ProductosDeLaSubCategoriaJugos = [
                    new Producto(241,this.getNombre(), "AFE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 1200),
                    new Producto(242,this.getNombre(), "A.M.A", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1400),
                    new Producto(243,this.getNombre(), "BLESS", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1250),
                    new Producto(244,this.getNombre(), "DAILY", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1300),
                    new Producto(245,this.getNombre(), "GUALLARAUCO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1250),
                    new Producto(246,this.getNombre(), "JUMEX", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1290),
                    new Producto(247,this.getNombre(), "LAS BRISAS", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1150),
                    new Producto(248,this.getNombre(), "MALBEC JUICE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1150),
                    new Producto(249,this.getNombre(), "TAMM", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1200),
                    new Producto(250,this.getNombre(), "WATT'S", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 1100)
                ];                 
        }
        return this.ProductosDeLaSubCategoriaJugos;
    }
    getProductosDeLaSubCategoriaLacteos(numeroDeOpcion){
        //let c = 0; // MI CONTADOR PARA ACCEDER A LOS ÍNDICES DEL ARREGLO AUTOMÁTICAMENTE. NO MANUALMENTE ASÍ : arreglo[0] = "algo" ó arreglo[1] = "algo"        
        switch(numeroDeOpcion){            
            case 1 :
                //super.setNombre(this.getNombresDeLasSubCategoriasDeLaCategoriaBebidas()[numeroDeOpcion - 1]);//BEBIDAS NORMALES BOTELLA 3 LT
                this.setNombre("LECHE LÍQUIDA ENTERA");
                this.setTipoDeEnvase("CAJA")
                this.setTamaño("1 LT")
                this.ProductosDeLaSubCategoriaLacteos = [
                    new Producto(301,this.getNombre(), "COLUN", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 770),
                    new Producto(302,this.getNombre(), "CUISINE & CO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 730),
                    new Producto(303,this.getNombre(), "JUMBO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 710),
                    new Producto(304,this.getNombre(), "LIDER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 710),
                    new Producto(305,this.getNombre(), "LONCO LECHE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 740),
                    new Producto(306,this.getNombre(), "PARMALAT", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 760),
                    new Producto(307,this.getNombre(), "SAN IGNACIO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 830),
                    new Producto(308,this.getNombre(), "SOPROLE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 750),
                    new Producto(309,this.getNombre(), "SURLAT", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 730),
                    new Producto(310,this.getNombre(), "TOTTUS", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 710)
                ];                 
                break;
            case 2 : 
                this.setNombre("LECHE LÍQUIDA DESCREMADA");
                this.setTipoDeEnvase("CAJA")
                this.setTamaño("1 LT")
                this.ProductosDeLaSubCategoriaLacteos = [
                    new Producto(311,this.getNombre(), "COLUN", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 670),
                    new Producto(312,this.getNombre(), "CUISINE & CO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 630),
                    new Producto(313,this.getNombre(), "JUMBO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 610),
                    new Producto(314,this.getNombre(), "LIDER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 610),
                    new Producto(315,this.getNombre(), "LONCO LECHE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 640),
                    new Producto(316,this.getNombre(), "PARMALAT", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 660),
                    new Producto(317,this.getNombre(), "SAN IGNACIO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 730),
                    new Producto(318,this.getNombre(), "SOPROLE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 650),
                    new Producto(319,this.getNombre(), "SURLAT", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 630),
                    new Producto(320,this.getNombre(), "TOTTUS", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 610)
                ]; 
               break;
            case 3 :
                this.setNombre("YOGUR BATIDO SABOR");
                this.setTipoDeEnvase("POTE")
                this.setTamaño("125 GR")
                this.ProductosDeLaSubCategoriaLacteos = [
                    new Producto(321,this.getNombre(), "COLUN", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 180),
                    new Producto(322,this.getNombre(), "CUISINE & CO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 160),
                    new Producto(323,this.getNombre(), "JUMBO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 150),
                    new Producto(324,this.getNombre(), "LIDER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 140),
                    new Producto(325,this.getNombre(), "LONCO LECHE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 170),
                    new Producto(326,this.getNombre(), "PARMALAT", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 130),
                    new Producto(327,this.getNombre(), "SAN IGNACIO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 190),
                    new Producto(328,this.getNombre(), "SOPROLE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 150),
                    new Producto(329,this.getNombre(), "SURLAT", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 140),
                    new Producto(330,this.getNombre(), "TOTTUS", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 160)
                ];
                break;
            case 4 :
                this.setNombre("YOGUR BATIDO NATURAL");
                this.setTipoDeEnvase("POTE")
                this.setTamaño("125 GR")
                this.ProductosDeLaSubCategoriaLacteos = [
                    new Producto(331,this.getNombre(), "COLUN", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 230),
                    new Producto(332,this.getNombre(), "CUISINE & CO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 190),
                    new Producto(333,this.getNombre(), "JUMBO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 190),
                    new Producto(334,this.getNombre(), "LIDER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 200),
                    new Producto(335,this.getNombre(), "LONCO LECHE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 270),
                    new Producto(336,this.getNombre(), "PARMALAT", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 210),
                    new Producto(337,this.getNombre(), "SAN IGNACIO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 250),
                    new Producto(338,this.getNombre(), "SOPROLE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 220),
                    new Producto(339,this.getNombre(), "SURLAT", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 200),
                    new Producto(340,this.getNombre(), "TOTTUS", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 190)
                ]; 
                break;
            case 5 :
                this.setNombre("YOGUR BATIDO SIN AZÚCAR SABOR");
                this.setTipoDeEnvase("POTE")
                this.setTamaño("125 GR")
                this.ProductosDeLaSubCategoriaLacteos = [
                    new Producto(341,this.getNombre(), "COLUN", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre(), 180),
                    new Producto(342,this.getNombre(), "CUISINE & CO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 160),
                    new Producto(343,this.getNombre(), "JUMBO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 150),
                    new Producto(344,this.getNombre(), "LIDER", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 150),
                    new Producto(345,this.getNombre(), "LONCO LECHE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 170),
                    new Producto(346,this.getNombre(), "PARMALAT", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 160),
                    new Producto(347,this.getNombre(), "SAN IGNACIO", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 220),
                    new Producto(348,this.getNombre(), "SOPROLE", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 170),
                    new Producto(349,this.getNombre(), "SURLAT", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 150),
                    new Producto(350,this.getNombre(), "TOTTUS", this.getTipoDeEnvase() , this.getTamaño() , super.getNombre() , 150)
                ];                 
        }
        return this.ProductosDeLaSubCategoriaLacteos;
    }
//    mostrarNombresDeLasSubCategorias(indice){//LLAMADA DESDE EL MenuCategorias.js en la función --> añadirEventoClickALosElementosDeNombresDeLasCategoriasMC
//        switch (indice){
//            case 0 : case 1 : case 3 : case 4 :                
//                for(let i = 0; i < menuSubCategorias.getNombresDeLasSubCategoriasMSC().length; i++){
//                    if((indice >= 3)){
//                        menuSubCategorias.getNombresDeLasSubCategoriasMSC()[i].innerHTML = `<a href="#">${this.getNombresDeLasSubCategorias()[indice - 1][i]}</a>`;
//                    }else{
//                        menuSubCategorias.getNombresDeLasSubCategoriasMSC()[i].innerHTML = `<a href="#">${this.getNombresDeLasSubCategorias()[indice][i]}</a>`;
//                    }
//                }
//                break;
//        }
//    }
     mostrarNombresDeLasSubCategorias(indice){//LLAMADA DESDE EL MenuCategorias.js en la función --> añadirEventoClickALosElementosDeNombresDeLasCategoriasMC
        switch (indice){
            case 0 : case 1 : case 3 : case 4 :                
                for(let i = 0; i < menuCategorias.getNombresDeLasSubCategoriasMC().length; i++){
                    if((indice >= 3)){
                        menuCategorias.getNombresDeLasSubCategoriasMC()[i].innerHTML = `<a href="#">${this.getNombresDeLasSubCategorias()[indice - 1][i]}</a>`;
                    }else{
                        menuCategorias.getNombresDeLasSubCategoriasMC()[i].innerHTML = `<a href="#">${this.getNombresDeLasSubCategorias()[indice][i]}</a>`;
                    }
                }
                break;
        }
    }
    vaciarArreglosDeProductosDeLaSubCategoria(){
        this.ProductosDeLaSubCategoriaBebidas = [];
        this.ProductosDeLaSubCategoriaCervezas = [];
        this.ProductosDeLaSubCategoriaJugos = [];
        this.ProductosDeLaSubCategoriaLacteos = [];
    }
}

