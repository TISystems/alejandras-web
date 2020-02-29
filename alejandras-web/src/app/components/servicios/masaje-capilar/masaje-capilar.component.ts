import { Component, OnInit } from '@angular/core';
import { MasajeCapilarService } from '../../../services/masaje-capilar.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masaje-capilar',
  templateUrl: './masaje-capilar.component.html',
  styleUrls: ['./masaje-capilar.component.css']
})
export class MasajeCapilarComponent implements OnInit {

  galeriasMasajeCapilar: InterfacePestania[] = [];

  constructor(private masajeCapilarService: MasajeCapilarService,
              private router: Router) { }

  ngOnInit() {
    this.galeriasMasajeCapilar = this.masajeCapilarService.getMasajeCapilaress();
  }
  verMasajeCapilar(idx: number) {
  this.router.navigate(['/quiero-masaje-capilar', idx]);
  }

}
