import { Component, OnInit } from '@angular/core';
import { CejasPlanchadoService } from '../../../services/cejas-planchado.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cejas',
  templateUrl: './cejas.component.html',
  styleUrls: ['./cejas.component.css']
})
export class CejasComponent  {

  galeriasCejasPlanchado: InterfacePestania[] = [];
  constructor(
              private router: Router,
              private galeriaServiceCejasPlanchado: CejasPlanchadoService) { }

  ngOnInit() {
    this.galeriasCejasPlanchado = this.galeriaServiceCejasPlanchado.getPestanias();
  }


        verCejasPlanchado(idx: number) {
          this.router.navigate(['/quiero-cejas-planchado', idx]);
          }

}
