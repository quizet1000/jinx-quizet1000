// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for minutes and seconds
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
        question: 'What is the name of the universe Ant-Man travels to when he goes subatomic?',
        choice1: 'Virtual Reality',
        choice2: 'Quantum Fiction',
        choice3: 'Narnia',
        choice4: 'Quantum Realm',
        answer: 4,
    },
    {
        question: 'which of these is not a continent?',
        choice1: 'Europe',
        choice2: 'Japan',
        choice3: 'Asia',
        choice4: 'North America',
        answer: 2,
    },
    {
        question: 'which animal is said to always land on their feet?',
        choice1: 'Dogs',
        choice2: 'Cats',
        choice3: 'Rats',
        choice4: 'Wolfs',
        answer: 2,
    },
    {
        question: 'The types of network protocols include?',
        choice1: 'UDH',
        choice2: 'TCN',
        choice3: 'SMP',
        choice4: 'SMTP',
        answer: 4,
    },
    {
        question: 'What are the main components of steel: iron and .......?',
        choice1: 'copper',
        choice2: 'carbon',
        choice3: 'broze',
        choice4: 'silver',
        answer: 2,
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
        question: 'What famous wall went up in 1961 and came down in 1989?',
        choice1: 'Great Wall Of China',
        choice2: 'Antonine Wall',
        choice3: 'Berlin Wall ',
        choice4: 'Wailing Wall',
        answer: 3,
    },
    {
        question: 'Ctrl+W is a shortcut key used to _?',
        choice1: 'cut',
        choice2: 'open some program files',
        choice3: 'end',
        choice4: 'close',
        answer: 3,
    },
    {
        question: 'How many is equivalent to a dozen?',
        choice1: "14",
        choice2: '10',
        choice3: '12',
        choice4: '16',
        answer: 3,
    },
    {
        question: 'Which vegetable is associated with Halloween?',
        choice1: 'Carrot',
        choice2: 'Turnip',
        choice3: 'Grape',
        choice4: 'pumpkin',
        answer: 4,
    },
    {
        question: 'what are termites noted for eating?',
        choice1:  'Earth',
        choice2:  'Insect',
        choice3:  'Wood',
        choice4:  'Rice',
        answer: 3,
    },
    {
        question: 'From which animal do we obtain bacon from?',
        choice1: 'sheep',
        choice2: 'pig',
        choice3: 'cow',
        choice4: 'chicken',
        answer: 2,
    },
    {
        question: 'which flower represents love?',
        choice1: 'dandelion',
        choice2: 'poppy',
        choice3: 'rose',
        choice4: 'lily',
        answer: 3,
    },
    {
        question: 'What do you call a person who was born in or is a citizen of finland?',
        choice1: 'fan',
        choice2: 'finn',
        choice3: 'fin',
        choice: 'finlander',
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
const MAX_QUESTIONS =23

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

         //onclick sound
    function play(){
        var audio = new Audio('  jinxy.mp3');
        audio.play();
    }
     


