// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TIME-UP";
  }
}, 1000);

const question = document.querySelector('#question');
const  choices =Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarfull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions =[]

let questions = [
    {
        question: 'The types of network protocols include?',
        choice1: 'UDH',
        choice2: 'TCN',
        choice3: 'SMP',
        choice4: 'SMTP',
        answer: '4',
    },
    {
        question: 'There are _ major types of printer?',
        choice1: '4',
        choice2: '3',
        choice3: '2',
        choice4: '1',
        answer: 2,
    },
    {
        question: 'Ctrl+W is a shortcut key used to _?',
        choice1: 'cut',
        choice2: 'open some program files',
        choice3: 'end',
        choice4: 'close',
        answer: '3',
    },
    {
        question: 'What is the use of a server?',
        choice1: 'Is a computer that provide analysisto other computrs',
        choice2: 'Is a computer that provide wifi to other computers',
        choice3: 'Is a computer that provide internet to other computers',
        choice4: 'Is a computer that provide services and information to other computers',
        answer: 4,
    },
    {
        question: 'what does UDP stands for',
        choice1:  'User diagram process',
        choice2:  'User datagram protocol',
        choice3:  'User diagram protocol',
        choice4:  'User datalump process',
        answer: 2,
    },
    {
            question: 'Alt + tab is a shortcut key used to _?',
            choice1: 'cut',
            choice2: 'switch apps',
            choice3: 'end apps',
            choice4: 'close apps',
            answer: '2',
        },
    {
        question: 'Programming language include all except?',
        choice1: 'scripting programming language',
        choice2: 'procedural programming language',
        choice3: 'human programming language',
        choice4: 'Object-oriented programming language',
        answer: '3',
    },
    {
        question: 'The web uses the __ to transmit data?',
        choice1: 'HTTP protocol language',
        choice2: 'The internet',
        choice3: 'The browser',
        choice4: 'The url location',
        answer: '1',
    },
    {
        question: 'Ctrl+W is a shortcut key used to _?',
        choice1: 'cut',
        choice2: 'open some program files',
        choice3: 'end',
        choice4: 'close',
        answer: '3',
    },
    {
        question: ' What are the examples of motherboard slots?',
        choice1: 'AGS',
        choice2: 'DEB',
        choice3: 'PCI',
        choice4: 'PCIF',
        answer: '3',
    }
]
const SCORE_POINTS= 5
const MAX_QUESTIONS =10

startGame = () => {
    questionCounter = 0
    score  = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html') 
    }


     questionCounter++
     progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
     progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
   
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
       const number = choice.dataset['number']
       choice.innerText =currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })

     })
     
     incrementScore = num => {
         score +=num
         scoreText.innerText = score
     }
     startGame()
     


