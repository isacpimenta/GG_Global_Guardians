var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: "Como a cultura mexicana reflete a diversidade étnica do país?",
        choices: [
            "Minimamente.",
            "De forma limitada.",
            "De maneira significativa.",
            "De maneira excludente."
        ],
        correctAnswer: 2
    },
    {
        question: "Quais são os principais desafios enfrentados pelas comunidades indígenas no México?",
        choices: [
            "Ausência de desafios.",
            "Preservação cultural.",
            "Total integração na sociedade.",
            "Discriminação e marginalização."
        ],
        correctAnswer: 3
    },
    {
        question: "Como a história colonial do México influenciou as dinâmicas raciais e sociais contemporâneas?",
        choices: [
            "Não tem influência.",
            "Reduziu desigualdades raciais.",
            "Perpetuou hierarquias raciais.",
            "Fomentou a igualdade social."
        ],
        correctAnswer: 2
    },
    {
        question: "Quais são os impactos da migração mexicana para os Estados Unidos na sociedade mexicana?",
        choices: [
            "Nenhum impacto.",
            "Melhoria das condições econômicas.",
            "Separação de famílias e perda de mão de obra.",
            "Aumento da estabilidade social."
        ],
        correctAnswer: 2
    },
    {
        question: "Como a música mexicana influenciou a cultura global?",
        choices: [
            "Não teve influência.",
            "Apenas no entretenimento local.",
            "Amplamente reconhecida e apreciada internacionalmente.",
            "Limitada a nichos culturais."
        ],
        correctAnswer: 2
    },
    {
        question: "Quais são os desafios enfrentados pelas mulheres no México em termos de igualdade de gênero?",
        choices: [
            "Igualdade plena alcançada.",
            "Discriminação de gênero.",
            "Total inclusão.",
            "Ausência de desafios."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o impacto do narcotráfico na sociedade mexicana?",
        choices: [
            "Não tem impacto significativo.",
            "Aumento da violência e instabilidade.",
            "Melhoria das condições econômicas.",
            "Aumento da coesão social."
        ],
        correctAnswer: 1
    },
    {
        question: "Como o sistema educacional mexicano aborda as questões de diversidade e inclusão?",
        choices: [
            "Ignora essas questões.",
            "Promove inclusão total.",
            "Aborda superficialmente.",
            "Não há sistema educacional."
        ],
        correctAnswer: 2
    },
    {
        question: "Quais são os desafios enfrentados pelos jovens no México em termos de acesso à educação e oportunidades de emprego?",
        choices: [
            "Acesso igualitário garantido.",
            "Restrições de acesso à educação e emprego.",
            "Total disponibilidade de oportunidades.",
            "Ausência de desafios para os jovens."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o papel das tradições culinárias mexicanas na identidade cultural do país?",
        choices: [
            "Sem relevância cultural.",
            "Contribuição marginal.",
            "Fundamental para a identidade nacional.",
            "Limitada a certas regiões."
        ],
        correctAnswer: 2
    },
    {
        question: "Como as políticas governamentais no México abordam a questão da pobreza e desigualdade social?",
        choices: [
            "Sem políticas específicas.",
            "Reduzem significativamente a pobreza.",
            "Agravam desigualdades sociais.",
            "Promovem igualdade plena."
        ],
        correctAnswer: 2
    },
    {
        question: "Qual é o impacto do turismo na cultura e economia do México?",
        choices: [
            "Nenhum impacto.",
            "Benefícios exclusivos para o setor turístico.",
            "Contribui para a preservação cultural e crescimento econômico.",
            "Reduz a diversidade cultural."
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
