var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: "Qual é a capital do Paquistão?",
        choices: [
            "Islamabad",
            "Karachi",
            "Lahore",
            "Peshawar"
        ],
        correctAnswer: 0
    },
    {
        question: "Quais são as principais religiões praticadas no Paquistão?",
        choices: [
            "Islamismo e Hinduísmo",
            "Cristianismo e Sikhismo",
            "Islamismo e Budismo",
            "Hinduísmo e Judaísmo"
        ],
        correctAnswer: 0
    },
    {
        question: "O que é o Punjabi e qual é sua importância no Paquistão?",
        choices: [
            "Uma dança tradicional; é uma parte vital da cultura e identidade do país.",
            "Uma língua falada; é a língua mais falada no país e desempenha um papel central na identidade nacional.",
            "Uma comida típica; é muito popular entre os paquistaneses.",
            "Uma religião minoritária; representa uma parte significativa da população."
        ],
        correctAnswer: 1
    },
    {
        question: "Como o Paquistão aborda questões de diversidade étnica e racial?",
        choices: [
            "Promovendo a igualdade de direitos para todos os grupos étnicos e raciais.",
            "Discriminando certos grupos étnicos e raciais.",
            "Ignorando completamente a diversidade étnica e racial.",
            "Excluindo grupos étnicos minoritários da participação na sociedade paquistanesa."
        ],
        correctAnswer: 0
    },
    {
        question: "Qual é a língua oficial do Paquistão?",
        choices: [
            "Inglês",
            "Urdu",
            "Punjabi",
            "Sindhi"
        ],
        correctAnswer: 1
    },
    {
        question: "Como o Paquistão aborda questões de acesso à educação e saúde para sua população?",
        choices: [
            "Priorizando o acesso universal à educação e saúde de alta qualidade.",
            "Limitando o acesso à educação e saúde apenas para certos grupos privilegiados.",
            "Ignorando completamente as questões de acesso à educação e saúde.",
            "Privatizando completamente os sistemas de educação e saúde."
        ],
        correctAnswer: 0
    },
    {
        question: "Quais são algumas das principais questões sociais enfrentadas pelo Paquistão?",
        choices: [
            "Desemprego e corrupção",
            "Desigualdade de gênero e casamento infantil",
            "Tráfico de drogas e criminalidade",
            "Intolerância religiosa e conflitos étnicos"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é a importância do Rio Indo para o Paquistão?",
        choices: [
            "É uma importante fonte de turismo",
            "É um rio sagrado para muitas religiões",
            "É essencial para a agricultura e fornecimento de água no país",
            "É o principal meio de transporte de mercadorias no país"
        ],
        correctAnswer: 2
    },
    {
        question: "Como o Paquistão lida com questões de conservação ambiental?",
        choices: [
            "Priorizando a exploração de recursos naturais",
            "Implementando políticas de conservação e promovendo práticas sustentáveis",
            "Ignorando completamente as questões ambientais",
            "Excluindo as preocupações ambientais da agenda política"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o sistema de governo do Paquistão?",
        choices: [
            "República presidencialista",
            "Monarquia constitucional",
            "República parlamentar",
            "Ditadura militar"
        ],
        correctAnswer: 2
    },
    {
        question: "Como o Paquistão lida com questões de igualdade de gênero?",
        choices: [
            "Priorizando os direitos das mulheres em todas as áreas da sociedade",
            "Limitando as oportunidades das mulheres em comparação com os homens",
            "Ignorando completamente as questões de gênero",
            "Excluindo as mulheres de participar na sociedade paquistanesa"
        ],
        correctAnswer: 0
    },
    {
        question: "Quais são algumas das contribuições culturais do Paquistão para o mundo?",
        choices: [
            "Arte renascentista e música clássica europeia",
            "Dança do ventre e tapete persa",
            "Arte do origami e cerimônia do chá japonesa",
            "Arte islâmica e música qawwali"
        ],
        correctAnswer: 3
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
const dica = '<p>Dica: O Paquistão, com sua capital em Islamabad, é uma nação diversa, onde o islamismo é a religião predominante. Sua língua oficial é o Urdu, e a língua Punjabi desempenha um papel central na identidade nacional. O país prioriza acesso universal à educação e saúde, enfrenta desafios como desigualdade de gênero e casamento infantil e valoriza o Rio Indo por sua importância agrícola. O governo é uma república parlamentar, e o Paquistão promove políticas de conservação ambiental. Além disso, enfatiza os direitos das mulheres e contribui culturalmente com a arte islâmica e a música qawwali.</p>';

// Adiciona um evento de clique à imagem da lâmpada
lampada.addEventListener('click', () => {
    // Exibe a dica no elemento <aside>
    aside.innerHTML = dica;
});