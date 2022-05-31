// variables so that we can track how bad my luck is
var wins = 0;
var losses = 0;
var ties = 0;
function playCraps(){
    console.log("Playing Craps");
    // first die
    var die1 = 6 * Math.random();
    // rounding it so it's not a decimal
    var roundDie1 = Math.ceil(die1);
    // put these numbers into the console
    console.log("The random number is: " + die1);
    console.log("The rounded number is: " + roundDie1);
    // put the rounded number on the page
    document.getElementById("die1Res").innerHTML = "Die 1 is: " + roundDie1;
    // we do it again
    var die2 = 6 * Math.random();
    var roundDie2 = Math.ceil(die2);
    console.log("The random number is: " + die2);
    console.log("The rounded number is: " + roundDie2);
    document.getElementById("die2Res").innerHTML = "Die 2 is: " + roundDie2;
    // add em up
    var sum = roundDie1 + roundDie2;
    //put that into the log
    console.log("The sum of the numbers is: " + sum);
    // show the sum on the page 
    document.getElementById("sumRes").innerHTML = "The sum is: " + sum;
    // check if the rolls lose, win, or tie, and put that onto the page
    if (sum == 7 || sum == 11) {
        losses++
        document.getElementById("losses").innerHTML = "Losses: " + losses
        document.getElementById("crapsRes").innerHTML = "You lose!";
    } else if(roundDie1 == roundDie2 && roundDie1 % 2 == 0){
        wins++
        document.getElementById("wins").innerHTML = "Wins: " + wins
        document.getElementById("crapsRes").innerHTML = "You win!";
    } else {
        ties++
        document.getElementById("ties").innerHTML = "Ties: " + ties
    document.getElementById("crapsRes").innerHTML = "Tie!";
    }
}