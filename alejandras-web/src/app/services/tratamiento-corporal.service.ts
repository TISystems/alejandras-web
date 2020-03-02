import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class TratamientoCorporalService {

  tratamientoCorporal: InterfacePestania[] = [
    {
      nombre: "Reductivo con Ultra Cavitación",
      descripcion: "Tratamiento con aparato que produce ondas ultrasónicas de alta potencia, a nivel de la superficie externa de la piel generando cambios de presión en el líquido intersticial del tejido.",
      img: "assets/img/servicios/tratamiento-corporal/corporal.jpeg",
    }


  ];

  constructor() {


  }

  getTratamientoCorporales(){

    return this.tratamientoCorporal;
  }
  getTratamientoCorporale(idx: number){

    return this.tratamientoCorporal[idx];
  }
}
