
var $columns = $('.col');
var $winningColumns = $('.c2,.c3');
var $rings;
var $c1 = $('.c1');
var $c2 = $('.c2');
var $moves = $('.moves');
var $reset = $('#reset');
var $levelButton = $('#levelButton');
var $arrows = $('.arrow');

var game = {

    rings: 4,
    moves: 0,
    active: false,
    originCol: {},
    targetCol: {},
    moverId: 0,
    targetId: 0,
    over: true,

    registerEvents: function() {

        // clicking on a colum
        $columns.on('click', function(){
            if (!game.over){
                game.click($(this));
            }
        });
    
        // hovering over a column
        $('.col').mouseenter(function(){
            if (!game.active) {
                $(this).children('.ring').eq(0).addClass('hover');
            } else {
                game.moveRing($(this));
            }
        });
    
        // leaving a column
        $('.col').mouseleave(function(){
            $(this).children('.ring').eq(0).removeClass('hover');
        });
    
        // clicking pick level
        $levelButton.on('click', function() {
            game.displayLevelSelector();
        })
    
    
        // clicking reset
        $reset.on('click', function() {
            game.reset();
        });
    
        // clicking level-select arrows
        $c2.on('click', '.arrow', function(){
            game.selectLevel($(this));
        });
    }
}