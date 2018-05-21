import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

import { TextCard } from './card';
import { ENGLISHCARDS } from './english.cards';

@Injectable({
  providedIn: 'root'
})
export class EnglishcardsService {
  cards: Observable<TextCard[]>;

  constructor(private messageService: MessageService) {
    this.cards = this.getAllCards();
  }

  getCard(id): Observable<TextCard> {
    console.log("englishcards.service", id);
    let card;
    this.cards.subscribe(cardList => {
      card = cardList[id];
    })
    return of(card);
  }

  getLength(): Observable<number> {
    console.log(this.cards);
    this.messageService.add('EnglishCards: returned total number of cards');
    let length;
    this.cards.subscribe(cardList => {
      length = cardList.length;
    });
    return of(length);
  }

  getAllCards(): Observable<TextCard[]> {
    this.messageService.add('EnglishCards: fetched all cards');
    return of(ENGLISHCARDS);
  }
}
