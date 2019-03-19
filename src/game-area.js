import $ from 'jquery';
import Game from './game';

export default class {

    SetBetClickListener(element, game) {
        $(element).on('click', function() {
            console.log('bet');
            game.GetDeck().fan();
        });
    }

    SetPassClickListener(element, game) {
        $(element).on('click', function() {
            console.log('pass');
            game.GetDeck().fan();
        });
    }


}