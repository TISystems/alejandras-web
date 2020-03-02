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
      img: "assets/img/servicios/depilacion-cera-tradicional/axilas/axilas.jpeg",
    },
    {
      nombre: "Bozo",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/depilacion-cera-tradicional/bozo/bozo.jpeg",
    },
    {
      nombre: "Frente",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/depilacion-cera-tradicional/frente/frente.jpeg",
    },
    {
      nombre: "Cejas",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/depilacion-cera-tradicional/cejas/cejas.jpeg",
    },
    {
      nombre: "Nariz",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/depilacion-cera-tradicional/nariz/nariz.jpeg",

    },
    {
      nombre: "Patillas",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/depilacion-cera-tradicional/patillas/patillas.jpeg",
    },
  {
    nombre: "Mentón",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/depilacion-cera-tradicional/menton/menton.jpeg",
  },
  {
    nombre: "1/2 Brazo",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/depilacion-cera-tradicional/medio-brazo/medio-brazo.jpeg",
  },
  {
    nombre: "Brazo Completo",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/depilacion-cera-tradicional/brazo-completo/brazo-completo.jpeg",
  },
  {
    nombre: "1/2 Pierna",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/depilacion-cera-tradicional/media-pierna/media-pierna.jpeg",
  },
  {
    nombre: "Pierna Completa",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/depilacion-cera-tradicional/pierna-completa/pierna-completa.jpeg",
  },
  {
    nombre: "Espalda",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/depilacion-cera-tradicional/espalda/espalda.jpeg",
  },
  {
    nombre: "Abdomen",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/depilacion-cera-tradicional/abdomen/abdomen.jpeg",
  },
  {
    nombre: "Glúteos",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/depilacion-cera-tradicional/gluteos/gluteos.jpeg",
  },
  {
    nombre: "Cara",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/depilacion-cera-tradicional/cara/cara.jpeg",
  },
  {
    nombre: "Rebaje Corto",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/depilacion-cera-tradicional/rebaje-corto/rebaje-corto.jpeg",
  },
  {
    nombre: "Rebaje Largo",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/depilacion-cera-tradicional/rebaje-largo/rebaje-largo.jpeg",
  },
  {
    nombre: "Rebaje Completo",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/depilacion-cera-tradicional/rebaje-completo/rebaje-completo.jpeg",
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
