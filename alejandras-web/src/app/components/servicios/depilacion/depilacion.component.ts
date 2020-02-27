import { Component, OnInit } from '@angular/core';
import {DepilacionService } from '../../../services/depilacion.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depilacion',
  templateUrl: './depilacion.component.html',
  styleUrls: ['./depilacion.component.css']
})
export class DepilacionComponent {

  galerias: InterfacePestania[] = [];
  constructor(private galeriaService: DepilacionService, private router: Router) { }

  ngOnInit() {
    this.galerias = this.galeriaService.getDepilaciones();
  }
  verHeroe(idx: number) {
  this.router.navigate(['/quiero-depilacion', idx]);


  }

}
