import { Component, OnInit } from '@angular/core';
import { MicropigmentacionService } from '../../../services/micropigmentacion.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-micropigmentacion',
  templateUrl: './micropigmentacion.component.html',
  styleUrls: ['./micropigmentacion.component.css']
})
export class MicropigmentacionComponent  {

  galeriasmicropigmentacion: InterfacePestania[] = [];

  constructor(private micropigmentacionService: MicropigmentacionService,
              private router: Router) { }

  ngOnInit() {
    this.galeriasmicropigmentacion = this.micropigmentacionService.getMicropigmentaciones();
  }
  verMicropigmentacion(idx: number) {
  this.router.navigate(['/quiero-micropigmentacion', idx]);
  }


}
