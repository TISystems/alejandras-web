import { Component, OnInit } from '@angular/core';
import {DepilacionService } from '../../../services/depilacion.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depilacion',
  templateUrl: './depilacion.component.html',
  styleUrls: ['./depilacion.component.css']
})
export class DepilacionComponent implements OnInit {

  galeriasDepilacion: InterfacePestania[] = [];
  constructor(private depilacionService: DepilacionService, private router: Router) { }

  ngOnInit() {
    this.galeriasDepilacion = this.depilacionService.getDepilaciones();
  }

  verDepilacion(idx: number) {
  this.router.navigate(['/quiero-depilacion-cera-tradicional', idx]);


  }

}
