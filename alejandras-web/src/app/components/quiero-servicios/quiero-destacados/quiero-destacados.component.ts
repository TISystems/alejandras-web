import { Component } from '@angular/core';
import { DestacadosService } from '../../../services/destacados.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from "../../../services/http.service";

@Component({
  selector: 'app-quiero-destacados',
  templateUrl: './quiero-destacados.component.html',
  styleUrls: ['./quiero-destacados.component.css']
})
export class QuieroDestacadosComponent  {

  galeriaDestacados: any = {};
  loading = false;
  buttionText = "Submit";
  correo="alejandrsalon@gmail.com";

  constructor(private activatedRoute: ActivatedRoute, private destacadosService: DestacadosService,
              private modalService: NgbModal, private http: HttpService ) {

    this.activatedRoute.params.subscribe(params => {

      this.galeriaDestacados = this.destacadosService.getDestacado(params['id']);

    });
   }
   register(forma: NgForm) {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      nombre: forma.value.nombre,
      telefono: forma.value.telefono,
      servicio: 'Depilación de ' + this.galeriaDestacados.nombre,
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
