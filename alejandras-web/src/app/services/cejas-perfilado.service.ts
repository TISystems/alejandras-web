import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class CejasPerfiladoService {

  cejasPerfilado: InterfacePestania[] = [
    {
      nombre: "Perfilado de Cejas",
      descripcion: "El perfilado consiste en la técnica correcta de dar forma a tus cejas, dependiendo de la morfología de tus ojos y rostro, lo que nos proporcionara una correcta guía para definir el arco, el largo y el espesor de estas.",
      img: "assets/img/servicios/cejas/perfilado/IMG_8930.JPG",
    },
    {
      nombre: "Perfilado de Cejas",
      descripcion: "El perfilado consiste en la técnica correcta de dar forma a tus cejas, dependiendo de la morfología de tus ojos y rostro, lo que nos proporcionara una correcta guía para definir el arco, el largo y el espesor de estas.",
      img: "assets/img/servicios/cejas/perfilado/IMG_8931.JPG",
    },
    {
      nombre: "Perfilado de Cejas",
      descripcion: "El perfilado consiste en la técnica correcta de dar forma a tus cejas, dependiendo de la morfología de tus ojos y rostro, lo que nos proporcionara una correcta guía para definir el arco, el largo y el espesor de estas.",
      img: "assets/img/servicios/cejas/perfilado/IMG_8932.JPG"
    }


  ];

  constructor() {


  }

  getPestanias(){

    return this.cejasPerfilado;
  }
  getPestania(idx: number){

    return this.cejasPerfilado[idx];
  }
}
