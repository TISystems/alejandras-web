import { Injectable } from '@angular/core';
import { InterfacePestania} from '../interface/interfacePestania';

@Injectable({
  providedIn: 'root'
})
export class CejasPlanchadoService {

  cejasPerfilado: InterfacePestania[] = [
    {
      nombre: "Planchado de Cejas",
      descripcion: "El planchado de cejas consiste en aplicar una crema alisadora que ayuda a que sea más fácil moldear las cejas, lo que este producto hace es estirar el vello para poder darle la forma deseada.",
      img: "assets/img/servicios/cejas/planchado/GGVI6885.JPG",
    },
    {
      nombre: "Perfilado de Cejas",
      descripcion: "El perfilado consiste en la técnica correcta de dar forma a tus cejas, dependiendo de la morfología de tus ojos y rostro, lo que nos proporcionara una correcta guía para definir el arco, el largo y el espesor de estas.",
      img: "assets/img/servicios/cejas/perfilado/IMG_8931.JPG",
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
