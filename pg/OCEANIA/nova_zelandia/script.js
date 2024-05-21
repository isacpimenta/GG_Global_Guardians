var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: 'Como as tradições maori influenciam as práticas culturais contemporâneas na Nova Zelândia?',
        choices: ['As tradições maori são desencorajadas e ignoradas.','A cultura maori é vista como uma ameaça à identidade neozelandesa. ','As tradições maori são valorizadas e integradas em várias áreas da sociedade. ','As tradições maori não têm influência na cultura contemporânea.'],
        correctAnswer: 2
    },
    {
        question: 'Como a Nova Zelândia aborda questões de igualdade de gênero e empoderamento das mulheres?',
        choices: ['Implementando políticas para promover a igualdade de gênero e oportunidades para as mulheres. ','As mulheres são excluídas de participar na sociedade neozelandesa. ','A igualdade de gênero não é uma prioridade na Nova Zelândia. ','Desfavorecendo as mulheres em todos os aspectos sociais.'],
        correctAnswer: 0
    },
    {
        question: 'Qual é o papel da Nova Zelândia na cena internacional em relação aos direitos humanos e justiça social?',
        choices: ['A justiça social e os direitos humanos não são considerações importantes para a Nova Zelândia. ','A Nova Zelândia não se envolve em questões de direitos humanos e justiça social. ','A Nova Zelândia viola sistematicamente os direitos humanos. ','A Nova Zelândia defende ativamente os direitos humanos e a justiça social em nível global.'],
        correctAnswer: 3
    },
    {
        question: 'Como a Nova Zelândia aborda a questão da diversidade étnica e cultural em sua política de imigração?',
        choices: ['A imigração é permitida apenas para grupos étnicos específicos na Nova Zelândia. ','Celebrando a diversidade étnica e cultural através de políticas inclusivas de imigração. ','A Nova Zelândia não recebe imigrantes de diferentes origens étnicas. ','Restringindo a imigração para manter a homogeneidade étnica. '],
        correctAnswer: 1
    },
    {
        question: 'Quais são os principais desafios enfrentados pelos povos indígenas na Nova Zelândia hoje?',
        choices: ['A cultura indígena não é relevante para a Nova Zelândia contemporânea. ','Todos os povos indígenas têm uma vida próspera na Nova Zelândia. ','Discriminação, perda de identidade cultural e desigualdades socioeconômicas. ','Os povos indígenas não enfrentam desafios significativos na Nova Zelândia. '],
        correctAnswer: 2
    },
    {
        question: 'Qual é a atitude da Nova Zelândia em relação às mudanças climáticas e ao meio ambiente?',
        choices: ['A Nova Zelândia culpa os países vizinhos pelas mudanças climáticas. ','As mudanças climáticas não são uma preocupação na Nova Zelândia. ','Ignorando as mudanças climáticas e promovendo a exploração ambiental. ','Implementando políticas para combater as mudanças climáticas e proteger o meio ambiente.'],
        correctAnswer: 3
    },
    {
        question: 'Como a Nova Zelândia promove a igualdade de oportunidades na educação?',
        choices: ['A educação não é uma prioridade na Nova Zelândia. ','Garantindo acesso igualitário à educação e investindo em programas de inclusão. ','A Nova Zelândia não oferece oportunidades educacionais para todos. ','Limitando o acesso à educação para determinados grupos sociais. '],
        correctAnswer: 1
    },
    {
        question: 'Como a Nova Zelândia enfrenta os desafios relacionados à habitação e ao sem-teto?',
        choices: ['A Nova Zelândia não tem problemas de habitação.','A habitação é reservada apenas para cidadãos de certas classes sociais. ','Implementando políticas para garantir habitação adequada e reduzir o número de pessoas sem-teto. ','Ignorando os problemas de habitação e sem-teto. '],
        correctAnswer: 2
    },
    {
        question: 'Como a Nova Zelândia aborda questões de acessibilidade e igualdade na saúde?',
        choices: ['Garantindo acesso universal à saúde e investindo em serviços de saúde acessíveis.','A Nova Zelândia não oferece serviços de saúde para todos os seus cidadãos.','Acesso à saúde é limitado a determinados grupos sociais.','A saúde não é uma prioridade na Nova Zelândia.'],
        correctAnswer: 0
    },
    {
        question: 'Qual é a atitude da Nova Zelândia em relação à conservação da vida selvagem e biodiversidade?',
        choices: ['Priorizando a conservação e implementando medidas para proteger a vida selvagem e a biodiversidade. ','A vida selvagem e a biodiversidade são exploradas para benefício econômico. ','A Nova Zelândia não tem preocupações com a conservação da vida selvagem. ','Ignorando a conservação da vida selvagem e biodiversidade.'],
        correctAnswer: 0
    },
    {
        question: 'Como a Nova Zelândia promove a inclusão e participação das comunidades LGBTQ+?',
        choices: ['A Nova Zelândia não reconhece a existência das comunidades LGBTQ+.','Discriminando abertamente as comunidades LGBTQ+.','As comunidades LGBTQ+ são proibidas de participar na sociedade neozelandesa.','Implementando políticas e leis para proteger os direitos e promover a inclusão das comunidades LGBTQ+.'],
        correctAnswer: 3
    },
    {
        question: 'Como a Nova Zelândia aborda questões de justiça social e combate à pobreza?',
        choices: ['Ignorando questões de justiça social e pobreza.',' Implementando políticas para reduzir a desigualdade e promover o bem-estar social.','A pobreza não é uma preocupação na Nova Zelândia. ','A Nova Zelândia marginaliza e exclui grupos sociais em situação de pobreza. '],
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
