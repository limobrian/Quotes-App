import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'
import { QuoteDetailsComponent } from '../quote-details/quote-details.component';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0, "", "", new Date());

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
      this.addQuote.emit(this.newQuote)
  }

  constructor() { }

  ngOnInit() {
  }

}
