import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  close(){
    this.dialog.closeAll();
  }

  ngOnInit(): void {
  }

}
