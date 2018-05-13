$(document).ready(function () {
	console.log("JS is ready");
	var index = 0;
	var countdownTimer = {
		time: 10,
		reset: function () {
			this.time = 10;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function () {
			counter = setInterval(countdownTimer.count, 3000);
		},
		stop: function () {
			clearInterval(counter);
		},
		count: function () {
			countdownTimer.time--;
			console.log(countdownTimer.time);
			//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			} else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$('.answerchoice').hide();
					showScore();
				}
			}
		},
	};

	//Correct and incorrect counters
	var correct = 0;
	var wrong = 0;

	//Question and answer object
	var q1 = {
		question: 'Which two Uiveristy of Texas player have won the heisman trophy?',
		possibleAnswers: ['A. Earl Campbell and Ricky Williams', 'B. Jamal Charles and Ricky Williams', 'C. Colt McCoy and Earl Campbell', 'D. Vince Young and EarlCampbell'],
		flags: [true, false, false, false],
		answer: 'A. Earl Campbell and Ricky Williams',
	};

	var q2 = {
		question: 'What team did Texas defeat for the 2005 National Title (in the 2006 Rose Bowl) ?',
		possibleAnswers: ['A. Alabama', 'B. Nortre Dame', 'C. USC', 'D. Ohio State'],
		flags: [false, false, true, false],
		answer: 'C. USC',
	};

	var q3 = {
		question: 'In 2004 Texas made the biggest comeback in school history against what team?',
		possibleAnswers: ['A. Texas Tech', 'B. Oklahoma State', 'C. Kansas', 'Oklahoma'],
		flags: [false, true, false, false],
		answer: 'B. Oklahoma State',
	};

	var q4 = {
		question: 'Who made the winning score for Texas in the 2004 Rose Bowl?',
		possibleAnswers: ['A. Vince Young', 'B. Cedric Benson', 'C. Bo Scaife', 'D. Dusty Magnum'],
		flags: [false, false, false, true],
		answer: 'D. Dusty Magnum',
	};

	var q5 = {
		question: 'What city is the annual Texas and Oklahoma game played in?',
		possibleAnswers: ['A. El Paso', 'Houston', 'C. Dallas', 'San Antonio'],
		flags: [false, false, true, false],
		answer: 'C. Dallas',
	};

	var q6 = {
		question: 'Who was the first coach to claim a national championship in college football and a Super Bowl victory in the NFL?',
		possibleAnswers: [
			'A. Jimmy Johnson',
			'B. Barry Switzer',
			'C. Tom Landry',
			'D. Jason Garrett',
		],
		flags: [true, false, false, false],
		answer: 'A. Jimmy Johnson',
	};

	var q7 = {
		question: 'Who was the first rookie QB in the history of the NFL to have 10 consecutive games with a passer rating over 100?',
		possibleAnswers: [
			'A. Roger Stauback',
			'B. Troy Aikman',
			'C. Dak Prescot',
			'D. Danny White',
		],
		flags: [false, false, true, false],
		answer: 'C. Dak Prescot',
	};

	var q8 = {
		question: 'Which Dallas Cowboy left football in 1979 to pursue a boxing career?',
		possibleAnswers: ['A. Randy White', 'B. Ed "Too Tall" Jones', 'C. Bob Lilly', 'D. Harvey Martin'],
		flags: [false, true, false, false],
		answer: 'B. Ed "Too Tall" Jones',
	};

	var q9 = {
		question: ' What Dallas Cowboys head coach invented the "flex defense"?',
		possibleAnswers: [
			'A. Jimmy Johnson',
			'B. Bill Parcels',
			'C. Tom Landry',
			'D. Barry Switzer',
		],
		flags: [false, false, true, false],
		answer: 'C. Tom Landry',
	};

	var q10 = {
		question: 'What player did the Cowboys trade to the Minnesota Vikings in 1989 for five veteran players and eight draft choices?',
		possibleAnswers: [
			'A. Tony Dorsett',
			'B. Randy White',
			'C. Michael Irvin',
			'D. Herschel Walker',
		],
		flags: [false, false, false, true],
		answer: 'D. Herschel Walker',
	};

	var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

	function loadQuestion(questionSelection) {
		console.log(questionSelection);
		countdownTimer.reset();
		$('.question').html('<h3>' + questionArray[questionSelection].question + '</h3>');
		$('#buttonA')
			.text(questionArray[questionSelection].possibleAnswers[0])
			.show();
		$('#buttonB')
			.text(questionArray[questionSelection].possibleAnswers[1])
			.show();
		$('#buttonC')
			.text(questionArray[questionSelection].possibleAnswers[2])
			.show();
		$('#buttonD')
			.text(questionArray[questionSelection].possibleAnswers[3])
			.show();
	}

	function setup() {
		index = 0;
		$('.question').append('<button id="startButton">Start</button>');
		$('#startButton').on('click', function () {
			$(this).hide();
			countdownTimer.start();
			loadQuestion(index);
		});
	}

	function getAnswer() {
		//  nextQuestion();
		$('.answerchoice').on('click', function () {
			console.log('alert', index);
			index++;
			console.log('click', index);
			$('.question').text('');
			$('#buttonA').text('');
			$('#buttonB').text('');
			$('#buttonC').text('');
			$('#buttonD').text('');
			loadQuestion();
		});
	}

	function answerCorrect() {
		correct++;
		alert('Correct!');
		console.log('correct');
	}

	function answerWrong() {
		wrong++;
		alert('Incorrect!');
		console.log('wrong');
	}

	function showScore() {
		$('.question').empty();
		$('.question').append('<h2><p>' + correct + ' correct</p></h2>');
		$('.question').append('<h2><p>' + wrong + ' incorrect</p></h2>');
		countdownTimer.stop();
		$('.timer').empty();
	}

	setup();
	$('.answerchoice').on('click', function () {
		console.log($(this));
		if (this.id == 'buttonA') {
			var answerChosen = 'A';
		} else if (this.id == 'buttonB') {
			answerChosen = 'B';
		} else if (this.id == 'buttonC') {
			answerChosen = 'C';
		} else if (this.id == 'buttonD') {
			answerChosen = 'D';
		}
		if (answerChosen == 'A' && questionArray[index].flags[0] == true) {
			answerCorrect();
		} else if (answerChosen == 'A') {
			answerWrong();
		}
		if (answerChosen == 'B' && questionArray[index].flags[1] == true) {
			answerCorrect();
		} else if (answerChosen == 'B') {
			answerWrong();
		}
		if (answerChosen == 'C' && questionArray[index].flags[2] == true) {
			answerCorrect();
		} else if (answerChosen == 'C') {
			answerWrong();
		}
		if (answerChosen == 'D' && questionArray[index].flags[3] == true) {
			answerCorrect();
		} else if (answerChosen == 'D') {
			answerWrong();
		}

		//
		$('.question').text('');
		$('#buttonA').text('');
		$('#buttonB').text('');
		$('#buttonC').text('');
		$('#buttonD').text('');
		index++;
		if (index < questionArray.length) {
			loadQuestion(index);
		} else {
			$('.answerchoice').hide();
			showScore();
		}
	});
});