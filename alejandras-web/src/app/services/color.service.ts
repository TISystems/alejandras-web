import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  color: InterfacePestania[] = [
    {
      nombre: "Cambio de Color",
      descripcion: "Cambiar el color  y cubrir imperfecciones.",
      img: "assets/img/servicios/color/cambio-de-color/1.jpg",
    },
    {
      nombre: "Visos",
      descripcion: "Aporta matización y luminosidad al cabello.",
      img: "assets/img/servicios/color/Visos/2.jpeg",
    },
    {
      nombre: "Mechas",
      descripcion: "Luminosidad focalizada.",
      img: "assets/img/servicios/color/Mechas/mechas.jpeg",
    },
    {
      nombre: "Mechas Californianas",
      descripcion: "Define color de medios a puntas.",
      img: "assets/img/servicios/color/Mechas-Californianas/californiana.jpeg",
    },
    {
      nombre: "Balayage",
      descripcion: "Luminosidad en degradé.",
      img: "assets/img/servicios/color/Balayage/balayage.png",
    },
    {
      nombre: "Transparencias",
      descripcion: "Color en definición tenue.",
      img: "assets/img/servicios/color/Transparencias/transparencia.jpeg",
    },
    {
      nombre: "BabyLight",
      descripcion: "Tono sobre tono en efecto transparencia.",
      img: "assets/img/servicios/color/babylight/babylight.jpeg",
    },
    {
      nombre: "Reflejos",
      descripcion: "Tono suave con gorra.",
      img: "assets/img/servicios/color/Reflejos/reflejos.jpeg",
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
