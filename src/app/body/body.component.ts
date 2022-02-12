import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ContainerService } from '../container.service';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { arr } from '../models/array';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  
  constructor(private serv : ContainerService, private dialog : MatDialog) { }

 



  ngOnInit(): void {


  }

}
