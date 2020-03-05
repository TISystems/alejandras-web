import {Injectable} from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class DepilacionService {

  Depilacion: InterfacePestania[] = [
    {
      nombre: "Cera Tradicional",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      img: "assets/img/servicios/depilacion-cera-tradicional/depilacion.jpeg",
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
