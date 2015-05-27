//New round begins
var Simon = {
    sequence: [],
    copy: [],
    round: 0,
    active: true,
    mode: 'normal',
function newRound() {
    var sequence = [1,2,1]
    animate(sequence);
}
function animate(sequence) {
    var i = 0
    var interval = setInterval(function)() {
    flashColor(sequence[i]);
        
    i++;
        if (i>=sequence.length) {
            clearInterval(interval);
        }
    }, 600);
}
    
//Timer has to be displayed the whole time
//Timer starts to count down
// global variable timeLeft
// countdown function
    function countDown() {

var count = 60;
var display = document.getElementById("display");


setTimeout(update, 1000);

function update(){
    display.innerHTML = count;
    count--;

    if(count >= 0 ){
        setTimeout(update, 1000);
    }
 
}
    // timeLeft - 1

    // innerHTML = timeLeft
    // setTimeout(countdown function)

    //Set time to be diplayed each second of the round
    //tell the timer to start counting down
    //Timer will reset for each round successfully passed
    //timer will display a message stating that the player has run out of time
    //Chris
    //Simon flashes colors
function flashColor(plate);
        var plate = ('[data-tile=' + plate + ']').addClass('lit');
        window.setTimeout(function() {
        plate.removeClass('lit');
        }, 300);
    }
    
    //Player must mimic Símon
    //Chris
    //If player successfully mimics Simon, then next round starts, timer resets


    //If player does not successfully mimic Simon, then they go back to square one
    //Chris