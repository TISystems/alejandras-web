import { Component, OnInit } from '@angular/core';
import { BrushingService } from '../../../services/brushing.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brushing',
  templateUrl: './brushing.component.html',
  styleUrls: ['./brushing.component.css']
})
export class BrushingComponent implements OnInit {

  galeriasBrushing: InterfacePestania[] = [];

  constructor(private brushingService: BrushingService,
              private router: Router) { }

  ngOnInit() {
    this.galeriasBrushing = this.brushingService.getBrushins();
  }
  verBrushing(idx: number) {
  this.router.navigate(['/quiero-brushing', idx]);
  }

}
