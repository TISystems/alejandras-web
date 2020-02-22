
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PestaniaLiftingService } from '../../services/pestania.lifting.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiero-pestanias-lifting',
  templateUrl: './quiero-pestanias-lifting.component.html',
  styleUrls: ['./quiero-pestanias-lifting.component.css']
})
export class QuieroPestaniasLiftingComponent {

  galeriaLifting: any = {};

  constructor(private activatedRoute: ActivatedRoute, private galeriaServiceLifting: PestaniaLiftingService,
              private modalService: NgbModal ) {

    this.activatedRoute.params.subscribe(params => {

      this.galeriaLifting = this.galeriaServiceLifting.getPestania(params['id']);

    });
   }

   verMensaje(modal) {

    this.modalService.open(modal);

}
guardar(forma: NgForm) {

  console.log(forma);
}

}
