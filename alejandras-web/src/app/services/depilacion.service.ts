import {Injectable} from '@angular/core';
import { InterfaceDepilacion} from '../interface/interfaceDepilacion';

@Injectable({
  providedIn: 'root'
})
export class DepilacionService {

  Depilacion: InterfaceDepilacion[] = [
    {
      nombre: "Depilacion1",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      img: "assets/img/servicios/Depilacion/Depilacion1.jpeg",
    },
    {
      nombre: "Depilacion2",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/Depilacion/Depilacion2.jpeg",
    },
    {
      nombre: "Depilacion3",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/Depilacion/Depilacion3.jpeg",
    },
    {
      nombre: "Depilacion4",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/Depilacion/Depilacion4.jpeg",
    },
    {
      nombre: "Depilacion5",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/Depilacion/Depilacion5.jpeg",

    },
    {
      nombre: "Depilacion6",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/Depilacion/Depilacion6.jpeg",
    },
  {
    nombre: "Depilacion7",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Depilacion/Depilacion7.jpeg",
  },
  {
    nombre: "Depilacion8",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Depilacion/Depilacion8.jpeg",
  },
  {
    nombre: "Depilacion9",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Depilacion/Depilacion9.jpeg",
  },
  {
    nombre: "Depilacion10",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Depilacion/Depilacion10.jpeg",
  },
  {
    nombre: "Depilacion11",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Depilacion/Depilacion11.jpeg",
  },
  {
    nombre: "Depilacion12",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Depilacion/Depilacion12.jpeg",
  }


  ];

  constructor() {


  }

  getDepilaciones(){

    return this.Depilacion;
  }
  getDepilacion(idx: number){

    return this.Depilacion[idx];
  }
}
