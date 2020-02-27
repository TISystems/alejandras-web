import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class MasajeCapilarService {

  masajeCapilar: InterfacePestania[] = [
    {
      nombre: "Hidratación",
      descripcion: "Aporta brillo eh hidratación para la fibra capilar.",
      img: "assets/img/servicios/masaje-capilar/hidratacion/hg.jpg",
    },
    {
      nombre: "Nutrición",
      descripcion: "Mejora la elasticidad de la fibra capilar.",
      img: "assets/img/servicios/masaje-capilar/nutricion/jhgk.jpg",
    },
    {
      nombre: "Protección de Color",
      descripcion: "Hidrata y a su vez protege el color.",
      img: "assets/img/servicios/masaje-capilar/protecion-color/color.jpg",
    }
    ,
    {
      nombre: "Ampolla Nutritiva",
      descripcion: "Aplicación de ampolla durante el proceso de lavado.",
      img: "assets/img/servicios/masaje-capilar/ampolla-nutritiva/masajes.jpg",
    }


  ];

  constructor() {


  }

  getMasajeCapilaress(){

    return this.masajeCapilar;
  }
  getMasajeCapilares(idx: number){

    return this.masajeCapilar[idx];
  }
}
