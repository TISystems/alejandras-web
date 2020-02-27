import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class MaquillajeService {


  maquillaje: InterfacePestania[] = [
    {
      nombre: "Noche",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/maquillaje/Noche/maquillaje-noche.png",
    },
    {
      nombre: "Día",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/maquillaje/Dia/maquillaje-dia.png",
    },
    {
      nombre: "Novia",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "",
    }


  ];

  constructor() {


  }

  getMaquillajess(){

    return this.maquillaje;
  }
  getMaquillajes(idx: number){

    return this.maquillaje[idx];
  }
}
