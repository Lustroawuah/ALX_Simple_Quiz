// Step 1: Define the checkAnswer function
function checkAnswer() {
    
    const correctAnswer = "4"; 

    
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');

    
    const userAnswer = userAnswerElement ? userAnswerElement.value : null; 

    
    const feedbackElement = document.getElementById('feedback'); 
    if (userAnswer) {
       
        if (userAnswer === correctAnswer) {
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