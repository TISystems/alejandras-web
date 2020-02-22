import { Component, OnInit } from '@angular/core';
import { PestaniaOndulacionService } from '../../../services/pestania.ondulacion.service';
import { PestaniaExtensionService } from '../../../services/pestania.extension.service';
import { PestaniaLiftingService } from '../../../services/pestania.lifting.service';
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
  constructor(private galeriaServiceOndulacion: PestaniaOndulacionService, private galeriaServiceExtension: PestaniaExtensionService,
              private router: Router, private galeriaServiceLifting: PestaniaLiftingService) { }

  ngOnInit() {
    this.galeriasOndulacion = this.galeriaServiceOndulacion.getPestanias();
    this.galeriasExtension = this.galeriaServiceExtension.getPestanias();
    this.galeriasLifting = this.galeriaServiceLifting.getPestanias();
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
