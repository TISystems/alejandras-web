import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  color: InterfacePestania[] = [
    {
      nombre: "Cambio de Color",
      descripcion: "preparación química que se utiliza para cambiar el color del cabello y cubrir imperfecciones.",
      img: "assets/img/servicios/color/cambio-de-color/ING_19058_00630.jpg",
    },
    {
      nombre: "Visos",
      descripcion: "Aporta matización y luminosidad al cabello.",
      img: "assets/img/servicios/color/Visos/2.jpg",
    },
    {
      nombre: "Mechas",
      descripcion: "Luminosidad focalizada.",
      img: "assets/img/servicios/color/cambio-de-color/mechas.png",
    },
    {
      nombre: "Mechas Californianas",
      descripcion: "Define color de medios a puntas.",
      img: "assets/img/servicios/color/cambio-de-color/mechas.png",
    },
    {
      nombre: "Balayage",
      descripcion: "Luminosidad en degradé.",
      img: "assets/img/servicios/color/Balayage/balayage.png",
    },
    {
      nombre: "Transparencias",
      descripcion: "Color en definición tenue.",
      img: "assets/img/servicios/color/cambio-de-color/mechas.png",
    },
    {
      nombre: "BabyLight",
      descripcion: "Tono sobre tono en efecto transparencia.",
      img: "",
    },
    {
      nombre: "Reflejos",
      descripcion: "Tono suave con gorra.",
      img: "assets/img/servicios/color/cambio-de-color/mechas.png",
    }


  ];

  constructor() {


  }

  getColors(){

    return this.color;
  }
  getColor(idx: number){

    return this.color[idx];
  }
}
