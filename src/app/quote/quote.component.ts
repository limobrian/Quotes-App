import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  Quotes = [
    new Quote(1, 'J.D. Salinger', 'What really knocks me out is a book that, when you are all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That does not happen much, though', new Date(2019, 7, 7) ),
    new Quote(2, 'Victor Hugo', '“The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves”', new Date(2019, 7, 7) ),
    new Quote(3, 'Albert Einstein ', '“Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”', new Date(2019, 7, 7) ),
    new Quote(4, '-Rob Siltanen', '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.”', new Date(2019, 7, 7) ),

  ]


  toogleDetails(index){
      this.Quotes[index].showDescription =!this.Quotes[index].showDescription;
  }

  addNewQuote(quote){
      let quoteLength = this.Quotes.length;
      quote.id=quote.Length+1
      quote.completeDate = new Date(quote.completeDate)
      this.Quotes.push(quote)

  }

  deleteQuote(isComplete,index){
      if (isComplete){
          let toDelete=confirm(`Are you sure you want to delete ${this.Quotes[index].name}`)
          
          if(toDelete){
              this.Quotes.splice(index,1)
          }
      }
  }


  constructor() { }

  ngOnInit() {
  }

}
