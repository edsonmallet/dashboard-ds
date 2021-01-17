import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exone',
  templateUrl: './exone.component.html',
  styleUrls: ['./exone.component.css']
})
export class ExoneComponent implements OnInit {

  constructor() { }

  value: string = ''
  valuesList: number[] = []
  orderedList: number[] = []

  checkValue(value: string) {
    let val: number = parseFloat(value)
    return val >= -1000 && val <= 1000 ? true : false
  }

  onAddList(value: string) {
    let val: number = parseFloat(value)
    if (val >= -1000 && val <= 1000) {
      this.valuesList.push(val)
      this.orderedList.push(val)
      this.orderedList.sort((firstElement, secondeElement) => firstElement - secondeElement)
      this.orderedList = this.orderedList.filter((element, index, arr) => arr.indexOf(element) === index)
      this.value = ''
    }
  }

  ngOnInit(): void {
  }

}
