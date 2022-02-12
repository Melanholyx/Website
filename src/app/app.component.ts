import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ContainerService } from './container.service';
import { MatDialog } from '@angular/material/dialog';
import { ChangelogComponent } from './features/changelog/changelog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {


  showFiller = false;
    constructor(private dialog : MatDialog){
  
    }


  
  ngOnInit() {
 
  //this.dialog.open(ChangelogComponent)
  }

}