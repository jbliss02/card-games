import Deck from 'deck-of-cards';

export default class {

    constructor(deck) { this.deck = deck; }

    InitialiseDeck() {
        this.deck = new Deck();
    }
    
    GetDeck() {
        return this.deck;
    }


}

