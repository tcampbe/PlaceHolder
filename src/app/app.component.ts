import { Component, OnInit, ViewChild } from '@angular/core';
import { PlaceHolderService } from './services/place-holder.service';
import { MatPaginator } from '@angular/material/paginator/typings/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'PlaceHolder';
  dataSource;
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];


  constructor(
    public placeHolderService: PlaceHolderService,
  ) { };

  async ngOnInit(): Promise<void> {
    this.dataSource = await this.placeHolderService.get()
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }
}
