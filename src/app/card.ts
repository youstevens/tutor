export class Card {
  type: string;

  constructor(type) {
    this.type = type;
  }
}

export class TextCard extends Card {
  text: string;

  constructor(text) {
    super('text');
    this.text = text;
  }
}
