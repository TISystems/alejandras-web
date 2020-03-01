import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class DestacadosService {

  botox: InterfacePestania[] = [
    {
      nombre: " Botox Cauterización",
      descripcion: "tratamiento que se basa en la queratina con el propósito de buscar la regeneración del cabello en lugar de su alisado.",
      img: "assets/img/servicios/botox/botox-1.jpg",
    },
    {
      nombre: "Visos",
      descripcion: "Se trata de un conjunto de técnicas para darle luz y brillo al cabello, permite resaltar aspectos interesantes del rostro.",
      img: "assets/img/servicios/color/Visos/2.jpg",
    },
    {
      nombre: "Planchado de Cejas",
      descripcion: "El planchado de cejas consiste en aplicar una crema alisadora que ayuda a que sea más fácil moldear las cejas.",
      img: "assets/img/servicios/cejas/planchado/GGVI6885.JPG",
    },
    {
      nombre: "Maquillaje Noche",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/maquillaje/Noche/maquillaje-noche.png",
    },
    {
      nombre: "Lavado con Secado",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/lavado/con-secado/secado1.jpg",
    },
    {
      nombre: "Peinado Día",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/peinados/Dia/dia.jpeg",
    }


  ];

  constructor() {


  }

  getDestacados(){

    return this.botox;
  }
  getDestacado(idx: number){

    return this.botox[idx];
  }
}
