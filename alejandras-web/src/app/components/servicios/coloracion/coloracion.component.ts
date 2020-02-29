import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../../services/color.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coloracion',
  templateUrl: './coloracion.component.html',
  styleUrls: ['./coloracion.component.css']
})
export class ColoracionComponent  {

  galeriasColoracion: InterfacePestania[] = [];

  constructor(private colorService: ColorService,
              private router: Router) { }

  ngOnInit() {
    this.galeriasColoracion = this.colorService.getColors();
  }
  verColoracion(idx: number) {
  this.router.navigate(['/quiero-color', idx]);
  }
}
