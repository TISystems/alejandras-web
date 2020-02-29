import { Component, OnInit } from '@angular/core';
import { TratamientoFacialService } from '../../../services/tratamiento-facial.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tratamiento-facial',
  templateUrl: './tratamiento-facial.component.html',
  styleUrls: ['./tratamiento-facial.component.css']
})
export class TratamientoFacialComponent implements OnInit {

  galeriasTratamientoFacial: InterfacePestania[] = [];

  constructor(private tratamientoFacialService: TratamientoFacialService,
              private router: Router) { }

  ngOnInit() {
    this.galeriasTratamientoFacial = this.tratamientoFacialService.getTratamientoFaciales();
  }
  verTratamientoFacial(idx: number) {
  this.router.navigate(['/quiero-tratamiento-facial', idx]);
  }

}
