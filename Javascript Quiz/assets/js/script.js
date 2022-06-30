const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Python",
        b: "Java",
        c: "C+",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "What year was Javascript Launched?",
        a: "1995",
        b: "1994",
        c: "2000",
        d: "1996",
        correct: "a",
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper loopy Language",
        b: "Hypertext Markup Language",
        c: "Hyperloop Machine Language",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Simple Stylesheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Stylesheets",
        d: "Cellular Simple Straight",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})