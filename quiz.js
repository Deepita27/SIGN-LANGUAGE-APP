const quizData = [
    {
      image: "don't know.jpeg",
      options: ["hi", "don't know", "movie", "jump"],
      correct: 1
    },
    {
      image: "hi.jpeg",
      options: ["sorry", "salute", "bye", "Hi"],
      correct: 3
    },
    {
      image: "icecream.jpeg",
      options: ["juice", "chips", "icecream", "cake"],
      correct: 2
    },
    {
      image: "potato.png",
      options: ["cucumber", "potato", "Onion", "carrot"],
      correct: 2
    },
    {
      image: "practice.jpeg",
      options: ["practice", "handwork", "dedication", "okay"],
      correct: 0
    },
    {
      image: "sorry.jpeg",
      options: ["bye", "please", "sorry", "love"],
      correct: 2
    },
    {
      image: "thank you.jpeg",
      options: ["nice", "thank you", "welcome", "miss you"],
      correct: 1
    },
    {
      image: "water.jpeg",
      options: ["water", "juice", "cow", "bottle"],
      correct: 0
    },
    {
      image: "watermelon.jpeg",
      options: ["mango", "watermelon", "strawberry", "kiwi"],
      correct: 1
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const imageEl = document.getElementById("question-image");
  const optionButtons = document.querySelectorAll(".option");
  const resultEl = document.getElementById("result");
  const quizEl = document.getElementById("quiz");
  const scoreText = document.getElementById("score-text");
  const questionNumberEl = document.getElementById("question-number");
  
  function loadQuestion() {
    const q = quizData[currentQuestion];
    imageEl.src = q.image;
    optionButtons.forEach((btn, i) => {
      btn.textContent = q.options[i];
    });
    questionNumberEl.textContent = currentQuestion + 1; // Show question number
  }
  
  function selectAnswer(index) {
    if (index === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quizEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreText.textContent = `${score} / ${quizData.length}`;
  }
  
  function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    loadQuestion();
    quizEl.classList.remove("hidden");
    resultEl.classList.add("hidden");
  }
  
  loadQuestion(); // Initial call to load the first question
  
