$(window).ready(function() {
	var timer = false;
	var	intervalClock;
	var timeout;
	var	gameBreak;
	var gameClock;
	var	userScore = 0;
	var	incorrectGuesses = 0;
	var	questionArray = ["Which of the following is NOT a family in Game of Thrones?",

		"In the first episode of season 1, who accidentally discovers Queen Cersei's secret?", 

		"Who is Robb Stark's mother?",

		"What does Tyrion murder his father with?", 

		"Who is known as The Kingslayer?", 

		"What murders Lady Walda and her child?",

		"Who said this memorable line: You know nothing, Jon Snow?", 

		"What is the name of the ancestral Stark sword that Tywin Lannister oversees the reforging of in the first episode of season 3?",

		"What does Ramsay Bolton do to Theon Greyjoy so that he will call himself 'Reek'?",

		"Who said this memorable line: “Give my regards to the Night’s Watch. I’m sure it will be thrilling. And if it’s not, it’s only for life.”"];

	var	correctAnswerArray = ["Mortensen", "Bran Stark", "Catelyn Stark", "Crossbow", "Jaime Lannister", "Dogs", "Ygritte", "Master of Coin", "Ice", "Tortures him in many ways."];
		
	var	choice2Array = ["Stark", "Arya Starh", "Sansa Stark", "Poison", "Eddard Stark", "Birds of prey", "Lord Commander of the Kingsguard", "Dogs", "Threatens to Kill Himself", "Young Masta"];
		
	var	choice3Array = ["Tyrell", "Joffry Baratheon", "Talisa Stark", "Sword", "Joffrey Baratheon", "White Walkers", "Cersei Lannister", "Master of War", "Drogo", "Threatens to kill Theon baby sister."];
		
	var	choice4Array = ["Bolton", "Tyrion Lannister", "Arya Stark", "Mace", "Sandor Clegane", "Direwolves", "Daenerys Targaryen", "Master of Ships", "Needle", "Asks nicely"];
	
	var i = 0;

	var triviaGame = {
		timeConverter: function(time) {

		    // (mm:ss)
		    var minutes = Math.floor(time / 60);
		    var seconds = time - (minutes * 60);

		    if (seconds < 10) {
		      seconds = "0" + seconds;
		    }

		    return minutes + ":" + seconds;

		 },

		startGame: function() {
			$("#timer").css("display", "initial");
				$("#allOptions").css("display", "initial");
				$("#question").css("display", "initial");
				$(".choice").css("display", "initial");
				$("#gameDone").css("display", "none");
				$('#resetGame').css("display", "none");
			triviaGame.start();
		},

		start: function () {
			$("#start").on("click", function() {	
				triviaGame.startInterval();
			});
		},

		startInterval: function () {
			gameClock=15;
			timer = true;

			 intervalClock = setInterval(function() {
				gameClock-=1;
				$("#timerDisplay").text(triviaGame.timeConverter(gameClock));
				if (gameClock<=0) {
					timer = false;
					incorrectGuesses++;
				};
			}, 1000);
			triviaGame.questionLoop();
			triviaGame.pickAnswer();
			},

		questionLoop: function() {
			if (i < questionArray.length) {
				$("#question").text(questionArray[i]);
				$("#choice1").text(correctAnswerArray[i]);
				$("#choice2").text(choice2Array[i]);
				$("#choice3").text(choice3Array[i]);
				$("#choice4").text(choice4Array[i]);
				console.log("The value of i is: " + i);
			} else {
				timer=false;
				$("#timer").css("display", "none");
				$("#allOptions").css("display", "none");
				$("#question").css("display", "none");
				$(".choice").css("display", "none");
				$("#gameDone").css("display", "initial");
				$("#correctCount").text(userScore);
				$("#incorrectCount").text(incorrectGuesses);
				$("#resetGame").css("display", "initial");
			$('#resetButton').on('click', function() {
				gameClock = 15;
				timerRunning = true;
				userScore = 0;
				incorrectGuesses = 0;
				i=0;
				triviaGame.startGame();
				
			});				
			};
			
		},

		pickAnswer: function() {
			$(".choice").on('click', function () {
				timer = false;
				console.log($(this).text());
				var userSelection =  $(this).text();
					if(userSelection === correctAnswerArray[i]){
										userScore++;
						$("#allOptions").css("display", "none");
						$("#correctDiv").css("display", "initial")
					function timeout() {
						$("#correctDiv").css("display", "none");
						$("#allOptions").css("display", "initial");
					};
						gameBreak = setTimeout(timeout, 1000);
						i++;
						gameClock = 15;
						triviaGame.questionLoop();
					}
					else {
						timer = false;
						incorrectGuesses++;
						$("#correctAnswer").text(correctAnswerArray[i]);
						$("#allOptions").css("display", "none");
						$("#incorrectDiv").css("display", "initial");
							function timeout() {
							$("#incorrectDiv").css("display", "none");
							$("#allOptions").css("display", "initial");
						};
						 gameBreak = setTimeout(timeout, 1000);
						i++;
						gameClock = 15;
						triviaGame.questionLoop();						
					};


			});

			// $(".choice").on("click", function() {

			// });
		},



		
	};
triviaGame.startGame();
});