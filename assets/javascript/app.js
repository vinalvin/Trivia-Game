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