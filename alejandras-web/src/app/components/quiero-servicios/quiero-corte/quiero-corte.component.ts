import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CorteService } from '../../../services/corte.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HttpService } from "../../../services/http.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-quiero-corte',
  templateUrl: './quiero-corte.component.html',
  styleUrls: ['./quiero-corte.component.css']
})
export class QuieroCorteComponent {

  loading = false;
  buttionText = "Submit";
  corte: any = {};
  correo="contacto@alejandras.cl";

  constructor(private activatedRoute: ActivatedRoute, private corteService: CorteService,
    private modalService: NgbModal, private http: HttpService ) {

this.activatedRoute.params.subscribe(params => {

this.corte = this.corteService.getCorte(params['id']);


});
}
register(forma: NgForm) {
this.loading = true;
this.buttionText = "Submiting...";
let user = {
nombre: forma.value.nombre,
telefono: forma.value.telefono,
servicio: this.corte.nombre,
email: this.correo
}
console.log('nombnre usuario' + user);
this.http.sendMailContacto("https://alejandras.us-3.evennode.com/sendmailservicio", user).subscribe(
data => {
let res:any = data;
console.log(
`${user} is successfully register and mail has been sent and the message id is ${res.messageId}`
);
},
err => {
console.log(err);
this.loading = false;
this.buttionText = "Submit";
},() => {
this.loading = false;
this.buttionText = "Submit";
}
);
}

verMensaje(modal) {

this.modalService.open(modal);

}
guardar(forma: NgForm) {

console.log(forma);
}

}
