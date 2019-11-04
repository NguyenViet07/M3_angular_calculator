import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcutor',
  templateUrl: './calcutor.component.html',
  styleUrls: ['./calcutor.component.css']
})
export class CalcutorComponent implements OnInit {

  output: number;
  first: number;
  second: number;
  operator = '+';

  onFirstChange(value) {
    this.first = Number(value);
  }

  onSecondChange(value) {
    this.second = Number(value);
  }

  onSelectChange(value) {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
