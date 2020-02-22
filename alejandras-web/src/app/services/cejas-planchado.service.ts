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
      nombre: "Planchado de Cejas",
      descripcion: "El planchado de cejas consiste en aplicar una crema alisadora que ayuda a que sea más fácil moldear las cejas, lo que este producto hace es estirar el vello para poder darle la forma deseada.",
      img: "assets/img/servicios/cejas/planchado/IMG_8937.JPG",
    },
    {
      nombre: "Planchado de Cejas",
      descripcion: "El planchado de cejas consiste en aplicar una crema alisadora que ayuda a que sea más fácil moldear las cejas, lo que este producto hace es estirar el vello para poder darle la forma deseada.",
      img: "assets/img/servicios/cejas/planchado/PQNC5238.JPG"
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
