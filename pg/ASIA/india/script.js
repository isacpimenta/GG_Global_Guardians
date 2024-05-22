var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: "Quais são as principais religiões praticadas na Índia?",
        choices: [
            "Hinduísmo e Islamismo",
            "Budismo e Judaísmo",
            "Cristianismo e Sikhismo",
            "Zoroastrismo e Jainismo"
        ],
        correctAnswer: 0
    },
    {
        question: "O que é o sistema de castas na Índia e como ele afeta a sociedade?",
        choices: [
            "Um sistema que promove a igualdade e a justiça social",
            "Uma hierarquia social baseada em hereditariedade, que pode resultar em discriminação e desigualdade",
            "Um sistema político de governo",
            "Um sistema de distribuição de terras"
        ],
        correctAnswer: 1
    },
    {
        question: "Quais são algumas das línguas faladas na Índia?",
        choices: [
            "Hindi e Bengali",
            "Inglês e Francês",
            "Mandarim e Russo",
            "Espanhol e Árabe"
        ],
        correctAnswer: 0
    },
    {
        question: "Como o festival de Diwali é celebrado na Índia?",
        choices: [
            "Com desfiles e fogos de artifício",
            "Comendo pratos típicos e dançando",
            "Acendendo lamparinas de óleo e realizando rituais religiosos",
            "Assistindo a filmes de Bollywood"
        ],
        correctAnswer: 2
    },
    {
        question: "Qual é o sistema político da Índia?",
        choices: [
            "Monarquia absoluta",
            "República parlamentar",
            "Ditadura militar",
            "Teocracia"
        ],
        correctAnswer: 1
    },
    {
        question: "Como a Índia aborda questões de igualdade de gênero?",
        choices: [
            "Priorizando os direitos das mulheres em todas as áreas da sociedade",
            "Limitando as oportunidades das mulheres em comparação com os homens",
            "Ignorando completamente as questões de gênero",
            "Excluindo as mulheres de participar na sociedade indiana"
        ],
        correctAnswer: 0
    },
    {
        question: "Quais são alguns dos desafios socioeconômicos enfrentados pela Índia?",
        choices: [
            "Pobreza e desigualdade de renda",
            "Igualdade de oportunidades para todos os cidadãos",
            "Abundância de recursos naturais",
            "Estabilidade econômica absoluta"
        ],
        correctAnswer: 0
    },
    {
        question: "Como a Índia lida com questões de acessibilidade e inclusão para pessoas com deficiência?",
        choices: [
            "Garantindo acesso universal e apoio adequado",
            "Discriminando e excluindo pessoas com deficiência",
            "Ignorando completamente as necessidades das pessoas com deficiência",
            "Oferecendo serviços apenas para certos tipos de deficiência"
        ],
        correctAnswer: 0
    },
    {
        question: "Quais são algumas das contribuições culturais da Índia para o mundo?",
        choices: [
            "Yoga e Ayurveda",
            "Esgrima e escultura em pedra",
            "Pintura a óleo e dança do ventre",
            "Culinária francesa e teatro grego"
        ],
        correctAnswer: 0
    },
    {
        question: "Como a Índia aborda questões de diversidade religiosa e étnica?",
        choices: [
            "Promovendo o monoteísmo",
            "Fomentando o preconceito e a discriminação",
            "Celebrando e respeitando as diferenças religiosas e étnicas",
            "Ignorando completamente a diversidade religiosa e étnica"
        ],
        correctAnswer: 2
    },
    {
        question: "Qual é a importância do sistema de família estendida na sociedade indiana?",
        choices: [
            "Muito pequena",
            "Moderada",
            "Extremamente significativa",
            "Irrelevante"
        ],
        correctAnswer: 2
    },
    {
        question: "Como a Índia lida com questões de acesso à educação e saúde para sua população?",
        choices: [
            "Priorizando o acesso universal à educação e saúde de alta qualidade.",
            "Limitando o acesso à educação e saúde apenas para certos grupos privilegiados.",
            "Ignorando completamente as questões de acesso à educação e saúde.",
            "Privatizando completamente os sistemas de educação e saúde."
        ],
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

buildQuiz();

// Obtém a referência para a imagem da lâmpada
const lampada = document.querySelector('#lampada');

// Obtém a referência para o elemento <aside>
const aside = document.querySelector('aside');

// Define o conteúdo da dica
const dica = '<p>Dica: A Índia é um país de grande diversidade cultural, religiosa e linguística, onde o hinduísmo e o islamismo são as principais religiões. O sistema de castas, apesar de proibido, ainda influencia a sociedade. O país adota uma república parlamentar e enfrenta desafios socioeconômicos como pobreza e desigualdade de renda. A Índia prioriza a igualdade de gênero e busca garantir acesso universal à saúde e educação. Celebrando sua rica diversidade, o país contribui para o mundo com práticas como o yoga e Ayurveda. O apoio à família estendida é fundamental na cultura indiana. Em resumo, a Índia valoriza sua diversidade, promove inclusão e busca melhorar o acesso a serviços essenciais para todos os cidadãos.</p>';

// Adiciona um evento de clique à imagem da lâmpada
lampada.addEventListener('click', () => {
    // Exibe a dica no elemento <aside>
    aside.innerHTML = dica;
});