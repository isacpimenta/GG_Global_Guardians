var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: "Qual é a capital de Israel?",
        choices: ["Tel Aviv", "Jerusalém", "Haifa", "Beirute"],
        correctAnswer: 1
    },
    {
        question: "Quais são as principais religiões praticadas em Israel?",
        choices: ["Judaísmo, Cristianismo e Islamismo", "Hinduísmo, Budismo e Judaísmo", "Apenas Judaísmo", "Apenas Cristianismo"],
        correctAnswer: 0
    },
    {
        question: "O que é o Kibbutz em Israel?",
        choices: ["Uma dança folclórica tradicional", "Uma comunidade agrícola coletiva", "Uma festa religiosa", "Um festival de música"],
        correctAnswer: 1
    },
    {
        question: "Como Israel aborda questões de diversidade étnica e racial?",
        choices: ["Promovendo a igualdade de direitos para todos os grupos étnicos e raciais", "Discriminando certos grupos étnicos e raciais", "Ignorando completamente a diversidade étnica e racial", "Excluindo grupos étnicos minoritários da participação na sociedade"],
        correctAnswer: 0
    },
    {
        question: "Quais são algumas das contribuições culturais de Israel para o mundo?",
        choices: ["Dança flamenca e poesia japonesa", "Culinária chinesa e arquitetura russa", "Tecnologia de alta tecnologia e música Klezmer", "Escultura africana e arte abstrata"],
        correctAnswer: 2
    },
    {
        question: "Como Israel aborda questões de igualdade de gênero?",
        choices: ["Priorizando os direitos das mulheres em todas as áreas da sociedade", "Limitando as oportunidades das mulheres em comparação com os homens", "Ignorando completamente as questões de gênero", "Excluindo as mulheres de participar na sociedade israelense"],
        correctAnswer: 0
    },
    {
        question: "Qual é a importância do Mar Morto para Israel?",
        choices: ["É uma fonte vital de água doce", "É um local de peregrinação religiosa", "É conhecido por suas propriedades terapêuticas e pela indústria de cosméticos", "É um importante centro comercial internacional"],
        correctAnswer: 2
    },
    {
        question: "Qual é a língua oficial de Israel?",
        choices: ["Árabe", "Hebraico", "Inglês", "Francês"],
        correctAnswer: 1
    },
    {
        question: "Como Israel lida com questões de acessibilidade e inclusão para pessoas com deficiência?",
        choices: ["Garantindo acesso universal e apoio adequado", "Discriminando e excluindo pessoas com deficiência", "Ignorando completamente as necessidades das pessoas com deficiência", "Oferecendo serviços apenas para certos tipos de deficiência"],
        correctAnswer: 0
    },
    {
        question: "O que é o Muro das Lamentações e qual é a sua importância para Israel?",
        choices: ["É um local religioso sagrado para o Cristianismo", "É uma fortaleza histórica", "É um local de peregrinação para o Judaísmo e um símbolo da conexão judaica com Jerusalém", "É uma atração turística moderna"],
        correctAnswer: 2
    },
    {
        question: "Como Israel aborda questões de conservação ambiental?",
        choices: ["Priorizando a exploração de recursos naturais", "Implementando políticas de conservação e promovendo práticas sustentáveis", "Ignorando completamente as questões ambientais", "Excluindo as preocupações ambientais da agenda política"],
        correctAnswer: 1
    },
    {
        question: "Qual é o conflito mais conhecido envolvendo Israel e seus vizinhos?",
        choices: ["Guerra Civil", "Conflito Árabe-Israelense", "Conflito Étnico", "Conflito Religioso"],
        correctAnswer: 1
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

buildQuiz();
