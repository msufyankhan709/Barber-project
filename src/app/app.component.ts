import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewContactDialogComponent } from './new-contact-dialog/new-contact-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BarberProject';

  opendialog(){
    this.dialog.open(NewContactDialogComponent)
  }
   
  constructor(public dialog:MatDialog){}
 
}
