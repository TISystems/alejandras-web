import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepilacionService } from '../../../services/depilacion.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HttpService } from "../../../services/http.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-quiero-depilacion-cera-tradicional',
  templateUrl: './quiero-depilacion-cera-tradicional.component.html',
  styleUrls: ['./quiero-depilacion-cera-tradicional.component.css']
})
export class QuieroDepilacionCeraTradicionalComponent  {

  loading = false;
  buttionText = "Submit";
  depilacion: any = {};
  correo="alejandrsalon@gmail.com";

  constructor(private activatedRoute: ActivatedRoute, private depilacionService: DepilacionService,
              private modalService: NgbModal, private http: HttpService ) {

    this.activatedRoute.params.subscribe(params => {

      this.depilacion = this.depilacionService.getDepilacion(params['id']);


    });
   }
   register(forma: NgForm) {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      nombre: forma.value.nombre,
      telefono: forma.value.telefono,
      servicio: 'Depilación de ' + this.depilacion.nombre,
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
