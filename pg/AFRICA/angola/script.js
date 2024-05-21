var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: 'Como as influências culturais africanas, portuguesas e indígenas se manifestam na identidade cultural de Angola?',
        choices: ['Todas as influências contribuem para a riqueza cultural de Angola. ', 'As influências africanas são predominantes.', 'Não há influências culturais significativas em Angola.', 'Apenas as influências portuguesas são significativas.'],
        correctAnswer: 0
    },
    {
        question: 'Quais são os principais desafios enfrentados pelas comunidades indígenas em Angola em relação à preservação de suas tradições e territórios?',
        choices: ['Enfrentam pressões de desenvolvimento e perda de território. ', 'Não enfrentam desafios significativos.', 'Estão totalmente integradas à sociedade angolana.', 'Desistiram de preservar suas tradições e territórios.'],
        correctAnswer: 0
    },
    {
        question: 'De que forma as disparidades econômicas em Angola refletem desigualdades sociais e raciais?',
        choices: ['As disparidades econômicas perpetuam desigualdades sociais e raciais. ', 'Não há disparidades econômicas em Angola. ', 'As disparidades econômicas são irrelevantes para questões sociais e raciais. ', 'As disparidades econômicas são resultado de mérito individual. '],
        correctAnswer: 0
    },
    {
        question: 'Qual é o papel da música tradicional angolana na expressão cultural e identidade nacional?',
        choices: ['A música tradicional angolana foi substituída por influências estrangeiras.', 'A música tradicional é fundamental para a identidade nacional de Angola. ', 'A música tradicional angolana não tem importância cultural.', 'A música tradicional é preservada apenas em comunidades isoladas. '],
        correctAnswer: 1
    },
    {
        question: 'Como as políticas de educação em Angola abordam questões de diversidade cultural e inclusão social?',
        choices: ['Não existem políticas educacionais relacionadas à diversidade. ', 'As políticas educacionais ignoram as questões de diversidade cultural. ', 'As políticas educacionais promovem a assimilação cultural.', 'As políticas educacionais priorizam a valorização da diversidade cultural. '],
        correctAnswer: 3
    },
    {
        question: 'Qual é o impacto da religião na sociedade angolana e como ela influencia as relações sociais?',
        choices: ['A religião não tem impacto significativo.', 'A religião é exclusivamente uma questão pessoal e não influencia as relações sociais.', 'A religião promove a coesão social em comunidades locais. ', 'A religião é fonte de divisão na sociedade. '],
        correctAnswer: 2
    },
    {
        question: 'Como as políticas governamentais em Angola abordam questões de igualdade racial e étnica?',
        choices: ['As políticas governamentais exacerbam divisões étnicas e raciais.', 'As políticas governamentais promovem a igualdade racial.', 'As políticas governamentais ignoram questões de igualdade racial.', 'Não existem políticas governamentais relacionadas à igualdade racial.'],
        correctAnswer: 1
    },
    {
        question: 'Quais são os desafios enfrentados pela população afro-angolana em termos de reconhecimento cultural e direitos sociais?',
        choices: ['A população afro-angolana não existe na sociedade angolana.', 'A população afro-angolana é totalmente integrada.', 'A população afro-angolana não enfrenta desafios.', 'A população afro-angolana enfrenta discriminação e marginalização.'],
        correctAnswer: 3
    },
    {
        question: 'Como as questões ambientais em Angola afetam as comunidades locais e sua relação com o meio ambiente?',
        choices: ['A degradação ambiental ameaça os territórios e o modo de vida das comunidades. ', 'As comunidades locais são imunes a questões ambientais. ', 'Não existem problemas ambientais em Angola.', 'As comunidades locais não têm interesse na preservação ambiental.'],
        correctAnswer: 0
    },
    {
        question: 'Qual é a importância das tradições culinárias angolanas na promoção da identidade cultural?',
        choices: ['A culinária angolana é influenciada exclusivamente por culturas estrangeiras. ', 'A culinária angolana é fundamental para a identidade nacional.', 'A culinária angolana não tem importância cultural.', 'A culinária angolana é ignorada pela maioria da população.'],
        correctAnswer: 1
    },
    {
        question: 'De que maneira as políticas governamentais em Angola abordam a questão da diversidade cultural nas instituições públicas?',
        choices: ['A diversidade cultural é ignorada nas políticas governamentais.', 'As políticas governamentais priorizam a assimilação cultural.', 'A diversidade cultural é valorizada e promovida em todas as instituições públicas. ', 'A diversidade cultural é ignorada nas políticas governamentais.'],
        correctAnswer: 2
    },
    {
        question: 'Como as festividades tradicionais em Angola promovem a coesão social e celebram a diversidade cultural do país?',
        choices: ['As festividades tradicionais promovem a unidade nacional. ', 'As festividades tradicionais destacam a diversidade cultural de Angola. ', 'As festividades tradicionais não têm impacto na coesão social.', 'As festividades tradicionais são desprezadas pela maioria da população.'],
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
            answerContainers[questionNumber].getElementsByTagName('label')[correctIndex].style.backgroundColor = 'green';
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
