import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HttpService } from "../../../services/http.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loading = false;
  buttionText = "Submit";
  correo="virpeza91@gmail.com";

  telefonoFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(9)
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);
  servicioFormControl = new FormControl("", [
    Validators.required
  ]);




  constructor(private http: HttpService, private modalService: NgbModal) { }

  ngOnInit() {

    }
    register() {
      this.loading = true;
      this.buttionText = "Submiting...";
      let user = {
        name: this.nameFormControl.value,
        telefono: this.telefonoFormControl.value,
        servicio: this.servicioFormControl.value,
        email: this.correo
      }
      this.http.sendMailContacto("http://localhost:3000/sendmailreserva", user).subscribe(
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
