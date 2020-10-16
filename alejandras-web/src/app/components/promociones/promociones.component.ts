import { Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HttpService } from "../../services/http.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent {

  loading = false;
  prueba = false;
  probandocherry=true;

  buttionText = "Submit";
  correo="contacto@alejandras.cl";


  constructor(private http: HttpService, private modalService: NgbModal) { }
  register(forma: NgForm) {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      name: forma.value.nombre,
      telefono: forma.value.telefono,
      servicio: 'ALISADO/BOTOX + CORTE GRATIS',
      email: this.correo
    }

    this.http.sendMailContacto("https://alejandras.us-3.evennode.com/sendmailpromocion", user).subscribe(
      data => {
        let res:any = data;
        console.log(
          `${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
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
  register1(forma: NgForm) {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      name: forma.value.nombre,
      telefono: forma.value.telefono,
      servicio: 'ESMALTADO PERMANENTE 10.000',
      email: this.correo
    }

    this.http.sendMailContacto("https://alejandras.us-3.evennode.com/sendmailpromocion", user).subscribe(
      data => {
        let res:any = data;
        console.log(
          `${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
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

}
