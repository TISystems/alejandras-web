import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GaleriaService } from '../../services/galeria.service';


@Component({
  selector: 'app-quiero-servicio',
  templateUrl: './quiero-servicio.component.html',
  styleUrls: ['./quiero-servicio.component.css']
})
export class QuieroServicioComponent {

  galeria: any = {};

  constructor(private activatedRoute: ActivatedRoute, private galeriaService: GaleriaService) {

    this.activatedRoute.params.subscribe(params => {

      this.galeria = this.galeriaService.getGaleria(params['id']);
      console.log(this.galeria);

    });
   }

}
