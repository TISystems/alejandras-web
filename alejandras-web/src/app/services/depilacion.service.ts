import {Injectable} from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class DepilacionService {

  Depilacion: InterfacePestania[] = [
    {
      nombre: "Axilas",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      img: "",
    },
    {
      nombre: "Bozo",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "",
    },
    {
      nombre: "Frente",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "",
    },
    {
      nombre: "Cejas",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "",
    },
    {
      nombre: "Nariz",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "",

    },
    {
      nombre: "Patillas",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "",
    },
  {
    nombre: "Mentón",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
  },
  {
    nombre: "1/2 Brazo",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
  },
  {
    nombre: "Brazo Completo",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
  },
  {
    nombre: "1/2 Pierna",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/depilacion-cera-tradicional/gluteos/srfg.jpg",
  },
  {
    nombre: "Pierna Completa",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
  },
  {
    nombre: "Espalda",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
  },
  {
    nombre: "Abdomen",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
  },
  {
    nombre: "Glúteos",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/depilacion-cera-tradicional/media-pierna/d.jpg",
  },
  {
    nombre: "Cara",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
  },
  {
    nombre: "Rebaje Corto",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
  },
  {
    nombre: "Rebaje Largo",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
  },
  {
    nombre: "Rebaje Completo",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "",
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
