import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `Angular ${VERSION.full} is rad!`;
  clicked = false;

  handleClick() {
    this.clicked = true;
  }

}
