import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HttpService } from "../../services/http.service";
import { FormControl, Validators } from "@angular/forms";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  loading = false;
  buttionText = "Submit";

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  constructor(private http: HttpService, private modalService: NgbModal) { }

  ngOnInit() {

    }
    register(forma: NgForm) {
      this.loading = true;
      this.buttionText = "Submiting...";
      let user = {
        name: forma.value.nombre,
        email: this.emailFormControl.value,
        asunto: forma.value.asunto,
        mensaje: forma.value.mensaje,
      }
      this.http.sendMailContacto("http://128.168.41.181:3000/sendmailcontacto", user).subscribe(
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
