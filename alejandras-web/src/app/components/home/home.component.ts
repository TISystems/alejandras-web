import { Component, OnInit } from '@angular/core';
import { DestacadosService } from '../../services/destacados.service';
import { InterfacePestania } from '../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  galeriasDestacado: InterfacePestania[] = [];

  constructor(private destacadoService: DestacadosService,
              private router: Router) { }

  ngOnInit() {
    this.galeriasDestacado = this.destacadoService.getDestacados();
  }
  verDestacado(idx: number) {
  this.router.navigate(['/quiero-destacado', idx]);
  }

}
