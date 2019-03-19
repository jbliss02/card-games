// import './styles/game-area.css';
// import './styles/cards/cards.css';
// import GameArea from './game-area';
//import $ from 'jquery';
// import Deck from 'deck-of-cards';
// import Game from './game';

var game;

function Test() { console.log('test'); }

// $(function() {
//     // var that = this;

//     // var gameArea = new GameArea();
//     // SetDeck(that.game);
//     // gameArea.SetBetClickListener($('#inputBet'), that.game);
//     // gameArea.SetPassClickListener($('#inputPass'), that.game);
//     this.game = 22;
// });

function SetDeck(game) {

    game = new Game(new Deck());
    game.InitialiseDeck();

    var $container = document.getElementById('deck');
    game.GetDeck().mount($container);
    

}