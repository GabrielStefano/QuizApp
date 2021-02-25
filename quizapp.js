const quizData = [
    {
        question: 'How old is Gabriel?',
        a: '20',
        b: '21',
        c: '22',
        d: '24',
        correct: 'd'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Who is the President of US?',
        a: 'Gabriel Stefano',
        b: 'Joe Biden',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet', 
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994', 
        d: 'none of the above',
        correct: 'b'
    }
]

const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const answersEls = document.querySelectorAll('.answer')
const div = document.querySelector('.quiz-container')
let score = 0
let currentQuiz = 0


loadQuiz()


function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}

function Submit(){
    let answer = getSelectedAnswer()
    if (answer === quizData[currentQuiz].correct){
        score++
    }    
    deselectAnswers()
    currentQuiz++  
    if (answer){
        if(currentQuiz<quizData.length)
            loadQuiz()
        else
            // TODO: Show results
            div.innerHTML =`
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>
            `
    }
}

function deselectAnswers(){
    answersEls.forEach(answerEl => {
        answerEl.checked = false
    });
}

function getSelectedAnswer(){
    let answer = undefined
    answersEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    });

    return answer
}