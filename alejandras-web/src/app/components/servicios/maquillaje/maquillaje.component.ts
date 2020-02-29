import { Component, OnInit } from '@angular/core';
import { MaquillajeService } from '../../../services/maquillaje.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maquillaje',
  templateUrl: './maquillaje.component.html',
  styleUrls: ['./maquillaje.component.css']
})
export class MaquillajeComponent implements OnInit {

  galeriasMaquillaje: InterfacePestania[] = [];

  constructor(private maquillajeService: MaquillajeService,
              private router: Router) { }

  ngOnInit() {
    this.galeriasMaquillaje = this.maquillajeService.getMaquillajess();
  }
  verMaquillaje(idx: number) {
  this.router.navigate(['/quiero-maquillaje', idx]);
  }

}
