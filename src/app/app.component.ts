import { Component } from '@angular/core';
import { Covid19DataService} from './covid19data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data: string;

  constructor(private dataService: Covid19DataService) {
    this.name = dataService.getData();
  }
}
