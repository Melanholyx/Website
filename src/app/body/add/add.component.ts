import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContainerService } from 'src/app/container.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private serv : ContainerService, private dialog: MatDialog) { }

  addForm = new FormGroup({
    title: new FormControl('',[Validators.required, Validators.minLength(5)]),
    link: new FormControl('',Validators.required),
    desc: new FormControl('', [Validators.required, Validators.maxLength(400)])
  });


  

  onSubmit(){
    // findmaxID ვიპოვოთ მაქსიმალური ID მასივის ობიექტებიდან. რათა ფრონტში ახალი გმირის დამატების დროს ავიღოთ მაქსიმუმ ID და დავამატოთ + 1
    let max = 0;
    this.serv.arr.forEach(element => 
      { if (element.id > max) {
        max = element.id;
      }});
      // end of findmaxID
      console.log(this.addForm.controls['desc'])
    this.serv.arr.push({id : max + 1, name: this.addForm.controls['title'].value, image: this.addForm.controls['link'].value, desc: this.addForm.controls['desc'].value})
    this.dialog.closeAll();

  };

  ngOnInit(): void {
  }

}