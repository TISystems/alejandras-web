import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class BotoxService {

  botox: InterfacePestania[] = [
    {
      nombre: "Cauterización",
      descripcion: "tratamiento que se basa en la queratina con el propósito de buscar la regeneración del cabello en lugar de su alisado.",
      img: "assets/img/servicios/botox/botox-1.jpg",
    },
    {
      nombre: "Ionización",
      descripcion: "tratamiento que repara las fibras capilares quebradas o dañadas, lo logra a través de un potente concentrado de principios activos.",
      img: "assets/img/servicios/botox/botox-1.jpg",
    }


  ];

  constructor() {


  }

  getBotoxs(){

    return this.botox;
  }
  getBotox(idx: number){

    return this.botox[idx];
  }
}
