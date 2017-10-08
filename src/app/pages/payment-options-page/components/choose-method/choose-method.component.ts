import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choose-method',
  templateUrl: './choose-method.component.html',
  styleUrls: ['./choose-method.component.css']
})
export class ChooseMethodComponent implements OnInit {
  @Output() onPayment = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  handlePayment() {
    this.onPayment.emit("results");
  }

}
