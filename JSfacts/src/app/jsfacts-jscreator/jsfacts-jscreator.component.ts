import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsfacts-jscreator',
  templateUrl: './jsfacts-jscreator.component.html',
  styleUrls: ['./jsfacts-jscreator.component.scss']
})
export class JsfactsJScreatorComponent implements OnInit {
  
  clicked = false;

  handleClick() {
    this.clicked = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
