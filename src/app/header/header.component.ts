import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddComponent } from '../body/add/add.component';
import { ContainerService } from '../container.service';
import { LoginComponent } from '../features/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isLoggedIn = false;
  menu = false;
  constructor(private dialog : MatDialog, private serv : ContainerService, private router : Router) { }

  openDialog(){
    this.dialog.open(LoginComponent).afterClosed().subscribe( () => {
      this.isLoggedIn = this.serv.isLoggedIn;
      if (this.isLoggedIn == true){   
        localStorage.setItem('Loggedin', 'true');
        }
    });


  }


  openDialogAdd(){
    this.dialog.open(AddComponent);
  }

  onlogOut(){
    this.serv.isLoggedIn = false;
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/']);

  }
  
  ngOnInit(): void {
    let log = localStorage.getItem('Loggedin');
    if (log == 'true'){
      this.isLoggedIn = true;
    }
  
  }



}
