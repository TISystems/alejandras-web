import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class LavadoService {

  lavado: InterfacePestania[] = [
    {
      nombre: "Lavado con Secado",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/lavado/con-secado/secado1.jpg",
    },
    {
      nombre: "Lavado con Acomodo",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "assets/img/servicios/lavado/con-acomodo/acomodo.jpg",
    }


  ];

  constructor() {


  }

  getLavados(){

    return this.lavado;
  }
  getLavado(idx: number){

    return this.lavado[idx];
  }
}
