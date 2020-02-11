import { Component } from '@angular/core';
import { PlaceHolderService } from './services/place-holder.service';
import { Config } from './models/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PlaceHolder';
  public dataValues: object;
  public config: Config;

  constructor(
    public placeHolderService: PlaceHolderService,
  ) { };

  showConfig() {
    this.placeHolderService.getConfig()
      .subscribe((data: Config) => this.dataValues = data);
  }
}
