import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ContainerService } from '../../container.service';
import { AddComponent } from '../../body/add/add.component'
import { arr } from '../../models/array';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  arr : arr[] = [];
  arrsiz : arr[] = [];
  itemid : number = 0;
  constructor(private serv : ContainerService, private dialog : MatDialog) { }

  openDialog() {
   this.dialog.open(AddComponent)
  }

  // getInfo(id: any){
  //   this.itemid = id;
  //   this.dialog.open(ViewComponent)
  //   //console.log(this.serv.arr.find(element => element.id == id));

  // }

  onPageChange(event : PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.serv.arr.length){
        endIndex = this.serv.arr.length;
    }
    this.arr = this.serv.arr.slice(startIndex , endIndex);
    window.scrollTo(0, 0);

  }

  ngOnInit(): void {
    this.arrsiz = this.serv.arr;
    this.arr = this.serv.arr;
    this.arr = this.arr.slice(0,6);


  }

}
