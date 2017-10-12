$(document).ready(function(){
	var trivTime = 0;
	var correct = 0;
	var wrong = 0;
	var qACount = 1;
	var timer = '';


	var questions = {
	1:{
		ques: "Who is Iron Man?",
		choices: ["Tony Stark", "Arnold Palmer", "Michael Jordan"],
		name: "ironMan",
		ans: "Tony Stark",
	},
	2:{
		ques: "Who is Steve Rogers?",
		choices: ["Wolverine", "The Incredible Hulk", "Captain America"],
		name: "captAmerica",
		ans: "Captain America",
	},
	3:{
		ques: "What was the first cover date for The Fantastic 4?",
		choices: ["1961", "1971", "1981"],
		name: "fantasticFour",
		ans: "1961",
	},
	4:{
		ques: "Who created Marvel?",
		choices: ["Stan Lee", "Malcolm Wheeler-Nicholson", "Martin Goodman"],
		name: "marvelCreator",
		ans: "Martin Goodman",
	}
}

	//start button to display questions
	var start = function(){
		$('#startButton').on("click", function(){
			$('.trivSection').empty();
			createQuestions();
		});
	}

	var createQuestions = function(){
		timerStart();

		var questionDisplay = questions[qACount]['ques'];

		var newDiv = $('<div>');

		newDiv.addClass("question");
		newDiv.text(question);
		$('.trivSection').append(newDiv);
		createAnswers();
	}

	var createAnswers = function(){
		var answerLength = questions[QACount]['choices'].length;
		for(var i = 0; i < answerLength; i++){
			var answers = questions[qACount]['choices'][i];
			var newBtn = $('<button>');
			newBtn.addClass('answers redBtn');
			newBtn.attr('data-type', choices);
			newBtn.text(answers);
			$('.trivSection').append(newBtn);
		}
	}

	var timerStart = function(){ 
		$('.timerSection').empty();
		//Sets time to 10
		trivTime = 100;
		//Progress Bar
		var timeTag = $('<div>');
		timeTag.addClass('time');
		timeTag.addClass('progress');
		var progressBar = $('<div>');
		progressBar.addClass('progress-bar');
		progressBar.width(trivTime + '%');

		$('.timerSection').append(timeTag);
		$('.time').append(progressBar);	
		//Decrements Time
		timer = setInterval(timeDecrement,100);
}
});