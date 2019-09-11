import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GaleriaService } from '../../services/galeria.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-quiero-servicio',
  templateUrl: './quiero-servicio.component.html',
  styleUrls: ['./quiero-servicio.component.css']
})
export class QuieroServicioComponent {

  galeria: any = {};

  constructor(private activatedRoute: ActivatedRoute, private galeriaService: GaleriaService, private modalService: NgbModal ) {

    this.activatedRoute.params.subscribe(params => {

      this.galeria = this.galeriaService.getGaleria(params['id']);
      console.log(this.galeria);

    });
   }

   verMensaje(modal) {

    this.modalService.open(modal);

}

}
