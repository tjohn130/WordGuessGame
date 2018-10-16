$(document).ready(function() {
	const words = ["jotaro", "joseph", "josuke", "jonathan","joestar", "dio", "brando","johnny","Higashikata",]
	let word = words[Math.floor(Math.random() * words.length)];
    let guessA = [];
    let wordA = [];
	for (var i = 0; i < word.length; i++) {
		guessA[i] = "_";
	}
    let gameI = $("#game");
    let winCount = 0;
    let lossCount = 0;
    gameI[0].innerHTML = guessA.join('');

	document.addEventListener("keypress", (event) => {
		let keycode = event.keyCode;
		let keyWord = String.fromCharCode(keycode);
		console.log(keyWord);
		for (var i = 0; i < word.length; i++) {
            wordA[i] = word[i];
			if (keyWord === null) {
				break;
			} else {
				for (var j = 0; j < word.length; j++) {
					if (word[j] === keyWord) {
                        guessA[j] = keyWord;
                        console.log(guessA);
                        gameI[0].innerHTML = guessA.join('');
                    }
				}
			}
        }
        if(JSON.stringify(wordA)===JSON.stringify(guessA)){
            winCount++;
            console.log(winCount);
            $(".winbox").text("Wins: "+ winCount);
        }
    });
    $(".answer").on("click",function(){
        word = words[Math.floor(Math.random() * words.length)];
        guessA.length = 0;
        wordA.length = 0;
        for (var i = 0; i < word.length; i++) {
            guessA[i] = "_";
        }
        gameI[0].innerHTML = guessA.join('');
        alert("New Game")
    });

    
});