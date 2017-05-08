import { Component, OnInit } from '@angular/core';
import { QuotesService, Quote } from '../quotes.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss'],
  providers: [QuotesService],
})
export class QuotationsComponent implements OnInit {
  quotes: Observable<Quote[]>;

  constructor(private quoteService: QuotesService) { }

  ngOnInit() {
    this.quotes = this.quoteService.fetch();
  }

}
