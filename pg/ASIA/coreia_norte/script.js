var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: "Quem é o líder supremo atual da Coreia do Norte?",
        choices: [
            "Kim Jong-il",
            "Kim Jong-un",
            "Kim Jong-nam",
            "Kim Jong-chul"
        ],
        correctAnswer: 1
    },
    {
        question: "Como é o sistema de governo na Coreia do Norte?",
        choices: [
            "Democracia multipartidária",
            "Monarquia constitucional",
            "Ditadura totalitária",
            "República presidencialista"
        ],
        correctAnswer: 2
    },
    {
        question: "Qual é o principal partido político na Coreia do Norte?",
        choices: [
            "Partido Comunista da Coreia",
            "Partido dos Trabalhadores da Coreia",
            "Partido Democrático da Coreia",
            "Partido Nacional Democrata da Coreia"
        ],
        correctAnswer: 1
    },
    {
        question: "Como a mídia é controlada na Coreia do Norte?",
        choices: [
            "É livre e independente",
            "É censurada e controlada pelo Estado",
            "É controlada por empresas privadas",
            "Não existe mídia na Coreia do Norte"
        ],
        correctAnswer: 1
    },
    {
        question: "Quais são algumas das práticas culturais tradicionais na Coreia do Norte?",
        choices: [
            "Artes marciais e culinária exótica",
            "Dança do leão e cerimônias de chá",
            "Artesanato em papel e festivais de música folclórica",
            "Propaganda política e culto à personalidade dos líderes"
        ],
        correctAnswer: 3
    },
    {
        question: "Como a Coreia do Norte aborda questões de igualdade de gênero?",
        choices: [
            "Promovendo a igualdade de gênero em todas as áreas da sociedade",
            "Discriminando mulheres e limitando suas oportunidades",
            "Ignorando completamente as questões de gênero",
            "Excluindo as mulheres da participação na sociedade"
        ],
        correctAnswer: 1
    },
    {
        question: "Como a Coreia do Norte lida com questões de liberdade religiosa?",
        choices: [
            "Garantindo liberdade religiosa para todos os cidadãos",
            "Permitindo apenas uma religião oficial e reprimindo outras crenças",
            "Promovendo o diálogo inter-religioso e a tolerância",
            "Não há prática religiosa na Coreia do Norte"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o principal meio de comunicação utilizado pelo governo da Coreia do Norte para transmitir informações à população?",
        choices: [
            "Rádio",
            "Televisão",
            "Internet",
            "Jornais estatais"
        ],
        correctAnswer: 0
    },
    {
        question: "Como são as relações diplomáticas da Coreia do Norte com outros países?",
        choices: [
            "Amigáveis e colaborativas",
            "Tensas e frequentemente hostis",
            "Neutras e pouco envolvidas",
            "Dominadas por influência estrangeira"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o papel das Forças Armadas na sociedade norte-coreana?",
        choices: [
            "Proteger os direitos humanos",
            "Preservar a democracia",
            "Manter o regime e defender o país contra ameaças externas",
            "Promover o desenvolvimento econômico"
        ],
        correctAnswer: 2
    },
    {
        question: "Como é o acesso à internet na Coreia do Norte?",
        choices: [
            "Totalmente aberto e sem restrições",
            "Altamente controlado e censurado pelo governo",
            "Livre, mas monitorado para garantir a segurança",
            "Inexistente, a internet não está disponível para a população"
        ],
        correctAnswer: 1
    },
    {
        question: "Quais são algumas das políticas de controle de natalidade implementadas pelo governo norte-coreano?",
        choices: [
            "Estímulo à reprodução para aumentar a população",
            "Restrições severas ao número de filhos por família",
            "Promoção de planejamento familiar e acesso a métodos contraceptivos",
            "Ausência de políticas de controle de natalidade"
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
const dica = '<p>Dica: Na Coreia do Norte, o controle totalitário do governo se reflete em todos os aspectos da sociedade, desde o regime político até as restrições na mídia e nas liberdades individuais. O culto à personalidade dos líderes, a censura da mídia e a imposição de uma única religião oficial são características marcantes. Além disso, políticas discriminatórias em relação às mulheres e restrições na liberdade de reprodução também são evidentes. Em resumo, a Coreia do Norte é um estado altamente controlado pelo governo, onde as práticas culturais e sociais são moldadas para sustentar o regime e preservar o poder das autoridades.</p>';

// Adiciona um evento de clique à imagem da lâmpada
lampada.addEventListener('click', () => {
    // Exibe a dica no elemento <aside>
    aside.innerHTML = dica;
});