function checkAnswer() {
    //function body

    //identify correct answer
    let correctAnswer ="4"
    let selectedRadio = document.querySelector('input[name="quiz"]:checked');

    if (!selectedRadio) {
        document.getElementById("feedback").textContent = "Please select an answer first";
        return;
    }

    let userAnswer = selectedRadio.value;

    //compare answers and provide feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

//add the event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);