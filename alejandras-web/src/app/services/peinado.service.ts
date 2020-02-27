import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class PeinadoService {

  peinado: InterfacePestania[] = [
    {
      nombre: "Noche",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "",
    },
    {
      nombre: "Día",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/peinados/Dia/dia.png",
    },
    {
      nombre: "Novia",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/peinados/Novia/novia.jpg",
    },
    {
      nombre: "Fantasía",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/peinados/Fantasia/fantasia.png",
    },
    {
      nombre: "Trenzas",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "",
    }


  ];

  constructor() {


  }

  getPeinados(){

    return this.peinado;
  }
  getPeinado(idx: number){

    return this.peinado[idx];
  }
}
