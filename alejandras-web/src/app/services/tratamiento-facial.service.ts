import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class TratamientoFacialService {

  tratamientoFacial: InterfacePestania[] = [
    {
      nombre: "Limpieza Básica",
      descripcion: "Consiste en la remoción de impurezas, exfoliación y remoción de comedones (puntos negros).",
      img: "",
    },
    {
      nombre: "Limpieza con Alta Frecuencia",
      descripcion: "esta técnica es aplicada al finalizar la limpieza básica, dentro de sus propiedades esta la estimulación sanguínea, anti sebáceo, anti acné y fungicida.",
      img: "",
    },
    {
      nombre: "Radiofrecuencia Tripolar",
      descripcion: "Es un método avanzado para mejorar la laxitud de la piel, sin incisiones ni periodo de recuperación. La radiofrecuencia es un tratamiento muy poco agresivo, que da excelentes resultados en el tratamiento de la flacidez facial y corporal ligera.",
      img: "",
    }


  ];

  constructor() {


  }

  getTratamientoFaciales(){

    return this.tratamientoFacial;
  }
  getTratamientoFacial(idx: number){

    return this.tratamientoFacial[idx];
  }
}
