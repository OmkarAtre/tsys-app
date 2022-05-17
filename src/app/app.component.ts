import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';

  watch:number=0;

  login()
  {
    this.watch=1;
  }

  register()
  {
    this.watch=2;
  }
}
