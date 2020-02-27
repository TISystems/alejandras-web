import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class BrushingService {

  brushing: InterfacePestania[] = [
    {
      nombre: "Brushing Simple",
      descripcion: "secado y Cepillado del cabello.",
      img: "assets/img/servicios/brushing/simple/GettyImages-451856881.jpg",
    },
    {
      nombre: "Brushing con Plancha",
      descripcion: "Secado, pulido y planchado del cabello.",
      img: "assets/img/servicios/brushing/plancha/uhniu.jpg",
    },
    {
      nombre: "Brushing con Onda",
      descripcion: "Secado, pulido, ondas con plancha o cepillo.",
      img: "assets/img/servicios/brushing/onda/iuhiuh.jpg",
    }


  ];

  constructor() {


  }

  getBrushins(){

    return this.brushing;
  }
  getBrushing(idx: number){

    return this.brushing[idx];
  }
}
