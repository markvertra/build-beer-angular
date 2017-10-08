import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-options-page',
  templateUrl: './payment-options-page.component.html',
  styleUrls: ['./payment-options-page.component.css']
})
export class PaymentOptionsPageComponent implements OnInit {
  @Input() order;
  @Output() onStatusChange = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  handleStatusChange() {
    this.onStatusChange.emit('results');
  }
}
