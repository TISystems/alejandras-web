import { Component, OnInit } from '@angular/core';
import { TratamientoFacialService } from '../../../services/tratamiento-facial.service';
import { ActivatedRoute } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { HttpService } from "../../../services/http.service";

@Component({
  selector: 'app-quiero-tratamiento-facial',
  templateUrl: './quiero-tratamiento-facial.component.html',
  styleUrls: ['./quiero-tratamiento-facial.component.css']
})
export class QuieroTratamientoFacialComponent  {


  loading = false;
  buttionText = "Submit";
  tratamientoFacial: any = {};
  correo="virpeza91@gmail.com";

  constructor(private activatedRoute: ActivatedRoute, private tratamientoFacialService: TratamientoFacialService,
              private modalService: NgbModal, private http: HttpService ) {

    this.activatedRoute.params.subscribe(params => {

      this.tratamientoFacial = this.tratamientoFacialService.getTratamientoFacial(params['id']);

    });
   }
   register(forma: NgForm) {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      nombre: forma.value.nombre,
      telefono: forma.value.telefono,
      servicio: 'Tramiento Corporal ' + this.tratamientoFacial.nombre,
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

  console.log(forma)
}

}
