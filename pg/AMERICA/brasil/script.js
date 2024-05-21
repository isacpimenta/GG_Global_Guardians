var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: "Qual é o papel das escolas de samba no contexto cultural brasileiro?",
        choices: [
            "Organização de eventos esportivos.",
            "Promoção da culinária local.",
            "Preservação das tradições afro-brasileiras.",
            "Propagação de estilos musicais estrangeiros."
        ],
        correctAnswer: 2
    },
    {
        question: "O que é o movimento 'Tropicalismo' na música brasileira?",
        choices: [
            "Movimento de independência política.",
            "Manifestação artística baseada em temas indígenas.",
            "Movimento cultural que mistura influências diversas.",
            "Estilo musical exclusivo do nordeste brasileiro."
        ],
        correctAnswer: 2
    },
    {
        question: "Qual é o significado histórico da 'Lei Áurea' no Brasil?",
        choices: [
            "Abolição da escravidão.",
            "Lei de proteção ambiental.",
            "Legislação trabalhista.",
            "Lei de imigração."
        ],
        correctAnswer: 0
    },
    {
        question: "Como as festas religiosas, como o Carnaval e as festas juninas, refletem a diversidade cultural do Brasil?",
        choices: [
            "Celebrando apenas tradições europeias.",
            "Ignorando influências africanas e indígenas.",
            "Integrando elementos culturais de diversas origens.",
            "Limitando-se a práticas religiosas cristãs."
        ],
        correctAnswer: 2
    },
    {
        question: "Quais são os principais desafios enfrentados pelas comunidades quilombolas no Brasil?",
        choices: [
            "Reconhecimento de sua identidade étnica.",
            "Acesso facilitado à terra e recursos.",
            "Ausência de discriminação e preconceito.",
            "Integração total à sociedade dominante."
        ],
        correctAnswer: 0
    },
    {
        question: "O que são as Unidades de Polícia Pacificadora (UPPs) e qual é o seu propósito no Brasil?",
        choices: [
            "Policiamento comunitário em áreas de risco.",
            "Incentivo ao consumo de drogas ilícitas.",
            "Movimentos religiosos de pacificação.",
            "Proteção ambiental em áreas urbanas."
        ],
        correctAnswer: 0
    },
    {
        question: "Como as políticas de cotas raciais têm influenciado a educação superior no Brasil?",
        choices: [
            "Aumentando a segregação racial nas universidades.",
            "Diminuindo a qualidade da educação.",
            "Promovendo a inclusão de grupos historicamente marginalizados.",
            "Reforçando a discriminação racial no ensino."
        ],
        correctAnswer: 2
    },
    {
        question: "Qual é o impacto das telenovelas brasileiras na representação de diversidade racial e social?",
        choices: [
            "Reforçam estereótipos e preconceitos.",
            "Ignoram a diversidade cultural do país.",
            "Promovem a igualdade de gênero.",
            "Representam com precisão a realidade brasileira."
        ],
        correctAnswer: 0
    },
    {
        question: "Como a questão ambiental está relacionada às comunidades ribeirinhas na região amazônica?",
        choices: [
            "Não há relação entre comunidades ribeirinhas e questões ambientais.",
            "Dependência dos recursos naturais para subsistência.",
            "Desconhecimento dos problemas ambientais.",
            "Rivalidade com outras comunidades."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é a importância do 'Dia da Consciência Negra' no Brasil?",
        choices: [
            "Celebração da colonização europeia.",
            "Reconhecimento das contribuições da população negra.",
            "Promoção da supremacia branca.",
            "Ignorância das questões raciais."
        ],
        correctAnswer: 1
    },
    {
        question: "Como a música brasileira tem sido uma ferramenta de protesto e resistência política?",
        choices: [
            "Ignorando questões sociais e políticas.",
            "Por meio de letras que criticam o status quo.",
            "Promovendo a opressão e discriminação.",
            "Limitando-se a gêneros musicais tradicionais."
        ],
        correctAnswer: 1
    },
    {
        question: "Quais são os desafios enfrentados pelos povos indígenas do Brasil na luta por seus direitos territoriais?",
        choices: [
            "Ausência de ameaças externas.",
            "Proteção garantida pelo governo.",
            "Conflitos por terras e destruição do meio ambiente.",
            "Total integração à sociedade brasileira."
        ],
        correctAnswer: 2
    }
]
;

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
