$(document).ready(function() {
	const words = ["jotaro", "joseph", "josuke", "jonathan","joestar", "dio", "brando","johnny","higashikata",]
	let word;
    let guessA = [];
    let wordA;
    let gameI = $("#game");
    let winCount = 0;
    let counter = 0;

    startGame();
    
    function startGame(){
        //Picks a random word from words[]
        word = words[Math.floor(Math.random() * words.length)];
        //set the value for var wordA
        wordA = word;
        console.log(wordA)
        //Resets the guessA[]
        guessA.length = 0;
        //Resets the counter
        counter = 0;
        //Displays the Missing Letters
        fillEmpty();

        alert("Enter any letter to guess the name of the JoJo Character")
    }

    function matchArray(string, array1, array2) {
        var len = array1.length,
        i = 0;

    for (; i < len; i++) {
        //Compares the Array with the String Answer
        if (string.match(array1[i])) {
            console.log("The Letter typed:"+string)
            array2[i] = string;
            console.log(array1,array2)
            displayAnswer(array2);
        }
    }
    return true;

    }
    //Displays Correct Letters
    function displayAnswer(ar){
        gameI[0].innerHTML = ar.join('')
        
        //Compares the Complete Array with the String Answer
        if(JSON.stringify(ar.join('')) === JSON.stringify(wordA)){
            displayWin();
        }

    }
    //Display and Adds to the var wincount
    function displayWin(){
        winCount++;
        console.log(winCount);
        $(".winbox").text("Wins: "+ winCount);
    }
    //Display and Adds to the var losscount
    function displayLoss(){
        lossCount++;
        console.log(lossCount);
        $(".lossbox").text("Losses: "+ lossCount);
    }
    //Resets the word,wordA,guessA[] for new game
    function resetGame() {
        word = words[Math.floor(Math.random() * words.length)];
        console.log(word)
        wordA = word;
        console.log(wordA)
        guessA.length = 0;
        fillEmpty();
        alert("New Game")
    }
    //Diplays the word lenght with Underscores
    function fillEmpty(){
        for (var i = 0; i < word.length; i++) {
            guessA[i] = "_";
        }
        gameI[0].innerHTML = guessA.join('');
    }
    //Key Press Event for keyboard input
	document.addEventListener("keypress", (event) => {
        //var from the keypress 
        let keycode = event.charCode;
        //var from keycode becomes a string
        let keyWord = String.fromCharCode(keycode);
        //Runs matchArray Func
        matchArray(keyWord,word,guessA);

    });
    //Click event for the answer button
    $(".answer").on("click",function(){
        resetGame();
    });

    
});