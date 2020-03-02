import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class TratamientoFacialService {

  tratamientoFacial: InterfacePestania[] = [
    {
      nombre: "Limpieza Básica Facial",
      descripcion: "Consiste en la remoción de impurezas, exfoliación y remoción de comedones (puntos negros).Aplicamos la mascarilla y el tratamiento acorde al tipo de piel.",
      img: "assets/img/servicios/tratamiento-facial/Limpieza-basica/basica.jpeg",
    },
    {
      nombre: "Limpieza con Alta Frecuencia",
      descripcion: "esta técnica es aplicada al finalizar la limpieza básica, dentro de sus propiedades esta la estimulación sanguínea, anti sebáceo, anti acné y fungicida.",
      img: "assets/img/servicios/tratamiento-facial/Limpieza-con-alta-frecuencia/alta-frecuencia.jpeg",
    },
    {
      nombre: "Radiofrecuencia Tripolar",
      descripcion: "Es un método avanzado para mejorar la laxitud de la piel, sin incisiones ni periodo de recuperación. La radiofrecuencia es un tratamiento muy poco agresivo.",
      img: "assets/img/servicios/tratamiento-facial/Radiofrecuencia-tripolar/tripolar.jpeg",
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
