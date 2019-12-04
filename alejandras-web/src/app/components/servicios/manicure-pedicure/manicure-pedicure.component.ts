import { Component, OnInit } from '@angular/core';
import { ManicureService } from '../../../services/manicure.service';
import { InterfaceManicure } from '../../../interface/interfaceManicure';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manicure-pedicure',
  templateUrl: './manicure-pedicure.component.html',
  styleUrls: ['./manicure-pedicure.component.css']
})
export class ManicurePedicureComponent implements OnInit {

  manicures: InterfaceManicure[] = [];
  constructor(private manicureService: ManicureService, private router: Router) { }

  ngOnInit() {
    this.manicures = this.manicureService.getManicures();
  }
  verManicure(idx: number) {
  this.router.navigate(['/quiero-manicure', idx]);


  }

}
