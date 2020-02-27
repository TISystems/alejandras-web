import {Injectable} from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class PestaniaService {

  Pestania: InterfacePestania[] = [
    {
      nombre: "Ondulación",
      descripcion: "Consiste en aplicar una serie de productos (gel permanente, gel neutralizante, tinte) encargados de modificar la forma natural de las pestañas dejándolas onduladas de 6 a 8 semanas aproximadamente",
      img: "assets/img/servicios/pestanias/Pestanias-ondulacion/JQXU3284.JPG",
    },
    {
      nombre: "Lifting",
      descripcion: "Es un procedimiento que trata la pestaña desde la raíz. Este tratamiento permite alisar, erguir y estirar las pestañas sutilmente creando un efecto visible de proyección y longitud.",
      img: "assets/img/servicios/pestanias/Pestanias-lifting/IMG_8921.JPG",
    },
    {
      nombre: "Extension",
      descripcion: "Las extensiones de pestañas consisten en agregar longitud, curvatura y volumen a tu mirada, creando un estilo que simplemente la máscara o pestañas de tiras no pueden ofrecer.",
      img: "assets/img/servicios/pestanias/Pestanias-extension/IMG_8925.JPG"
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
