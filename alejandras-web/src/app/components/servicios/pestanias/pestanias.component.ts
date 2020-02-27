import { Component, OnInit } from '@angular/core';
import { PestaniaOndulacionService } from '../../../services/pestania.ondulacion.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pestanias',
  templateUrl: './pestanias.component.html',
  styleUrls: ['./pestanias.component.css']
})
export class PestaniasComponent {

  galeriasOndulacion: InterfacePestania[] = [];
  galeriasExtension: InterfacePestania[] = [];
  galeriasLifting: InterfacePestania[] = [];
  constructor(private galeriaServiceOndulacion: PestaniaOndulacionService,
              private router: Router) { }

  ngOnInit() {
    this.galeriasOndulacion = this.galeriaServiceOndulacion.getPestanias();
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
