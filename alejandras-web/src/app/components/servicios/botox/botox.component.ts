import { Component, OnInit } from '@angular/core';
import { BotoxService } from '../../../services/botox.service';
import { InterfacePestania } from '../../../interface/interfacePestania';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botox',
  templateUrl: './botox.component.html',
  styleUrls: ['./botox.component.css']
})
export class BotoxComponent  {

  galeriasBotox: InterfacePestania[] = [];

  constructor(private botoxService: BotoxService,
              private router: Router) { }

  ngOnInit() {
    this.galeriasBotox = this.botoxService.getBotoxs();
  }
  verBotox(idx: number) {
  this.router.navigate(['/quiero-botox', idx]);
  }


}
