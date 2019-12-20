/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = null;

/*
Adds a click event listener to the "Start Game" button which creates a new Game object and starts the
game by calling the startGame() method. 
*/
$('#btn__reset').on('click', function() {
    game = new Game();
    game.startGame();
});

/*
Adds click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls 
the handleInteraction() method on the Game object.
*/
$('.key').on('click', function(e) {
    game.handleInteraction(e.target);
});

//Lets players use their physical computer keyboard to enter guesses.
$(window).keydown(function(e) {
    let clickedButton = null;
    $('.key').each(function() {
            if ($(this).text() === e.key) {
                clickedButton = $(this)[0];
            }
        })
    if (e.which > 64 && e.which < 91) {
        game.handleInteraction(clickedButton);
    }
});
