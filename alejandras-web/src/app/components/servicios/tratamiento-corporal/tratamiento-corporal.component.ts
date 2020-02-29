import { Component, OnInit } from '@angular/core';
import { TratamientoCorporalService } from '../../../services/tratamiento-corporal.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tratamiento-corporal',
  templateUrl: './tratamiento-corporal.component.html',
  styleUrls: ['./tratamiento-corporal.component.css']
})
export class TratamientoCorporalComponent implements OnInit {

  galeriasTratamientoCorporal: InterfacePestania[] = [];

  constructor(private tratamientoCorporalService: TratamientoCorporalService,
              private router: Router) { }

  ngOnInit() {
    this.galeriasTratamientoCorporal = this.tratamientoCorporalService.getTratamientoCorporales();
  }
  verTratamientoCorporal(idx: number) {
  this.router.navigate(['/quiero-tratamiento-corporal', idx]);
  }

}
