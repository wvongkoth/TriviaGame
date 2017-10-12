$(document).ready(function(){
	var questions = [{
		ques: "Who is Iron Man?",
		choices: ["Tony Stark", "Arnold Palmer", "Michael Jordan"],
		name: "ironMan",
		ans: "Tony Stark",
		divClass: ".ironMan"
	},
	{
		ques: "Who is Steve Rogers?",
		choices: ["Wolverine", "The Incredible Hulk", "Captain America"],
		name: "captAmerica",
		ans: "Captain America",
		divClass: ".captAmerica",
	},
	{
		ques: "What was the first cover date for The Fantastic 4?",
		choices: ["1961", "1971", "1981"],
		name: "fantasticFour",
		ans: "1961",
		divClass: ".fantasticFour",
	},
	{
		ques: "Who created Marvel?",
		choices: ["Stan Lee", "Malcolm Wheeler-Nicholson", "Martin Goodman"],
		name: "marvelCreator",
		ans: "Martin Goodman",
		divClass: ".marvelCreator",
	}
]

	var labels = ["first", "second", "third"];
	//start button to display questions
	var startGame = $("#startButton").on('click', function(){
		$(this).parent().hide();
		$('.container').show();
	});

});