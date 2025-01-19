function checkAnswer() {
    const correctAnswer = "4"; // Step 1: Correct answer
    
    // Step 2: Retrieve the User’s Answer
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = userAnswerElement ? userAnswerElement.value : null; // Get the value or null if not selected

    // Step 3: Compare the User’s Answer with the Correct Answer
    const feedbackElement = document.getElementById('feedback');
    if (userAnswer) {
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done."; // Correct answer
            feedbackElement.style.color = "green"; // Optional: Change text color to green
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!"; // Incorrect answer
            feedbackElement.style.color = "red"; // Optional: Change text color to red
        }
    } else {
        feedbackElement.textContent = "Please select an answer."; // No answer selected
        feedbackElement.style.color = "orange"; // Optional: Change text color to orange
    }
}

// Step 4: Add an Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);