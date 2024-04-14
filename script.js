document.addEventListener('DOMContentLoaded', function() {
    const quizSection = document.getElementById('quiz-section');
    let currentQuestionIndex = 0;
    let attempts = 0;
    let totalAttempts = [];

    const questions = [
        { text: 'What is the largest mammal in the world?', options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'], answer: 'Blue Whale' },
        { text: 'Which animal is known to have the longest lifespan?', options: ['Elephant', 'Tortoise', 'Whale Shark', 'Parrot'], answer: 'Tortoise' },
        { text: 'What is a group of lions called?', options: ['Pack', 'School', 'Pride', 'Herd'], answer: 'Pride' },
        { text: 'Which bird is known for its colorful plumage and ability to mimic sounds?', options: ['Pigeon', 'Peacock', 'Parrot', 'Penguin'], answer: 'Parrot' },
        { text: 'What animal is known as the "Ship of the Desert"?', options: ['Camel', 'Elephant', 'Horse', 'Llama'], answer: 'Camel' },
        { text: 'Which mammal is known for its ability to hang upside down?', options: ['Bat', 'Sloth', 'Monkey', 'Opossum'], answer: 'Bat' },
        { text: 'What is the fastest land animal?', options: ['Cheetah', 'Lion', 'Horse', 'Greyhound'], answer: 'Cheetah' },
        { text: 'Which animal is the only mammal capable of true flight?', options: ['Flying squirrel', 'Pterodactyl', 'Bat', 'Butterfly'], answer: 'Bat' },
        { text: 'What is the largest bird of prey in the world?', options: ['Golden Eagle', 'Bald Eagle', 'Condor', 'Albatross'], answer: 'Condor' },
        { text: 'Which marine animal is known for its eight tentacles?', options: ['Jellyfish', 'Sea star', 'Octopus', 'Sea horse'], answer: 'Octopus' }
    ];

    function showQuestion(questionIndex) {
        const question = questions[questionIndex];
        quizSection.innerHTML = '';
        attempts = 0;

        const questionNumber = document.createElement('h3');
        questionNumber.textContent = `Question ${questionIndex + 1} of ${questions.length}`;
        quizSection.appendChild(questionNumber);

        const questionText = document.createElement('h2');
        questionText.textContent = question.text;
        quizSection.appendChild(questionText);

        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = function() {
                attempts++;
                if(option === question.answer) {
                    totalAttempts.push(attempts);
                    if (currentQuestionIndex < questions.length - 1) {
                        currentQuestionIndex++;
                        showQuestion(currentQuestionIndex);
                    } else {
                        showResults();
                    }
                } else {
                    alert(`Wrong answer. Attempts for this question: ${attempts}. Try again!`);
                }
            };
            quizSection.appendChild(button);
        });
    }

    function showResults() {
        quizSection.innerHTML = '<h2>Quiz Completed!</h2>';
        const results = totalAttempts.reduce((acc, curr, index) => {
            return acc + `Question ${index + 1}: ${curr} attempts<br>`;
        }, '');
        const total = totalAttempts.reduce((acc, curr) => acc + curr, 0);
        quizSection.innerHTML += `<p>${results}</p>`;
        quizSection.innerHTML += `<p>Total attempts: ${total}</p>`;
    }

    showQuestion(currentQuestionIndex);
});
