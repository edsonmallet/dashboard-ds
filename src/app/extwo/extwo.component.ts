import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-extwo',
  templateUrl: './extwo.component.html',
  styleUrls: ['./extwo.component.css']
})
export class ExtwoComponent implements OnInit {

  constructor() { }
  operators = new FormControl();
  operatorsList: string[] = ['+', '-', '*', '%']

  valueNumberOne: any
  valueNumberTwo: any
  result: string = ''
  selectedOperator: string = ''

  onSelectOperator() {
    let result: number = 0;

    let valueOne = parseInt(this.valueNumberOne, 2)
    let valueTwo = parseInt(this.valueNumberTwo, 2)

    switch (this.selectedOperator) {
      case '+':
        result = valueOne + valueTwo;
        break;
      case '-':
        result = valueOne - valueTwo;
        break;
      case '*':
        result = valueOne * valueTwo;
        break;
      case '%':
        result = valueOne % valueTwo;
        break;
    }
    this.result = result.toString(2)
  }

  ngOnInit(): void { }

}
