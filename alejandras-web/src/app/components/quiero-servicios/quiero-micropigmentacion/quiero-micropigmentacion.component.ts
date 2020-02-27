import { Component, OnInit } from '@angular/core';
import { MicropigmentacionService } from '../../../services/micropigmentacion.service';
import { ActivatedRoute } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiero-micropigmentacion',
  templateUrl: './quiero-micropigmentacion.component.html',
  styleUrls: ['./quiero-micropigmentacion.component.css']
})
export class QuieroMicropigmentacionComponent  {

  galeriaMicropigmentacion: any = {};

  constructor(private activatedRoute: ActivatedRoute, private galeriamicropigmentacion: MicropigmentacionService,
              private modalService: NgbModal ) {

    this.activatedRoute.params.subscribe(params => {

      this.galeriaMicropigmentacion = this.galeriamicropigmentacion.getPestania(params['id']);

    });
   }

   verMensaje(modal) {

    this.modalService.open(modal);

}
guardar(forma: NgForm) {

  console.log(forma)
}

}
