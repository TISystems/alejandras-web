import { Component, OnInit } from '@angular/core';
import { PestaniaService } from '../../../services/pestania.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pestanias',
  templateUrl: './pestanias.component.html',
  styleUrls: ['./pestanias.component.css']
})
export class PestaniasComponent {

  galerias: InterfacePestania[] = [];
  constructor(private galeriaService: PestaniaService, private router: Router) { }

  ngOnInit() {
    this.galerias = this.galeriaService.getPestanias();
  }
  verHeroe(idx: number) {
  this.router.navigate(['/quiero-pestanias', idx]);


  }

}
