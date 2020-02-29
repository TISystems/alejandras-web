import { Component, OnInit } from '@angular/core';
import { PeinadoService } from '../../../services/peinado.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peinados',
  templateUrl: './peinados.component.html',
  styleUrls: ['./peinados.component.css']
})
export class PeinadosComponent  {

  galeriasPeinadoService: InterfacePestania[] = [];

  constructor(private peinadoService: PeinadoService,
              private router: Router) { }

  ngOnInit() {
    this.galeriasPeinadoService = this.peinadoService.getPeinados();
  }
  verMicropigmentacion(idx: number) {
  this.router.navigate(['/quiero-peinado', idx]);
  }


}
