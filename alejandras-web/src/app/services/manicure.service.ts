import {Injectable} from '@angular/core';
import { InterfaceManicure } from '../interface/interfaceManicure';


@Injectable()
export class ManicureService {

   manicure: InterfaceManicure[] = [
    {
      nombre: "Manicure1",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      img: "assets/img/servicios/Manicures/Manicure1.jpg",
    },
    {
      nombre: "Manicure2",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/Manicures/Manicure2.jpg",
    },
    {
      nombre: "Manicure3",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/Manicures/Manicure3.jpg",
    },
    {
      nombre: "Manicure4",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/Manicures/Manicure4.jpg",
    },
    {
      nombre: "Manicure5",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/Manicures/Manicure5.jpg",

    },
    {
      nombre: "Manicure6",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/Manicures/Manicure6.png",
    },
  {
    nombre: "Manicure7",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Manicures/Manicure7.JPEG",
  },
  {
    nombre: "Pedicure1",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Pedicures/Pedicure1.jpeg",
  },
  {
    nombre: "Pedicure2",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Pedicures/Pedicure2.jpeg",
  },
  {
    nombre: "Pedicure3",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Pedicures/Pedicure3.jpeg",
  },
  {
    nombre: "Pedicure4",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Pedicures/Pedicure4.jpeg",
  },
  {
    nombre: "Pedicure5",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Pedicures/Pedicure5.jpeg",
  },
  {
    nombre: "Pedicure6",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Pedicures/Pedicure6.jpeg",
  },
  {
    nombre: "Pedicure7",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Pedicures/Pedicure7.jpeg",
  },
  {
    nombre: "Manicure16",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Manicures/Manicure16.jpeg",
  }


  ];

  constructor() {


  }

  getManicures(){

    return this.manicure;
  }
  getmanicure(idx: number){

    return this.manicure[idx];
  }
}
