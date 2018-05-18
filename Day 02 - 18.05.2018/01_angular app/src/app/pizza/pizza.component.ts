import { Component, OnInit } from '@angular/core';
import { Top } from '../toppings.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  classCounter: number;
  static counter: number = 0;

  toppings:Top[] = [
    new Top("Olives"),
    new Top("Onion"),
    new Top("Corn")
  ];


  updateTop(index){
    this.toppings[index].amount++;
  }
  constructor() {
    this.classCounter = PizzaComponent.counter++;
  }

  ngOnInit() {
  }

}
