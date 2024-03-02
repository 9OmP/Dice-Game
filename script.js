function randDiceNumberGenerator() {
    // This is a simple random number generator for dice numbers. It returns a random whole number between  1 and 6 (inclusive).
// Generates a random number between 1 and the parameter passed to the function.
    return Math.floor((Math.random() * 6)+1);
}



function showDice() {
    var n1 = randDiceNumberGenerator(); // Randomly generate a number between 1 and 6
    console.log(n1 + " is the first generated random number");
    document.querySelector('.img1').src="images/dice"+n1+".png";

    var n2 = randDiceNumberGenerator();
    console.log(n2 + " is the second generated random number");
    var element2 = document.querySelector('.img2').src="images/dice"+n2+".png";

    if (n1>n2){
        //change text in container class element to 'player 1 wins'
        document.querySelector(".winner").textContent="🚩Player 1 Wins!";
         } else if (n1<n2) {
             //change text in container class element to 'player 2 wins'
            document.querySelector(".winner").textContent="Player 2 Wins!🚩";
         } else{
             //If both dice have the same value, it will re-roll
             console.log("It was a tie! Now Re-rolling");
             showDice();
         }
}

showDice();


