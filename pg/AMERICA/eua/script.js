var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: "Qual foi o impacto do Movimento dos Direitos Civis liderado por Martin Luther King Jr.?",
        choices: [
            "Abolição da escravidão.",
            "Aumento das disparidades raciais.",
            "Promoção da igualdade racial.",
            "Exclusão das minorias."
        ],
        correctAnswer: 2
    },
    {
        question: "Quais são os principais desafios enfrentados pela comunidade afro-americana nos Estados Unidos hoje?",
        choices: [
            "Domínio político.",
            "Supremacia racial.",
            "Desigualdades econômicas e sociais.",
            "Acesso igualitário à educação."
        ],
        correctAnswer: 2
    },
    {
        question: "Como a imigração contribui para a diversidade cultural nos Estados Unidos?",
        choices: [
            "Redução da diversidade.",
            "Homogeneização cultural.",
            "Aumento da diversidade.",
            "Exclusão de minorias."
        ],
        correctAnswer: 2
    },
    {
        question: "O que representa o movimento Black Lives Matter?",
        choices: [
            "Discriminação racial.",
            "A luta pelos direitos dos latinos.",
            "A luta contra a brutalidade policial e a desigualdade racial.",
            "A promoção do supremacismo branco."
        ],
        correctAnswer: 2
    },
    {
        question: "Quais são os efeitos das políticas de encarceramento em massa nos Estados Unidos?",
        choices: [
            "Redução da criminalidade.",
            "Aumento da igualdade social.",
            "Disparidades raciais no sistema de justiça.",
            "Promoção da justiça social."
        ],
        correctAnswer: 2
    },
    {
        question: "Como a cultura pop influencia a percepção das minorias nos Estados Unidos?",
        choices: [
            "Reduzindo estereótipos.",
            "Celebrando a diversidade.",
            "Reforçando estereótipos.",
            "Promovendo a igualdade."
        ],
        correctAnswer: 2
    },
    {
        question: "Qual é a importância da educação na redução das desigualdades sociais nos Estados Unidos?",
        choices: [
            "Acesso igualitário.",
            "Exclusão educacional.",
            "Aumento das disparidades.",
            "Desenvolvimento cultural."
        ],
        correctAnswer: 0
    },
    {
        question: "Como a gentrificação afeta as comunidades de minorias nos Estados Unidos?",
        choices: [
            "Aumenta a diversidade.",
            "Preserva a identidade cultural.",
            "Causa deslocamento e marginalização.",
            "Promove a inclusão social."
        ],
        correctAnswer: 2
    },
    {
        question: "Quais são os efeitos do sistema de saúde dos Estados Unidos sobre as comunidades de baixa renda e minorias?",
        choices: [
            "Acesso igualitário.",
            "Melhoria na qualidade de vida.",
            "Disparidades de saúde.",
            "Universalização dos serviços de saúde."
        ],
        correctAnswer: 2
    },
    {
        question: "Qual é a relação entre o sistema político dos Estados Unidos e as questões raciais?",
        choices: [
            "Promoção da igualdade racial.",
            "Supressão dos direitos das minorias.",
            "Inclusão política.",
            "Proteção dos direitos civis."
        ],
        correctAnswer: 1
    },
    {
        question: "Como as políticas de habitação afetam as comunidades de minorias nos Estados Unidos?",
        choices: [
            "Promoção da igualdade habitacional.",
            "Aumento da segregação residencial.",
            "Integração social.",
            "Redução das disparidades de moradia."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é a importância da representatividade política das minorias nos Estados Unidos?",
        choices: [
            "Fortalecimento do sistema democrático.",
            "Domínio político de grupos étnicos.",
            "Exclusão política.",
            "Redução da diversidade política."
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
const dica = '<p>Dica: Reconhecer e enfrentar as desigualdades sociais, econômicas e raciais é crucial para promover a justiça e a inclusão nos Estados Unidos. Isso envolve desde a luta contra a brutalidade policial até a promoção do acesso igualitário à educação, saúde e habitação, além da importância da representatividade política das minorias. A cultura pop e as políticas públicas também desempenham papéis importantes na percepção e na superação dos estereótipos e injustiças.</p>';

// Adiciona um evento de clique à imagem da lâmpada
lampada.addEventListener('click', () => {
    // Exibe a dica no elemento <aside>
    aside.innerHTML = dica;
});

