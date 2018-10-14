
var words = [
    "jotaro",
    "joseph",
    "josuke",
    "jonathan"
]
var word = words[Math.floor(Math.random()* words.length)];

var remainG = word.length + 3;

var guessA = [];
for(var i=0;i<word.length;i++){
    guessA[i] = "_";
}

$(document).ready(function(){
    // Player input
  function display(){
      $("#game").append(guessA);
  }

  function answer(){
      for(var i=0;i<word.length;i++){
          alert("enter a letter");
          var guess = prompt("Guess a letter, or click Cancel to stop playing.");
          if (guess === null) {
            break;
            } 
            else if (guess.length !== 1) {
            alert("Please enter a single letter.");
            } 
            else {
                for (var j = 0; j < word.length; j++) {
                     if (word[j] === guess){
                        guessA[j] = guess;
                        remainG--;
                        alert("You have "+remainG+" letters");
                     }
                    }
            }
      }
  }
  display();
  answer();



});


