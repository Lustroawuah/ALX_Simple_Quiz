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
            feedback


document.getElementById('submit-answer').addEventListener('click', checkAnswer);