const questions = window.__QUESTIONS__;
let currentIndex = 0;
let score = { correct: 0, wrong: 0 };

const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progress");

function loadQuestion() {
  if (currentIndex >= questions.length) {
    submitResult();
    return;
  }

  const q = questions[currentIndex];
  questionText.textContent = q.questionText;
  optionsDiv.innerHTML = "";
  progress.textContent = `Question ${currentIndex + 1} of ${questions.length}`;

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-secondary text-start";
    btn.textContent = opt;

    btn.onclick = () => {
      document.querySelectorAll("#options button").forEach((b) => {
        b.disabled = true;
        if (q.correctAnswer === i) {
          b.classList.add("btn-success");
        }
        if (b.textContent === opt && q.correctAnswer !== i) {
          b.classList.add("btn-danger");
        }
      });

      if (q.correctAnswer === i) {
        score.correct++;
      } else {
        score.wrong++;
      }

      nextBtn.disabled = false;
    };

    optionsDiv.appendChild(btn);
  });

  nextBtn.disabled = true;
}

nextBtn.onclick = () => {
  currentIndex++;
  loadQuestion();
};

function submitResult() {
  fetch("/result", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      answers: {
        total: questions.length,
        correct: score.correct,
        wrong: score.wrong,
      },
    }),
  })
    .then((res) => res.text())
    .then((html) => {
      document.body.innerHTML = html;
    });
}

loadQuestion();
