import { Producto } from '../producto/producto';
import { Sede } from '../sede/sede';

export class ServicioExtra extends Producto{
    disponible: boolean;
    sede: Sede;

  constructor(id: number, nombre: string, descripcion: string, precio: number, imagen: string, disponible: boolean, sede: Sede) {
    super(id, nombre, descripcion, precio, imagen);
    this.disponible = disponible;
    this.sede = sede;
  }

}
