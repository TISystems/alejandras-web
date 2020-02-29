import { Component } from '@angular/core';
import { DestacadosService } from '../../../services/destacados.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiero-destacados',
  templateUrl: './quiero-destacados.component.html',
  styleUrls: ['./quiero-destacados.component.css']
})
export class QuieroDestacadosComponent  {

  galeriaDestacados: any = {};

  constructor(private activatedRoute: ActivatedRoute, private destacadosService: DestacadosService,
              private modalService: NgbModal ) {

    this.activatedRoute.params.subscribe(params => {

      this.galeriaDestacados = this.destacadosService.getDestacado(params['id']);

    });
   }

   verMensaje(modal) {

    this.modalService.open(modal);

}
guardar(forma: NgForm) {

  console.log(forma)
}


}
