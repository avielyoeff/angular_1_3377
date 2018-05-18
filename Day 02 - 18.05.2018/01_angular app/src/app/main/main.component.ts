import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  PizzaArray = [1, 2];

  onPizzaClick(): void {
    this.PizzaArray.push(this.PizzaArray.length + 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
