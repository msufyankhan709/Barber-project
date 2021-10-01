import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface users {
  Name: string;
  Title: string;
  Company: string;
  EmailAddress: any;
  phone:number;
}

const ELEMENT_DATA: users[] = [
  {Name: "Rodney ", Title: 'Hair specialist', Company:"Barber", EmailAddress: "support@barber.com",phone:3026366722},
  {Name: "Jason", Title: 'Hair specialist', Company:"Barber", EmailAddress: "support@barber.com",phone:3026366722} ,
  {Name: "Nelson", Title: 'Hair specialist', Company:"Barber", EmailAddress: "support@barber.com",phone:3026366722} ,
  {Name: "Inverness", Title: 'Hair specialist', Company:"Barber", EmailAddress: "support@barber.com",phone:3026366722}  ,
  {Name: "Fergus", Title: 'Hair specialist', Company:"Barber", EmailAddress: "support@barber.com",phone:3026366722} , 
  {Name: "Ement", Title: 'Hair specialist', Company:"Barber", EmailAddress: "support@barber.com",phone:3026366722},
  {Name: "Peppertrout", Title: 'Hair specialist', Company:"Barber", EmailAddress: "support@barber.com",phone:3026366722},
  {Name: "Niles", Title: 'Hair specialist', Company:"Barber", EmailAddress: "support@barber.com",phone:3026366722},
  {Name: "Stieve", Title: 'Hair specialist', Company:"Barber", EmailAddress: "support@barber.com",phone:3026366722},
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BarberProject';

  displayedColumns: string[] = ['select','Name','Title','Company','EmailAddress','phone'];
  dataSource = new MatTableDataSource<users>(ELEMENT_DATA);
  selection = new SelectionModel<users>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: users): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Name+ 1}`;
  }
}
