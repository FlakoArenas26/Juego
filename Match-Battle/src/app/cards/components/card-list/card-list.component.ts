import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  cards: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get<any[]>('http://localhost:3000/cards').subscribe(cards => {
      this.cards = cards;
    });
  }

}
