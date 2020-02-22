import {Injectable} from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class PestaniaLiftingService {

  Pestania: InterfacePestania[] = [
    {
      nombre: "Lifting de Pestañas",
      descripcion: "Es un procedimiento que trata la pestaña desde la raíz. Este tratamiento permite alisar, erguir y estirar las pestañas sutilmente creando un efecto visible de proyección y longitud.",
      img: "assets/img/servicios/pestanias/Pestanias-lifting/IMG_8921.JPG",
    },
    {
      nombre: "Lifting de Pestañas",
      descripcion: "Es un procedimiento que trata la pestaña desde la raíz. Este tratamiento permite alisar, erguir y estirar las pestañas sutilmente creando un efecto visible de proyección y longitud.",
      img: "assets/img/servicios/pestanias/Pestanias-lifting/IMG_8923.JPG",
    },
    {
      nombre: "Lifting de Pestañas",
      descripcion: "Es un procedimiento que trata la pestaña desde la raíz. Este tratamiento permite alisar, erguir y estirar las pestañas sutilmente creando un efecto visible de proyección y longitud.",
      img: "assets/img/servicios/pestanias/Pestanias-lifting/IMG_8924.JPG"
    }


  ];

  constructor() {


  }

  getPestanias(){

    return this.Pestania;
  }
  getPestania(idx: number){

    return this.Pestania[idx];
  }
}
