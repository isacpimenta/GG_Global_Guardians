var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: "Como a Ucrânia preserva e promove sua diversidade cultural?",
        choices: [
            "Não se preocupa com sua diversidade cultural.",
            "Celebra e protege sua diversidade cultural.",
            "Suprime as diferentes culturas.",
            "Não há diversidade cultural na Ucrânia."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o impacto da história política da Ucrânia na identidade nacional?",
        choices: [
            "Não tem impacto significativo.",
            "Reforça a identidade nacional.",
            "Causa divisões na sociedade.",
            "A história política não influencia a identidade nacional."
        ],
        correctAnswer: 1
    },
    {
        question: "Como a educação influencia as oportunidades sociais na Ucrânia?",
        choices: [
            "Não influencia.",
            "Determina amplamente as oportunidades sociais.",
            "Todas as oportunidades são iguais.",
            "A educação é restrita a certos grupos sociais."
        ],
        correctAnswer: 1
    },
    {
        question: "Quais são os desafios enfrentados pela comunidade LGBTQ+ na Ucrânia?",
        choices: [
            "Integração fácil na sociedade.",
            "Discriminação e barreiras no acesso a direitos e serviços.",
            "Todos são aceitos igualmente.",
            "Não há comunidade LGBTQ+ na Ucrânia."
        ],
        correctAnswer: 1
    },
    {
        "question": "Como as políticas de inclusão abordam questões de igualdade racial na Ucrânia?",
        "choices": [
            "Não existem políticas de inclusão.",
            "Promovem a igualdade racial e oportunidades justas.",
            "Exacerbam as disparidades raciais.",
            "A igualdade racial já foi alcançada na Ucrânia."
        ],
        correctAnswer: 0
    },
    {
        question: "Qual é o papel da mídia na formação de percepções raciais na sociedade ucraniana?",
        choices: [
            "Não tem influência.",
            "Reflete e às vezes reforça estereótipos raciais.",
            "Promove apenas a diversidade.",
            "A mídia não aborda questões raciais na Ucrânia."
        ],
        correctAnswer: 1
    },
    {
        question: "Como a classe social afeta o acesso à saúde e educação na Ucrânia?",
        choices: [
            "Todos têm acesso igual.",
            "A classe social determina significativamente o acesso.",
            "A classe social é irrelevante para o acesso a serviços.",
            "A saúde e a educação são privilégios da classe alta."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o impacto das políticas de integração de imigrantes na Ucrânia?",
        choices: [
            "Melhora as condições para todos.",
            "Aprofunda as desigualdades e prejudica as comunidades vulneráveis.",
            "Não há políticas de integração de imigrantes na Ucrânia.",
            "As comunidades imigrantes são excluídas das políticas de integração."
        ],
        correctAnswer: 2
    },
    {
        "question": "Como a Ucrânia aborda questões de inclusão e aceitação da comunidade LGBTQ+?",
        "choices": [
            "Não reconhece a comunidade LGBTQ+.",
            "Tem políticas de inclusão e proteção dos direitos LGBTQ+.",
            "Discrimina abertamente a comunidade LGBTQ+.",
            "A comunidade LGBTQ+ não existe na Ucrânia."
        ],
        "correctAnswer": 2
    },
    {
        question: "Qual é o papel das tradições culturais na identidade nacional ucraniana?",
        choices: [
            "São ignoradas na sociedade ucraniana.",
            "São fundamentais para a identidade nacional.",
            "Não têm impacto na identidade ucraniana.",
            "Causam divisões na sociedade."
        ],
        correctAnswer: 1
    },
    {
        question: "Como as políticas de imigração moldam a diversidade étnica na Ucrânia?",
        choices: [
            "Não há políticas de imigração.",
            "Promovem a diversidade étnica e cultural.",
            "Reduzem a diversidade étnica.",
            "A imigração é proibida na Ucrânia."
        ],
        correctAnswer: 2
    },
    {
        question: "Qual é o impacto das tensões políticas na coesão social da Ucrânia?",
        choices: [
            "Não há impacto.",
            "Aprofunda divisões e prejudica a coesão social.",
            "Fortalece a união social.",
            "A coesão social é irrelevante para as tensões políticas."
        ],
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