import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LavadoService } from '../../../services/lavado.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HttpService } from "../../../services/http.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-quiero-lavado',
  templateUrl: './quiero-lavado.component.html',
  styleUrls: ['./quiero-lavado.component.css']
})
export class QuieroLavadoComponent  {

  loading = false;
  buttionText = "Submit";
  lavado: any = {};
  correo="virpeza91@gmail.com";

  constructor(private activatedRoute: ActivatedRoute, private lavadoService: LavadoService,
              private modalService: NgbModal, private http: HttpService ) {

    this.activatedRoute.params.subscribe(params => {

      this.lavado = this.lavadoService.getLavado(params['id']);


    });
   }
   register(forma: NgForm) {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      nombre: forma.value.nombre,
      telefono: forma.value.telefono,
      servicio: this.lavado.nombre,
      email: this.correo
    }
    console.log('nombnre usuario' + user);
    this.http.sendMailContacto("http://localhost:3000/sendmailservicio", user).subscribe(
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
