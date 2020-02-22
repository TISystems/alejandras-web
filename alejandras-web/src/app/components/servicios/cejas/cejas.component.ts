import { Component, OnInit } from '@angular/core';
import { CejasPerfiladoService } from '../../../services/cejas-perfilado.service';
import { CejasPlanchadoService } from '../../../services/cejas-planchado.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cejas',
  templateUrl: './cejas.component.html',
  styleUrls: ['./cejas.component.css']
})
export class CejasComponent  {

  galeriasCejasPerfilado: InterfacePestania[] = [];
  galeriasCejasPlanchado: InterfacePestania[] = [];
  constructor(
              private router: Router,
              private galeriaServiceCejasPerfilado: CejasPerfiladoService,
              private galeriaServiceCejasPlanchado: CejasPlanchadoService) { }

  ngOnInit() {
    this.galeriasCejasPerfilado = this.galeriaServiceCejasPerfilado.getPestanias();
    this.galeriasCejasPlanchado = this.galeriaServiceCejasPlanchado.getPestanias();
  }
      verCejasPerfilado(idx: number) {
        this.router.navigate(['/quiero-cejas-perfilado', idx]);
        }

        verCejasPlanchado(idx: number) {
          this.router.navigate(['/quiero-cejas-planchado', idx]);
          }

}
