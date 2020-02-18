import {Injectable} from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class PestaniaService {

  Pestania: InterfacePestania[] = [
    {
      nombre: "Ondulación",
      descripcion: "Consiste en aplicar una serie de productos (gel permanente, gel neutralizante, tinte) encargados de modificar la forma natural de las pestañas dejándolas onduladas de 6 a 8 semanas aproximadamente",
      img: "assets/img/servicios/Pestanias/Pestania1.jpeg",
    },
    {
      nombre: "",
      descripcion: "",
      img: "assets/img/servicios/Pestanias/Pestania2.jpeg",
    },
    {
      nombre: "",
      descripcion: "",
      img: "assets/img/servicios/Pestanias/Pestania3.jpeg"
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
