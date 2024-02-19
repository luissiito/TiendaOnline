/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import Categoria from "./Categorias/Categoria.js";
import MenuBarraLateral from './Menus/MenuBarraLateral.js';
import MenuCategorias from "./Menus/MenuCategorias.js";
import MenuDeNavegacion from "./Menus/MenuDeNavegacion.js";
import MenuMensajesDelSistema from './Menus/MenuMensajesDelSistema.js';
import MenuPrincipal from "./Menus/MenuPrincipal.js";
import MenuSubCategoria from './Menus/MenuSubCategoria.js';
import MenuSubCategorias from "./Menus/MenuSubCategorias.js";
import SubCategoria from './Categorias/SubCategorias/SubCategoria.js';

export const categoria = new Categoria();
export const menuBarraLateral = new MenuBarraLateral();
export const menuBarraLateral2 = new MenuBarraLateral();
export const menuCategorias = new MenuCategorias();
export const menuDeNavegacion = new MenuDeNavegacion();
export const menuMensajesDelSistema = new MenuMensajesDelSistema();
export const menuPrincipal = new MenuPrincipal();
export const menuSubCategoria = new MenuSubCategoria();
export const menuSubCategorias = new MenuSubCategorias();
export const subCategoria = new SubCategoria();



document.querySelector('body').appendChild(menuBarraLateral.getCuadroDelMenu());
document.querySelector('body').appendChild(menuBarraLateral2.getCuadroDelMenu());
menuBarraLateral.getCuadroDelMenu().setAttribute('id','cuadroMenuBarraLateral');
menuBarraLateral2.getCuadroDelMenu().setAttribute('id','cuadroMenuBarraLateral2');
menuBarraLateral.getCuadroDelMenu().appendChild(menuPrincipal.getCuadroDelMenu());
menuBarraLateral.getCuadroDelMenu().appendChild(menuPrincipal.getCuadroDelMenu());
menuBarraLateral.getCuadroDelMenu().appendChild(menuCategorias.getCuadroDelMenu());
menuBarraLateral.getCuadroDelMenu().appendChild(menuSubCategorias.getCuadroDelMenu());
menuBarraLateral2.getCuadroDelMenu().appendChild(menuMensajesDelSistema.getCuadroDelMenu());
menuBarraLateral2.getCuadroDelMenu().appendChild(menuSubCategoria.getCuadroDelMenu());

menuPrincipal.mostrarMenuPrincipal();