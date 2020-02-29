import { Component, OnInit } from '@angular/core';
import { LavadoService } from '../../../services/lavado.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lavado',
  templateUrl: './lavado.component.html',
  styleUrls: ['./lavado.component.css']
})
export class LavadoComponent  {

  galeriasLavados: InterfacePestania[] = [];

  constructor(private lavadoService: LavadoService,
              private router: Router) { }

  ngOnInit() {
    this.galeriasLavados = this.lavadoService.getLavados();
  }
  verLavado(idx: number) {
  this.router.navigate(['/quiero-lavado', idx]);
  }

}
