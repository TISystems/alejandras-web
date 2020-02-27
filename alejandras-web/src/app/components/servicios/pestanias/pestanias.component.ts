import { Component, OnInit } from '@angular/core';
import { PestaniaService } from '../../../services/pestania.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pestanias',
  templateUrl: './pestanias.component.html',
  styleUrls: ['./pestanias.component.css']
})
export class PestaniasComponent {

  galeriasPestanias: InterfacePestania[] = [];

  constructor(private galeriaServiceOndulacion: PestaniaService,
              private router: Router) { }

  ngOnInit() {
    this.galeriasPestanias = this.galeriaServiceOndulacion.getPestanias();
  }
  verPestaniasOndulacion(idx: number) {
  this.router.navigate(['/quiero-pestanias-ondulacion', idx]);
  }
  verPestaniasExtension(idx: number) {
    this.router.navigate(['/quiero-pestanias-extension', idx]);
    }
    verPestaniasLifting(idx: number) {
      this.router.navigate(['/quiero-pestanias-lifting', idx]);
      }

}
