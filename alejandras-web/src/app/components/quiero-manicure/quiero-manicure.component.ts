import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManicureService } from '../../services/manicure.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiero-manicure',
  templateUrl: './quiero-manicure.component.html',
  styleUrls: ['./quiero-manicure.component.css']
})
export class QuieroManicureComponent  {
  manicure: any = {};

  constructor(private activatedRoute: ActivatedRoute, private galeriaService: ManicureService, private modalService: NgbModal ) {

    this.activatedRoute.params.subscribe(params => {

      this.manicure = this.galeriaService.getmanicure(params['id']);


    });
   }

   verMensaje(modal) {

    this.modalService.open(modal);

}
guardar(forma: NgForm) {

  console.log(forma)
}

}
