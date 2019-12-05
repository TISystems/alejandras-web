import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepilacionService } from '../../services/depilacion.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiero-depilacion',
  templateUrl: './quiero-depilacion.component.html',
  styleUrls: ['./quiero-depilacion.component.css']
})
export class QuieroDepilacionComponent  {

  manicure: any = {};

  constructor(private activatedRoute: ActivatedRoute, private galeriaService: DepilacionService, private modalService: NgbModal ) {

    this.activatedRoute.params.subscribe(params => {

      this.manicure = this.galeriaService.getDepilacion(params['id']);


    });
   }

   verMensaje(modal) {

    this.modalService.open(modal);

}
guardar(forma: NgForm) {

  console.log(forma)
}


}
