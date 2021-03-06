import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class AlisadoService {

  alisado: InterfacePestania[] = [
    {
      nombre: "Alisado Queratina",
      descripcion: "Proteína que contribuye al endurecimiento de la capa superficial del cabello, nutre el cabello, lo reconstruye y a aporta brillo.",
      img: "assets/img/servicios/alisado/alisar-tu-pelo-de-forma-natural.jpg",
    },
    {
      nombre: "Alisado Brasil cacau",
      descripcion: "Tratamiento que no contiene productos químicos y cuenta con elementos de gran calidad para un excelente resultado.",
      img: "assets/img/servicios/alisado/Cmo_alaciar_el_cabello_628x425.jpg",
    },
    {
      nombre: "Alisado Inoa",
      descripcion: "Indicado para aquellas personas que tienen el cabello rizado y/o encrespado y lo quiere suave, liso, con hidratación equilibrada.",
      img: "assets/img/servicios/alisado/capilar.jpg",
    }


  ];

  constructor() {


  }

  getAlisados(){

    return this.alisado;
  }
  getAlisado(idx: number){

    return this.alisado[idx];
  }
}
