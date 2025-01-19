function checkAnswer() {

    const correctAnswer = "4";

    
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer) {
        
        const userAnswerValue = userAnswer.value;

        // Step 4: Compare the User’s Answer with the Correct Answer.
        if (userAnswerValue === correctAnswer) {
            // If the values match
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; 
        } else {
            
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; 
        }
    } else {
        
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange"; 
    }
}


document.getElementById('submit-answer').addEventListener('click', checkAnswer);