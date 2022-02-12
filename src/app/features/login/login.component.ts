import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContainerService } from 'src/app/container.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private serv : ContainerService, private dialog : MatDialog) { }

  loginForm = new FormGroup({
    username : new FormControl('', Validators.required),
    password: new FormControl('',  Validators.required),
  });


    onSubmit(){
      if (this.loginForm.valid == true) {
        this.serv.isLoggedIn = true;
        this.dialog.closeAll();
      }
    }


  ngOnInit(): void {
  
  }

}
