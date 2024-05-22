var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: 'Qual é a língua oficial do Egito?',
        choices: ['Inglês', 'Francês', 'Árabe', 'Espanhol'],
        correctAnswer: 2
    },
    {
        question: 'Qual é a principal religião praticada no Egito?',
        choices: ['Cristianismo', 'Judaísmo', 'Budismo', 'Islã'],
        correctAnswer: 3
    },
    {
        question: 'Qual é uma das mais famosas maravilhas arquitetônicas do Egito Antigo?',
        choices: ['Coliseu', 'Torre Eiffel', 'Grande Pirâmide de Gizé', 'Estátua da Liberdade'],
        correctAnswer: 2
    },
    {
        question: 'Qual rio é considerado o mais importante no Egito?',
        choices: ['Amazonas', 'Nilo', 'Mississipi', 'Ganges'],
        correctAnswer: 1
    },
    {
        question: 'Qual cidade é famosa por seus templos e tumbas no Egito Antigo?',
        choices: ['Alexandria', 'Luxor', 'Cairo', 'Marrakech'],
        correctAnswer: 1
    },
    {
        question: 'Quem foi um dos faraós mais conhecidos do Egito Antigo?',
        choices: ['Júlio César', 'Alexandre, o Grande', 'Tutancâmon', 'Ciro, o Grande'],
        correctAnswer: 2
    },
    {
        question: 'Qual é o nome da escrita pictográfica usada no Egito Antigo?',
        choices: ['Cuneiforme', 'Hieróglifos', 'Rúnica', 'Gótica'],
        correctAnswer: 1
    },
    {
        question: 'Qual é o nome da rainha egípcia conhecida por sua beleza e intrigas políticas?',
        choices: ['Cleópatra', 'Nefertiti', 'Hatshepsut', 'Ísis'],
        correctAnswer: 0
    },
    {
        question: 'Qual é o nome do instrumento musical de sopro associado à antiga cultura egípcia?',
        choices: ['Violino', 'Oboé', 'Harpa', 'Flauta de Pã'],
        correctAnswer: 3
    },
    {
        question: 'Quem é considerado o deus dos mortos na mitologia egípcia?',
        choices: ['Rá', 'Anúbis', 'Ísis', 'Hórus'],
        correctAnswer: 1
    },
    {
        question: 'Qual era o método de mumificação usado no Egito Antigo?',
        choices: ['Sepultamento direto', 'Crematório', 'Embalsamamento', 'Congelamento'],
        correctAnswer: 2
    },
    {
        question: 'Qual é o nome do deserto que cobre grande parte do Egito?',
        choices: ['Saara', 'Kalahari', 'Gobi', 'Atacama'],
        correctAnswer: 0
    }
];

// Define the random questions once and reuse the same set
var randomQuestions = shuffle(questions).slice(0, 3);

function buildQuiz(){
    var output = [];
    randomQuestions.forEach(
        (currentQuestion, questionNumber) => {
            var answers = [];
            for(letter in currentQuestion.choices){
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${currentQuestion.choices[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var numCorrect = 0;
    randomQuestions.forEach( (currentQuestion, questionNumber) => {
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
        var correctLetter = currentQuestion.correctAnswer.toString();
        var correctIndex = parseInt(correctLetter);
        
        if(userAnswer === correctLetter){
            numCorrect++;
            answerContainers[questionNumber].getElementsByTagName('label')[correctIndex].style.backgroundColor = 'lightgreen';
            answerContainers[questionNumber].getElementsByTagName('label')[correctIndex].style.color = 'white';
        }
        else{
            answerContainers[questionNumber].getElementsByTagName('label')[correctIndex].style.backgroundColor = 'red';
            answerContainers[questionNumber].getElementsByTagName('label')[correctIndex].style.color = 'white';
        }
    }); 
    resultsContainer.innerHTML = `${numCorrect} out of ${randomQuestions.length}`;
}

submitButton.addEventListener('click', showResults);

submitButton.addEventListener('click', function() {
    showResults();
    // Desabilitar todos os botões de rádio após o envio
    var radioButtons = document.querySelectorAll('input[type=radio]');
    radioButtons.forEach(function(radioButton) {
        radioButton.disabled = true;
    });
});


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Obtém a referência para a imagem da lâmpada
const lampada = document.querySelector('#lampada');

// Obtém a referência para o elemento <aside>
const aside = document.querySelector('aside');

// Define o conteúdo da dica
const dica = '<p>Dica: Explore e celebre a diversidade angolana: Desde as tradições culinárias até as festividades tradicionais, passando pela música, religião e questões socioeconômicas, a riqueza da identidade angolana é forjada pela influência de várias culturas, e reconhecer e valorizar essa diversidade é essencial para promover a igualdade, preservar tradições e fortalecer a coesão social.</p>';

// Adiciona um evento de clique à imagem da lâmpada
lampada.addEventListener('click', () => {
    // Exibe a dica no elemento <aside>
    aside.innerHTML = dica;
});

buildQuiz();
