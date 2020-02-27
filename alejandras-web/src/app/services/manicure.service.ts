import {Injectable} from '@angular/core';
import { InterfacePestania } from '../interface/interfacePestania';


@Injectable()
export class ManicureService {

   manicure: InterfacePestania[] = [
    {
      nombre: "Tradicional",
      descripcion: "Consiste en el embellecimiento, limpieza y cuidado de la mano para su perfecto esmaltado.",
      img: "assets/img/servicios/Manicure-pedicure/Tradicional/tradicional1.jpg",
    },
    {
      nombre: "Permanente",
      descripcion: "Consiste en el embellecimiento, limpieza y cuidado de la mano para su perfecto esmaltado permanente.",
      img: "assets/img/servicios/Manicure-pedicure/Permanente/hg.jpg",
    },
    {
      nombre: "Acrílicos",
      descripcion: "Son extensiones que se hacen a nuestra uña natural, para lograr el largo y la forma deseada.",
      img: "assets/img/servicios/Manicure-pedicure/Acrilicos/kjh.jpg",
    },
    {
      nombre: "Kapping",
      descripcion: "Recubrimiento con gel o acrílico que permite que las uñas quebradizas, débiles o escamadas adquieran firmeza y volumen por 3 semanas aproximadamente.",
      img: "assets/img/servicios/Manicure-pedicure/Kapping/kapping.png",
    },
    {
      nombre: "Permanete con Diseño(mano alzada)",
      descripcion: "Embellecimiento de la uña con dibujo personalizado, tiene una duración de 2 a 4 semanas aproximadamente.",
      img: "assets/img/servicios/Manicure-pedicure/Permanente-con-disenio/mjkjhhkj.jpg",
    },
    {
      nombre: "Permanente con Efecto",
      descripcion: "Embellecimiento de la uña con variedad de pigmentos, tiene una duración de 2 a 4 semanas aproximadamente.",
      img: "assets/img/servicios/Manicure-pedicure/Permanente-con-efecto/bkb.jpg",
    },
  {
    nombre: "Permanente con Aplicación de Cristales",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "assets/img/servicios/Manicure-pedicure/Permanente-con-aplicacion-de-cristales/cristales.jpeg",
  },
  {
    nombre: "Stamping",
    descripcion: "Es un método con el que podemos decorar nuestras uñas mediante un estampador con diseños increíbles de una manera sencilla y rápida.",
    img: "assets/img/servicios/Manicure-pedicure/Stamping/lkhl.jpg",
  },
  {
    nombre: "Degradé",
    descripcion: "Consiste en el embellecimiento, limpieza y cuidado de la mano para su perfecto esmaltado permanente.",
    img: "assets/img/servicios/Manicure-pedicure/Degrade/jku.jpg",
  },
  {
    nombre: "Rusa",
    descripcion: "Técnica que se realiza con un torno dejando la zona de la cutícula y la piel alrededor de la uña perfectamente lisa, esto permite realizar el esmaltado “bajo cutícula” o muy cerca a la cutícula.",
    img: "assets/img/servicios/Manicure-pedicure/Rusa/manicura-rusa.jpg",
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
