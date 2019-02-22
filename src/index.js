import './styles/game-area.css';
import './styles/cards/cards.css';
import GameArea from './game-area';
import $ from 'jquery';
import Deck from 'deck-of-cards';

var deck;

$(function() {
    var gameArea = new GameArea();
    gameArea.SetBetClickListener($('#inputBet'));
    gameArea.SetPassClickListener($('#inputPass'));
    SetDeck();
});

function SetDeck() {

    deck = new Deck();

    var deckArea = $('#deck');

    var $container = document.getElementById('deck');
    deck.mount($container);

    //var deck = Deck();
    //var deck = cards.Deck();
    //new Cards.Test;
    //var cards = new Cards.Deck();
    //var deck = cards.Deck();
}