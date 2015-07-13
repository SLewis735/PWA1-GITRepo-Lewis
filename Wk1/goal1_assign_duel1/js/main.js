/*
Name: Steven Lewis
Date: July 12, 2015
Assignment: Goal 1 Duel 1
*/

(function(){
// Beginning state on the console log
console.log("FIGHT");

// player name (This is the name of the players in the game)
var playerOneName = ("Spiderman");
var playerTwoName = ("Batman");

// player health (This is the health of each player after each round)
var playerOneHealth = 100;
var playerTwoHealth = 100;

// player damage (This is the random amount of damage each player sustain)
var playerOneDamage = 15;
var playerTwoDamage = 15;

//This is the variable for round incrementing
var round = 1;

//This is beginning for the function for the fight
function fight(){
    console.log ('in the fight function');

    alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);
    // the "for" element setting up a loop
    for(var i = 0; i < 10; i++){

        //random formula is - Math.floor(Math.random() * (max - min) _ min);
        // list of variables for formulating the math function
        var minDamage1 = playerOneDamage * .5;
        var minDamage2 = playerTwoDamage * .5;
        var f1 = Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1);
        var f2 = Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2);

        playerOneHealth-=f1;
        playerTwoHealth-=f2;

        console.log(playerOneName+":"+playerOneHealth+""+playerTwoName+":"+playerTwoHealth);

        // The variable and if else statement for determining how a player wins the fight
        var results = winnerCheck();
        console.log(results);

        if(results === "no winner"){
            round++;
            alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth);
        }else{
            alert(results);
            break;
        };
    };
};
    // the function for displaying the results of the winner of the fight
function winnerCheck(){
    console.log("in winnerCheck FN");

    var result = "no winner";
    if (playerOneHealth<1 && playerTwoHealth<1){
        result = "You both die";
    }else if(playerOneHealth<1){
        result =playerTwoName+ "WINS!!!"
    }else if(playerTwoHealth<1){
        result =playerTwoName+ "WIN!!!"
    };

    return result;
};

/***** The program gets started below *******/
console.log('program starts');
fight();

})();


