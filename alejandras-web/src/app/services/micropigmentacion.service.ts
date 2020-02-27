import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class MicropigmentacionService {

  Pestania: InterfacePestania[] = [
    {
      nombre: "Micro blading(cejas)/(PMU)Micropigmentación con dermografo",
      descripcion: "Está recomendado para embellecer, perfilar, corregir asimetrías o imperfecciones de tus cejas; añadiendo expresividad a tu mirada. Efecto natural acorde con tu rostro y color de cabello, armonizando siempre con tus rasgos naturales.",
      img: "assets/img/servicios/micropigmentacion/KMEO5955.JPG",
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
