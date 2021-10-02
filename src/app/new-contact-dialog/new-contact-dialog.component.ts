import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.css']
})
export class NewContactDialogComponent implements OnInit {

  constructor(private matdialogrf:MatDialogRef<NewContactDialogComponent>) { }

  img: '../../assets/face.png' = "../../assets/face.png";
 ngOnInit(): void {
  }
  onselect(event:any){
    if (event.target.file){
      var reader= new FileReader();
      reader.readAsDataURL(event.target.file[0]);
      reader.onload=(event:any)=>{
        this.img=event.target.result;
      }

    }
  }
  
 save(){}
 
 cancel(){
  this.matdialogrf.close(NewContactDialogComponent)
 }


}
