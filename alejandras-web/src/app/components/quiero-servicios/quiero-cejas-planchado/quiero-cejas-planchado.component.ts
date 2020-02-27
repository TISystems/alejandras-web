import { Component, OnInit } from '@angular/core';
import { CejasService } from '../../../services/cejas.service';
import { ActivatedRoute } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiero-cejas-planchado',
  templateUrl: './quiero-cejas-planchado.component.html',
  styleUrls: ['./quiero-cejas-planchado.component.css']
})
export class QuieroCejasPlanchadoComponent  {

  galeriaCejasPlanchado: any = {};

  constructor(private activatedRoute: ActivatedRoute, private galeriaServiceCejasPlanchado: CejasService,
              private modalService: NgbModal ) {

    this.activatedRoute.params.subscribe(params => {

      this.galeriaCejasPlanchado = this.galeriaServiceCejasPlanchado.getCeja(params['id']);

    });
   }

   verMensaje(modal) {

    this.modalService.open(modal);

}
guardar(forma: NgForm) {

  console.log(forma);
}

}
