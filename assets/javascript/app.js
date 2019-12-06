//Question lists
var questions = [{
        question: "1. What is the capital of Canada?",
        choices: [
            "A. Bangkok",
            "B. Beijing",
            "C. Ottawa",
            "D. Stockholm",
        ],
        answer: 2,
    },
    {
        question: "2. What is the capital of Indonesia?",
        choices: [
            "A. Bangkok",
            "B. Beijing",
            "C. Jakarta",
            "D. Stockholm"
        ],
        answer: 2,
    },
    {
        question: "3. What is the capital of Italy?",
        choices: [
            "A. Brussels",
            "B. Rome",
            "C. New Delhi",
            "D. Stockholm",
        ],
        answer: 1,
    },
    {
        question: "4. What is the capital of Pakistan?",
        choices: [
            "A. Islamabad",
            "B. Buenos Aires",
            "C. Paris",
            "D. Prague",
        ],
        answer: 0,
    },
    {
        question: "5. What is the capital of Cuba?",
        choices: [
            "A. Islamabad",
            "B. Paris",
            "C. Stockholm",
            "D. Havana",
        ],
        answer: 3,
    },
    {
        question: "6. What is the capital of United Kingdom?",
        choices: [
            "A. Tokyo",
            "B. London",
            "C. Canberra",
            "D. Jakarta",
        ],
        answer: 1,
    },
];

//set timer for limited amount of time 90 second
var counter = 90;
var timer = setInterval(decreaseCounter, 1 * 1000)

// display initial time countdown
function decreaseCounter() {
    counter--;
    $('.timeGoDown').text('Time remaining: ' + counter);
    $('form').show()

    //The game ends when the time runs out, and the result will display
    if (counter == 0) {
        $('.timeGoDown').text('Time is up!')
        clearInterval(timer)
        showResults();
    }
}

function render() {

    //create a trivial game form with 4 multiple choices
    for (var i = 0; i < questions.length; i++) {
        var divTag = $('<div>').addClass("form-group")

        var question = questions[i]
        console.log(question.question)
        divTag.append($('<p>').text(question.question))

        for (var x = 0; x < question.choices.length; x++) {
            var choice = question.choices[x]
            var div = $('<div>').attr("class", "form-check")
            var radio = $('<input>')
                .attr("type", "radio")
                .attr("class", "form-check-input")
                .attr("name", "question" + i)
                .attr("id", "question" + i + x)
                .attr("value", x)
            var label = $('<label>').text(choice)
                .attr("class", "form-check-label")
                .attr("for", "question" + i + x)

            div.append(radio, label)
            divTag.append(div)
        }
        $('form').append(divTag)
    }

    //create a button to submit
    var btn = $('<button>').text("Done")
    $('form').append(btn)
}

function checkAnswer() {
    /*
        var q1 = $("input[name='question0']:checked").val()
        var q2 = $("input[name='question1']:checked").val()
             ^                          ^
    */

    var totalCorrectAnswer = 0;
    for (var q = 0; q < questions.length; q++) {
        //$("input[name='question"+q+"']:checked").val()
        //$(`input[name='question ${q}']:checked`).val()

        //convert string into a number
        var result = parseInt($(`input[name='question${q}']:checked`).val())

        //if player's answer match with the answers in the question lists, correct scrore will be increase
        if (result === questions[q].answer) {
            totalCorrectAnswer++
        }
    }
    return totalCorrectAnswer;
}

//result of correct answer and incorrect answer
function showResults() {
    var correctAns = checkAnswer()

    //hide form
    $('form').hide()

    //then display only results
    $('.results').show()

    //Total correct answer 
    $('.correctAnswer').text(correctAns)

    //Total incorrect answer
    $('.incorrectAnswer').text(questions.length - correctAns)
    console.log(correctAns)
    console.log(questions.length - correctAns)

    //display text when time runs out
    $('.timeGoDown').text('All Done!')

    //clear timer
    clearInterval(timer)
}

//when click on the button, it will show total correct answer and incorrect answer
$(document).on('click', 'button', function() {

    //Prevent the page from refreshing
    event.preventDefault();
    showResults();
});

render()