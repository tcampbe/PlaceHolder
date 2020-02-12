import { Component, OnInit } from '@angular/core';
import { PlaceHolderService } from './services/place-holder.service';

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

}
