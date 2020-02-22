import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CejasPerfiladoService } from '../../services/cejas-perfilado.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiero-cejas-perfilado',
  templateUrl: './quiero-cejas-perfilado.component.html',
  styleUrls: ['./quiero-cejas-perfilado.component.css']
})
export class QuieroCejasPerfiladoComponent {

  galeriaServiceCejasPerfilados: any = {};

  constructor(private activatedRoute: ActivatedRoute, private galeriaServiceCejasPerfilado: CejasPerfiladoService,
              private modalService: NgbModal ) {

    this.activatedRoute.params.subscribe(params => {

      this.galeriaServiceCejasPerfilados = this.galeriaServiceCejasPerfilado.getPestania(params['id']);

    });
   }

   verMensaje(modal) {

    this.modalService.open(modal);

}
guardar(forma: NgForm) {

  console.log(forma);
}


}
