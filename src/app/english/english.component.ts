import { Component, OnInit } from '@angular/core';

import { TextCard } from '../card';
import { EnglishcardsService } from '../englishcards.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {

  length: number;
  card: TextCard;

  constructor(private englishCardsService: EnglishcardsService) { }

  ngOnInit() {
    this.length = this.getLength();
    this.card = this.getCard();
  }

  ngAfterContentInit() {
    window.setTimeout(() => {
      console.log('hello world');
    }, 100);
  }

  counter(): void {
    console.log('hello');
  }

  flipCard(): void {
    let cardContainer = (window.document.getElementsByClassName('card-container'))[0];
    if(cardContainer.classList.contains('flip')) {
      cardContainer.classList.remove('flip');
    } else {
      cardContainer.classList.add("flip");
    }
  }

  getCard(): TextCard {
    let card;

    let id = Math.floor(Math.random()*this.length);

    this.englishCardsService.getCard(id).subscribe(obj => {
      card = obj;
    });

    return card;
  }

  getLength(): number {
    let length;

    this.englishCardsService.getLength().subscribe(obj => {
      length = obj;
    });

    return length;
  }

}
