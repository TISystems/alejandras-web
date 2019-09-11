import {Injectable} from '@angular/core';
import { InterfaceGaleria } from '../interface/interfaceGaleria';


@Injectable()
export class GaleriaService {

   galeria: InterfaceGaleria[] = [
    {
      nombre: "Trabajo1",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      img: "assets/img/trabajos/trabajo1.jpg",
    },
    {
      nombre: "Trabajo2",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/trabajos/trabajo2.jpg",
    },
    {
      nombre: "Trabajo3",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/trabajos/trabajo3.jpg",
    },
    {
      nombre: "Trabajo4",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/trabajos/trabajo4.jpg",
    },
    {
      nombre: "Trabajo5",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/trabajos/trabajo5.jpg",

    },
    {
      nombre: "Trabajo6",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/trabajos/trabajo6.jpg",
    }
  ];

  constructor() {


  }

  getGalerias(){

    return this.galeria;
  }
  getGaleria(idx: number){

    return this.galeria[idx];
  }
}
