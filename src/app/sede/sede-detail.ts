import { articuloDeRopa } from "../articuloDeRopa/articuloDeRopa";
import { Pack } from "../pack/pack";
import { Servicio } from "../servicio/servicio";
import { servicioExtra } from "../servicioExtra/servicioExtra";
import { Trabajador } from "../trabajador/trabajador";
import { ubicacion } from "../ubicacion/ubicacion";
import { Sede } from "./sede";

export class SedeDetail extends Sede{

  trabajadores: Array<Trabajador>;
  serviciosExtra: Array<servicioExtra>;
  articulosDeRopa:Array<articuloDeRopa>;
  servicios: Array<Servicio>;
  packsDeServicios: Array<Pack>;
  ubicacion: ubicacion;

  constructor(id: number, nombre: string, imagen: string, trabajadores: Array<Trabajador>, serviciosExtra: Array<servicioExtra>, articulosDeRopa:Array<articuloDeRopa>, servicios: Array<Servicio>,packsDeServicios: Array<Pack>, ubicacion: ubicacion){
    super(id, nombre,imagen);
    this.trabajadores = trabajadores;
    this.serviciosExtra = serviciosExtra;
    this.articulosDeRopa = articulosDeRopa;
    this.servicios = servicios;
    this.packsDeServicios = packsDeServicios;
    this.ubicacion = ubicacion;


  }



}
