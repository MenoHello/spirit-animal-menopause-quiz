// quiz-script.js

const quizData = [
  {
    question: "Which hormone drops most sharply during menopause?",
    answers: [
      { text: "Testosterone", correct: false },
      { text: "Estrogen", correct: true },
      { text: "Progesterone", correct: false },
      { text: "Insulin", correct: false }
    ],
    explanation: "Estrogen levels drop most significantly during menopause, leading to many of the classic symptoms."
  },
  {
    question: "What’s a common cause of sudden night sweats in perimenopause?",
    answers: [
      { text: "High blood sugar", correct: false },
      { text: "Fluctuating estrogen levels", correct: true },
      { text: "Dehydration", correct: false },
      { text: "Iron deficiency", correct: false }
    ],
    explanation: "Fluctuating estrogen levels affect the hypothalamus, disrupting temperature regulation and causing night sweats."
  },
  // Add more questions here
];

const positivePraise = [
  "Yes! Look at you, menopause master-in-the-making!",
  "Now you’ve got the knowledge and the power.",
  "You nailed it. Science meets savvy!",
  "Boom! Someone’s done their homework—or just has great instincts.",
  "That’s right! You’re seriously in sync with your hormones.",
  "Well done! You’re ahead of the curve—and most OB/GYNs.",
  "Gold star for you. Your brain’s definitely not foggy!",
  "That’s a win—and proof you’re more tuned in than you think.",
  "Love that confidence—it paid off!",
  "I see you’ve got this midlife thing handled.",
  "Way to go! That one trips a lot of people up.",
  "Yup! Knowledge is hot—and so are you.",
  "Clearly, you’re in your empowered era.",
  "You're crushing this—seriously impressive."
];

const encouragingWrong = [
  "A good guess! This journey is all about learning something new.",
  "Close! Menopause is full of surprises, right?",
  "That one’s tricky—now you’ve got a new insight under your belt!",
  "Great effort. These things aren’t always common knowledge.",
  "Almost! You're building your menopause muscle with every click.",
  "Not this time, but your curiosity is the real win here.",
  "Learning something new is the whole point—keep going!",
  "You're in good company—most people miss this one!",
  "Oops, not quite—but you’re well on your way to becoming menopause-wise.",
  "You’re doing great. Sometimes the answers are unexpected!",
  "Good try! Now you’ve got a fact most people don’t even know.",
  "Menopause is a maze—thanks for staying curious as we navigate it.",
  "Wrong? Maybe. Empowered by new knowledge? Definitely.",
  "No worries—every misstep is one step closer to understanding more.",
  "Not quite—but your Hormonal IQ is rising by the second!"
];

let currentQuestion = 0;

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  const quizEl = document.getElementById('quiz');
  const q = quizData[currentQuestion];
  quizEl.innerHTML = `
    <div class="question">${q.question}</div>
    <div class="answers">
      ${q.answers.map((a, i) => `<button onclick="selectAnswer(${i})">${a.text}</button>`).join('')}
    </div>
    <div class="feedback" id="feedback"></div>
    <button class="next-btn" style="display:none" onclick="nextQuestion()">Next Question</button>
  `;
}

function selectAnswer(index) {
  const q = quizData[currentQuestion];
  const isCorrect = q.answers[index].correct;
  const feedbackEl = document.getElementById('feedback');
  const buttons = document.querySelectorAll('.answers button');

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (q.answers[i].correct) btn.classList.add('correct-answer');
    if (!q.answers[i].correct && i === index) btn.classList.add('wrong-answer');
  });

  if (isCorrect) {
    const praise = positivePraise[Math.floor(Math.random() * positivePraise.length)];
    feedbackEl.innerHTML = `<strong>Correct.</strong> ${q.explanation}<br><em>${praise}</em>`;
  } else {
    const encouragement = encouragingWrong[Math.floor(Math.random() * encouragingWrong.length)];
    feedbackEl.innerHTML = `<strong>Incorrect.</strong> ${q.explanation}<br><em>${encouragement}</em>`;
  }

  document.querySelector('.next-btn').style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showFinalScreen();
  }
}

function showFinalScreen() {
  document.getElementById('quiz').innerHTML = `
    <div class="final-screen">
      <h2>Thanks for playing!</h2>
      <p>You're one step wiser in your menopause journey.</p>
      <p>Want more insights like these? Join our newsletter below.</p>
      <input type="email" placeholder="Your email" style="padding:10px; width: 80%; max-width: 300px; border-radius: 10px; border: 1px solid #ccc;" />
      <br><br>
      <button class="next-btn" onclick="alert('Thank you! You’re signed up and supported.')">Submit</button>
    </div>
  `;
}

startQuiz();
