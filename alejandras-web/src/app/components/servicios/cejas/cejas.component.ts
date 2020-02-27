import { Component, OnInit } from '@angular/core';
import { CejasService } from '../../../services/cejas.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cejas',
  templateUrl: './cejas.component.html',
  styleUrls: ['./cejas.component.css']
})
export class CejasComponent  {

  galeriasCejas: InterfacePestania[] = [];
  constructor(
              private router: Router,
              private galeriaServiceCejasPlanchado: CejasService) { }

  ngOnInit() {
    this.galeriasCejas = this.galeriaServiceCejasPlanchado.getCejas();
  }


        verCejasPlanchado(idx: number) {
          this.router.navigate(['/quiero-cejas-planchado', idx]);
          }

}
