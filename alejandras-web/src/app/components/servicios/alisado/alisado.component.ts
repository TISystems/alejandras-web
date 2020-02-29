import { Component, OnInit } from '@angular/core';
import { AlisadoService } from '../../../services/alisado.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alisado',
  templateUrl: './alisado.component.html',
  styleUrls: ['./alisado.component.css']
})
export class AlisadoComponent  {

  galeriasAlisado: InterfacePestania[] = [];

  constructor(private alisadoService: AlisadoService,
              private router: Router) { }

  ngOnInit() {
    this.galeriasAlisado = this.alisadoService.getAlisados();
  }
  verAlisado(idx: number) {
  this.router.navigate(['/quiero-alisado', idx]);
  }

}
