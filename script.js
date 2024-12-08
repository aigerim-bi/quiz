const questions = {
    school: [
        {
            question: "Какая из фотографий не настоящая?",
            image: "ai1.jpg",
            options: ["1", "2", "3"],
            answer: "1"
        },
        {
            question: "Какая из фотографий не настоящая?",
            image: "ai2.jpg",
            options: ["1", "2", "3"],
            answer: "2"
        },
        {
            question: "Какая из фотографий не настоящая?",
            image: "ai3.jpg",
            options: ["1", "2", "3"],
            answer: "1"
        },
        {
            question: "Какая из фотографий не настоящая?",
            image: "ai4.jpg",
            options: ["1", "2", "3"],
            answer: "3"
        },
        {
            question: "Какая из фотографий не настоящая?",
            image: "ai5.jpg",
            options: ["1", "2", "3"],
            answer: "2"
        },
        {
            question: "Какая из фотографий не настоящая?",
            image: "ai6.jpg",
            options: ["1", "2", "3"],
            answer: "3"
        }
    ],
    anime: [
        {
            question: "Как звали родителей Наруто Узумаки?'?",
            image: "anime1.jpeg",
            options: ["Хирузен и Цунаде", "Минато и Кушина", "Шикаку и Ёшина"],
            answer: "Минато и Кушина"
        },
        {
            question: "Из какого аниме данный персонаж?",
            image: "anime2.jpeg",
            options: ["Тетрадь смерти", "Атака титанов", "Блич"],
            answer: "Тетрадь смерти"
        },
        {
            question: "Из за чего Хината захотел играть в волейбол?",
            image: "anime3.jpeg",
            options: ["Увидел по телевизору игру", "Заставили друзья", "Решил идти по стопам брата"],
            answer: "Увидел по телевизору игру"
        },
        {
            question: "Кому принадлежит ходячий замок из аниме Хаяо Миядзаки?",
            image: "anime4.jpg",
            options: ["Хаку", "София", "Хаул"],
            answer: "Хаул"
        },
        {
            question: "Кто является главным злодеем в двух частях аниме «Невероятные приключения ДжоДжо»?",
            image: "anime5.jpg",
            options: ["Ди Круз", "Дио Брандо", "Спидвагон"],
            answer: "Дио Брандо"
        }
        
    ],
    logos: [
        {
            question: "Чей это логотип?",
            image: "logo1.jpeg",
            options: ["Reebook", "Adidas", "Converse"],
            answer: "Reebook"
        },
        {
            question: "Чей это логотип?",
            image: "logo2.jpg",
            options: ["Porsche", "Polo", "Ferari"],
            answer: "Ferari"
        },
        {
            question: "Чей это логотип?",
            image: "logo3.jpeg",
            options: ["Versace", "Starbuks", "Double Coffee"],
            answer: "Versace"
        },
        {
            question: "Чей это логотип?",
            image: "logo4.jpeg",
            options: ["Suzuki", "Mitsubishi", "Subaru"],
            answer: "Mitsubishi"
        },
        {
            question: "Чей это логотип?",
            image: "logo5.png",
            options: ["Columbia", "Sun Microsystems", "IBM"],
            answer: "Columbia"
        }
    ]
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 100;

function startQuiz(topic) {
    document.querySelector(".quiz-container").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");

    currentQuiz = questions[topic];
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 100;

    document.getElementById("points").textContent = score;
    document.getElementById("time").textContent = timeLeft;

    startTimer();
    showQuestion();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function showQuestion() {
    const questionData = currentQuiz[currentQuestionIndex];

    document.getElementById("question-image").src = questionData.image;
    document.getElementById("question-text").textContent = questionData.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}
function checkAnswer(answer) {
    const correctAnswer = currentQuiz[currentQuestionIndex].answer;
    const options = document.querySelectorAll("#options-container button");


    options.forEach(option => {
        if (option.textContent === correctAnswer) {
            option.style.backgroundColor = "#4CAF50"; 
        }
        if (option.textContent === answer && answer !== correctAnswer) {
            option.style.backgroundColor = "#f44336"; 
        }
        
        option.disabled = true;
    });

    
    if (answer === correctAnswer) {
        score += 10;
        document.getElementById("points").textContent = score;
    }


    setTimeout(() => {
        document.getElementById("next").classList.remove("hidden");
    }, 1000); 
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
        document.getElementById("next").classList.add("hidden");
    } else {
        endQuiz();
    }
}

function showQuestion() {
    const questionData = currentQuiz[currentQuestionIndex];

    document.getElementById("question-image").src = questionData.image;
    document.getElementById("question-text").textContent = questionData.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}


function endQuiz() {
    clearInterval(timerInterval);
    alert(`Викторина окончена! Ваши очки: ${score}`);
    location.reload();
}
