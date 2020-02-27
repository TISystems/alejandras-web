import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PestaniaOndulacionService } from '../../../services/pestania.ondulacion.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiero-pestanias',
  templateUrl: './quiero-pestanias-Ondulacion.component.html',
  styleUrls: ['./quiero-pestanias-Ondulacion.component.css']
})
export class QuieroPestaniasOndulacionComponent  {

  galeriaOndulacion: any = {};

  constructor(private activatedRoute: ActivatedRoute, private galeriaServiceOndulacion: PestaniaOndulacionService,
              private modalService: NgbModal ) {

    this.activatedRoute.params.subscribe(params => {

      this.galeriaOndulacion = this.galeriaServiceOndulacion.getPestania(params['id']);

    });
   }

   verMensaje(modal) {

    this.modalService.open(modal);

}
guardar(forma: NgForm) {

  console.log(forma)
}


}
