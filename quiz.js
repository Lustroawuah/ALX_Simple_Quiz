// Step 1: Define the checkAnswer function
function checkAnswer() {
    // Step 2: Declare a variable named correctAnswer and assign it the string value "4".
    const correctAnswer = "4"; // This represents the correct answer to your quiz question.

    // Step 3: Retrieve the User’s Answer.
    // Use document.querySelector to select the checked radio button by its name attribute name="quiz".
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');

    // Access the value property of the selected radio button to get the user’s answer.
    // Store this value in a variable named userAnswer.
    const userAnswer = userAnswerElement ? userAnswerElement.value : null; // Get the value or null if not selected

    // Step 4: Compare the User’s Answer with the Correct Answer.
    const feedbackElement = document.getElementById('feedback'); // Get the feedback element
    if (userAnswer) {
        // If the user has selected an answer
        if (userAnswer === correctAnswer) {
            // If the values match, indicating the user’s answer is correct
            feedbackElement.textContent = "Correct! Well done."; // Update feedback text
            feedbackElement.style.color = "green"; // Optional: Change text color to green
        } else {
            // If the values do not match, indicating the user’s answer is incorrect
            feedbackElement.textContent = "That's incorrect. Try again!"; // Update feedback text
            feedbackElement.style.color = "red"; // Optional: Change text color to red
        }
    } else {
        // If no answer is selected
        feedbackElement.textContent = "Please select an answer."; // Update feedback text
        feedbackElement.style.color = "orange"; // Optional: Change text color to orange
    }
}

// Step 5: Add an Event Listener to the Submit Button.
// Use document.getElementById to select the “Submit Answer” button by its ID, "submit-answer".
document.getElementById('submit-answer').addEventListener('click', checkAnswer); // Add click event listener