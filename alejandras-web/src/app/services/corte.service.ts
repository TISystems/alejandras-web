import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class CorteService {

  corte: InterfacePestania[] = [
    {
      nombre: "Corte Varón",
      descripcion: "Aporta estilo, condición y tendencia a gusto.",
      img: "assets/img/servicios/cortes/varon/varon1.jpg",
    },
    {
      nombre: "Corte Dama",
      descripcion: "Aporta estilo, condición y tendencia a gusto.",
      img: "assets/img/servicios/cortes/dama/dama.jpg",
    },
    {
      nombre: "Corte Niño",
      descripcion: "Aporta estilo, condición y tendencia a gusto.",
      img: "assets/img/servicios/cortes/nino/nino.jpg",
    }


  ];

  constructor() {


  }

  getCortes(){

    return this.corte;
  }
  getCorte(idx: number){

    return this.corte[idx];
  }
}
