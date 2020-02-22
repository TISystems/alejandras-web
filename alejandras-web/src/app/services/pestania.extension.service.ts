import {Injectable} from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class PestaniaExtensionService {

  Pestania: InterfacePestania[] = [
    {
      nombre: "Extension de Pestañas",
      descripcion: "Aporta a la longitud, curvatura, cantidad y grosor de pestañas naturales.",
      img: "assets/img/servicios/pestanias/Pestanias-extension/IMG_8925.JPG",
    },
    {
      nombre: "Extension de Pestañas",
      descripcion: "Aporta a la longitud, curvatura, cantidad y grosor de pestañas naturales.",
      img: "assets/img/servicios/pestanias/Pestanias-extension/IMG_8926.JPG",
    },
    {
      nombre: "Extension de Pestañas",
      descripcion: "Aporta a la longitud, curvatura, cantidad y grosor de pestañas naturales.",
      img: "assets/img/servicios/pestanias/Pestanias-extension/YCTR6079.JPG"
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
