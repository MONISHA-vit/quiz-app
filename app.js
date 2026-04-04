const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public")); // ✅ AFTER app is created

// 5 MCQ Questions
let quiz = [
  {
    question: "Which language is primarily used for client-side web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    question: "Which company originally developed Node.js?",
    options: ["Google", "Microsoft", "Joyent", "IBM"],
    answer: "Joyent"
  },
  {
    question: "Which database is classified as NoSQL?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    answer: "MongoDB"
  },
  {
    question: "Which protocol ensures secure communication over the web?",
    options: ["HTTP", "FTP", "HTTPS", "SMTP"],
    answer: "HTTPS"
  },
  {
    question: "Which of the following is a frontend JavaScript library?",
    options: ["Django", "Spring", "React", "Laravel"],
    answer: "React"
  }
];

// GET quiz
app.get("/quiz", (req, res) => {
  res.json(quiz);
});

// POST attempt
app.post("/attempt", (req, res) => {
  const answers = req.body.answers;

  if (!answers || answers.length !== quiz.length) {
    return res.status(400).json({ error: "Invalid answers" });
  }

  let score = 0;

  answers.forEach((ans, i) => {
    if (ans === quiz[i].answer) score++;
  });

  res.json({
    score,
    total: quiz.length
  });
});

// Start server
app.listen(3000, () => {
  console.log("v2 running on port 3000");
});