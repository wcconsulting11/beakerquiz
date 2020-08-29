function populate() {
    if(quiz.isEnded()) {
        showScores();
    } 
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        
        //show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Results</h1>";
    gameOverHTML += "<h2 id='score'>Your Scores:" + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

//create questions
var questions = [
    new Question("What is the gas essential to breathe?",["Methane","Helium","Oxygen","Nitrogen"], "Oxygen"),
    new Question("What is the Earth's only natural satellite?",["Sun","Mars","Venus","Moon"],"Moon"),
    new Question("Name three states of matter?",["Solids, liquids, gas","Helium, methane, nitrogen","Earth, air, water","What is matter?"],"Solids, liquids, gas"),
    new Question("How many bones are in the human body?",["884","1","206","2000"],"206"),
    new Question("Name the middle layer of planet Earth?",["Rock","Mantle","Middle Earth","Mordor"],"Mantle")
];

//create quiz
var quiz = new Quiz(questions);

//display quiz
populate();
