import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PestaniaExtensionService } from '../../services/pestania.extension.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiero-pestanias-extensiones',
  templateUrl: './quiero-pestanias-extensiones.component.html',
  styleUrls: ['./quiero-pestanias-extensiones.component.css']
})
export class QuieroPestaniasExtensionesComponent  {

  galeriaExtension: any = {};

  constructor(private activatedRoute: ActivatedRoute, private galeriaServiceExtension: PestaniaExtensionService,
              private modalService: NgbModal ) {

    this.activatedRoute.params.subscribe(params => {

      this.galeriaExtension = this.galeriaServiceExtension.getPestania(params['id']);

    });
   }

   verMensaje(modal) {

    this.modalService.open(modal);

}
guardar(forma: NgForm) {

  console.log(forma);
}


}
