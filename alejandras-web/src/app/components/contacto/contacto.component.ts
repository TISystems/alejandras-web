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

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);
  asuntoFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);
  mensajeFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);




  constructor(private http: HttpService, private modalService: NgbModal) { }

  ngOnInit() {

    }
    register() {
      this.loading = true;
      this.buttionText = "Submiting...";
      let user = {
        name: this.nameFormControl.value,
        email: this.emailFormControl.value,
        asunto: this.asuntoFormControl.value,
        mensaje: this.mensajeFormControl.value
      }
      this.http.sendMailContacto("http://localhost:3000/sendmailcontacto", user).subscribe(
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
