import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PestaniaService } from '../../services/pestania.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiero-pestanias',
  templateUrl: './quiero-pestanias.component.html',
  styleUrls: ['./quiero-pestanias.component.css']
})
export class QuieroPestaniasComponent  {

  galeria: any = {};

  constructor(private activatedRoute: ActivatedRoute, private galeriaService: PestaniaService, private modalService: NgbModal ) {

    this.activatedRoute.params.subscribe(params => {

      this.galeria = this.galeriaService.getPestania(params['id']);
      console.log(this.galeria);

    });
   }

   verMensaje(modal) {

    this.modalService.open(modal);

}
guardar(forma: NgForm) {

  console.log(forma)
}


}
