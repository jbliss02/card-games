import $ from 'jquery';

export default class {

    SetBetClickListener(element) {
        $(element).on('click', function() {
            console.log('bet');
        });
    }

    SetPassClickListener(element) {
        $(element).on('click', function() {
            console.log('pass');
        });
    }


}