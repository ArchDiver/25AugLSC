import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsfacts-home',
  templateUrl: './jsfacts-home.component.html',
  styleUrls: ['./jsfacts-home.component.scss']
})
export class JsfactsHomeComponent implements OnInit {

  clicked = false;

  constructor() { }

  ngOnInit(): void {
  }

}
