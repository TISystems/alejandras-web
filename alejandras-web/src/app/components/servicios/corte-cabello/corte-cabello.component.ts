import { Component, OnInit } from '@angular/core';
import { CorteService } from '../../../services/corte.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corte-cabello',
  templateUrl: './corte-cabello.component.html',
  styleUrls: ['./corte-cabello.component.css']
})
export class CorteCabelloComponent  {

  galeriasCorte: InterfacePestania[] = [];

  constructor(private corteService: CorteService,
              private router: Router) { }

  ngOnInit() {
    this.galeriasCorte = this.corteService.getCortes();
  }
  verCorte(idx: number) {
  this.router.navigate(['/quiero-corte', idx]);
  }

}
