var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: 'Como a Alemanha aborda questões de diversidade étnica e racial em sua sociedade?',
        choices: ['A Alemanha promove ativamente a segregação étnica e racial.', 'A diversidade étnica e racial é ignorada na Alemanha.', 'A Alemanha valoriza a diversidade étnica e racial e implementa políticas inclusivas.', 'A Alemanha não tem população étnica ou racialmente diversificada.'],
        correctAnswer: 2
    },
    
    {
        question: 'Como a história do nazismo continua a influenciar as dinâmicas sociais e políticas na Alemanha contemporânea?',
        choices: ['O nazismo não tem impacto significativo nas dinâmicas contemporâneas da Alemanha.', 'A história do nazismo é usada para promover a intolerância e o nacionalismo.', 'O nazismo gerou uma reflexão profunda sobre tolerância e direitos humanos na Alemanha.', 'A história do nazismo é completamente esquecida na Alemanha atual.'],
        correctAnswer: 2
    },
    
    {
        question: 'Qual é o papel das políticas de imigração na Alemanha em relação à integração de comunidades estrangeiras?',
        choices: ['A Alemanha não possui políticas de imigração.', 'As políticas de imigração na Alemanha promovem a segregação das comunidades estrangeiras.', 'As políticas de imigração facilitam a integração e promovem a diversidade na Alemanha.', 'A imigração é proibida na Alemanha.'],
        correctAnswer: 2
    },
    
    {
        question: 'Como as políticas educacionais na Alemanha abordam questões de inclusão e igualdade de oportunidades?',
        choices: ['As políticas educacionais na Alemanha discriminam minorias étnicas e raciais.', 'A educação na Alemanha é reservada apenas para cidadãos alemães.', 'As políticas educacionais promovem a inclusão e a igualdade de oportunidades para todos os grupos.', 'A Alemanha não investe em educação.'],
        correctAnswer: 2
    },
    
    {
        question: 'Qual é o impacto do multiculturalismo na identidade nacional alemã?',
        choices: ['O multiculturalismo fortalece a identidade nacional alemã.', 'O multiculturalismo enfraquece a identidade nacional alemã.', 'A identidade nacional alemã é homogênea, sem influência do multiculturalismo.', 'O multiculturalismo é uma política inexistente na Alemanha.'],
        correctAnswer: 0
    },
    
    {
        question: 'Como a Alemanha lida com a discriminação racial e étnica em suas instituições públicas?',
        choices: ['A discriminação racial e étnica é tolerada e até mesmo promovida nas instituições públicas alemãs.', 'A Alemanha não enfrenta problemas de discriminação racial e étnica em suas instituições públicas.', 'A Alemanha implementa políticas para combater a discriminação racial e étnica em suas instituições públicas.', 'A discriminação racial e étnica é legalizada na Alemanha.'],
        correctAnswer: 2
    },
    
    {
        question: 'Quais são os desafios enfrentados pelas comunidades imigrantes na Alemanha em termos de acesso ao mercado de trabalho?',
        choices: ['As comunidades imigrantes têm acesso preferencial ao mercado de trabalho na Alemanha.', 'As comunidades imigrantes enfrentam discriminação e obstáculos no acesso ao mercado de trabalho.', 'O mercado de trabalho na Alemanha está fechado para todas as comunidades imigrantes.', 'As comunidades imigrantes não estão interessadas em integrar-se ao mercado de trabalho alemão.'],
        correctAnswer: 1
    },
    
    {
        question: 'Qual é o papel das políticas de habitação na promoção da diversidade e coesão social na Alemanha?',
        choices: ['As políticas de habitação na Alemanha promovem a segregação e a homogeneidade.', 'As políticas de habitação na Alemanha ignoram questões de diversidade e coesão social.', 'As políticas de habitação promovem a diversidade e a coesão social ao facilitar a integração de diferentes grupos.', 'A Alemanha não tem políticas de habitação.'],
        correctAnswer: 2
    },
    
    {
        question: 'Como a arte e a cultura alemãs abordam questões de identidade, diversidade e inclusão?',
        choices: ['A arte e a cultura alemãs são exclusivas para determinados grupos étnicos.', 'A arte e a cultura alemãs não refletem questões de identidade, diversidade ou inclusão.', 'A arte e a cultura alemãs são espaços de expressão que refletem e promovem a diversidade e inclusão.', 'A arte e a cultura alemãs são censuradas para evitar questões de identidade e diversidade.'],
        correctAnswer: 2
    },
    
    {
        question: 'Quais são os efeitos do envelhecimento da população alemã nas políticas sociais e econômicas do país?',
        choices: ['O envelhecimento da população não tem impacto nas políticas sociais e econômicas da Alemanha.', 'O envelhecimento da população gera pressão sobre os sistemas de seguridade social e saúde.', 'O envelhecimento da população leva à redução da discriminação e aumento da igualdade.', 'A Alemanha não enfrenta problemas relacionados ao envelhecimento da população.'],
        correctAnswer: 1
    },
    
    {
        question: 'Como a Alemanha lida com questões de acessibilidade e inclusão para pessoas com deficiência?',
        choices: ['A Alemanha não possui políticas de acessibilidade e inclusão para pessoas com deficiência.', 'A acessibilidade e inclusão para pessoas com deficiência são prioridades nas políticas públicas alemãs.', 'Pessoas com deficiência são excluídas da sociedade alemã.', 'A acessibilidade e inclusão para pessoas com deficiência são consideradas irrelevantes na Alemanha.'],
        correctAnswer: 1
    },
    
    {
        question: 'Qual é o impacto da União Europeia na promoção da coesão social e cultural na Alemanha?',
        choices: ['A União Europeia não tem impacto na coesão social e cultural na Alemanha.', 'A União Europeia promove a homogeneização cultural na Alemanha.', 'A União Europeia fortalece a diversidade e promove a cooperação cultural na Alemanha.', 'A Alemanha não faz parte da União Europeia.'],
        correctAnswer: 2
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
