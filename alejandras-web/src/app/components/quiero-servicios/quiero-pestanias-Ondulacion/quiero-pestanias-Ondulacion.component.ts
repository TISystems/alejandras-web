import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PestaniaService } from '../../../services/pestania.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { HttpService } from "../../../services/http.service";

@Component({
  selector: 'app-quiero-pestanias',
  templateUrl: './quiero-pestanias-Ondulacion.component.html',
  styleUrls: ['./quiero-pestanias-Ondulacion.component.css']
})
export class QuieroPestaniasOndulacionComponent  {

  galeriaOndulacion: any = {};
  loading = false;
  buttionText = "Submit";
  manicure: any = {};
  correo="alejandrsalon@gmail.com";

  constructor(private activatedRoute: ActivatedRoute, private galeriaServiceOndulacion: PestaniaService,
              private modalService: NgbModal,private http: HttpService ) {

    this.activatedRoute.params.subscribe(params => {

      this.galeriaOndulacion = this.galeriaServiceOndulacion.getPestania(params['id']);

    });
   }
   register(forma: NgForm) {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      nombre: forma.value.nombre,
      telefono: forma.value.telefono,
      servicio: this.galeriaOndulacion.nombre,
      email: this.correo
    }
    console.log('nombnre usuario' + user);
    this.http.sendMailContacto("http://128.168.41.181:3000/sendmailservicio", user).subscribe(
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
