import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../../../services/galeria.service';
import { InterfaceGaleria } from '../../../interface/interfaceGaleria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peinados',
  templateUrl: './peinados.component.html',
  styleUrls: ['./peinados.component.css']
})
export class PeinadosComponent  {

  galerias: InterfaceGaleria[] = [];
  constructor(private galeriaService: GaleriaService, private router: Router) { }

  ngOnInit() {
    this.galerias = this.galeriaService.getGalerias();
  }
  verHeroe(idx: number) {
  this.router.navigate(['/quiero-servicio', idx]);


  }

}
