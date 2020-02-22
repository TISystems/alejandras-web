import {Injectable} from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class PestaniaOndulacionService {

  Pestania: InterfacePestania[] = [
    {
      nombre: "Ondulación",
      descripcion: "Consiste en aplicar una serie de productos (gel permanente, gel neutralizante, tinte) encargados de modificar la forma natural de las pestañas dejándolas onduladas de 6 a 8 semanas aproximadamente",
      img: "assets/img/servicios/pestanias/Pestanias-ondulacion/JQXU3284.JPG",
    },
    {
      nombre: "Ondulación",
      descripcion: "Consiste en aplicar una serie de productos (gel permanente, gel neutralizante, tinte) encargados de modificar la forma natural de las pestañas dejándolas onduladas de 6 a 8 semanas aproximadamente",
      img: "assets/img/servicios/pestanias/Pestanias-ondulacion/JQXU3284.JPG",
    },
    {
      nombre: "Ondulación",
      descripcion: "Consiste en aplicar una serie de productos (gel permanente, gel neutralizante, tinte) encargados de modificar la forma natural de las pestañas dejándolas onduladas de 6 a 8 semanas aproximadamente",
      img: "assets/img/servicios/pestanias/Pestanias-ondulacion/JQXU3284.JPG"
    }


  ];

  constructor() {


  }

  getPestanias(){

    return this.Pestania;
  }
  getPestania(idx: number){

    return this.Pestania[idx];
  }
}
