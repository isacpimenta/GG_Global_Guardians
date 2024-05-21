var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: 'Quais são os principais elementos da cultura aborígine na Austrália?',
        choices: ['Música, arte, dança e histórias tradicionais.','Não há influência aborígine na cultura australiana. ','A cultura aborígine é suprimida na Austrália. ','A cultura aborígine não é relevante para a Austrália contemporânea. '],
        correctAnswer: 0
    },
    {
        question: 'Como a Austrália aborda a questão da imigração e diversidade étnica?',
        choices: ['Excluindo imigrantes e promovendo a homogeneidade étnica. ','Não há imigração na Austrália.','A imigração é limitada a certos grupos étnicos. ','Acolhendo imigrantes e celebrando a diversidade cultural. '],
        correctAnswer: 3
    },
    {
        question: 'Qual é o papel das mulheres na sociedade australiana contemporânea?',
        choices:['Limitado a tarefas domésticas. ','As mulheres não têm papel na sociedade australiana. ','Ativamente envolvidas em todos os aspectos da vida social e econômica. ',' As mulheres têm direitos limitados na Austrália. '],
        correctAnswer: 2
    },
    {
        question: 'Como a Austrália enfrenta as mudanças climáticas e protege o meio ambiente?',
        choices: ['Ignorando as mudanças climáticas e explorando recursos naturais sem restrições.','Implementando políticas de conservação e investindo em energias renováveis. ','As mudanças climáticas não são uma preocupação na Austrália. ','Protegendo o meio ambiente apenas em áreas urbanas.'],
        correctAnswer: 1
    },
    {
        question: 'Quais são os desafios enfrentados pelos povos indígenas na Austrália hoje?',
        choices: ['Todos os desafios foram resolvidos. ','Os povos indígenas não enfrentam desafios na Austrália. ',' Discriminação, falta de acesso a serviços básicos e perda de terras tradicionais. ','A cultura indígena não é relevante na Austrália contemporânea. '],
        correctAnswer: 2
    },
    {
        question: 'Como a Austrália aborda questões de igualdade de direitos para a comunidade LGBTQ+?',
        choices:['Discriminando abertamente a comunidade LGBTQ+. ','Protegendo os direitos e promovendo a igualdade para a comunidade LGBTQ+. ','A comunidade LGBTQ+ não tem direitos na Austrália. ','Os direitos da comunidade LGBTQ+ são limitados a certas áreas urbanas. '],
        correctAnswer: 1
    },
    {
        question: 'Qual é a importância do esporte na cultura australiana?',
        choices: ['O esporte não é valorizado na Austrália. ','A Austrália não possui tradição esportiva. ','O esporte é exclusivo para certos grupos sociais na Austrália. ','O esporte desempenha um papel significativo na identidade e coesão social. '],
        correctAnswer: 3
    },
    {
        question: 'Como a Austrália lida com a questão da justiça social e direitos humanos?',
        choices: ['Ignorando questões de justiça social e direitos humanos. ','Promovendo políticas inclusivas e respeitando os direitos humanos. ','A justiça social e os direitos humanos não são preocupações na Austrália. ','A Austrália viola sistematicamente os direitos humanos. '],
        correctAnswer: 1
    },
    {
        question: 'Qual é o impacto do turismo na economia e cultura da Austrália?',
        choices:['O turismo destrói a cultura australiana. ','O turismo não tem impacto na Austrália.','Contribui significativamente para a economia e promove a diversidade cultural. ','A Austrália proíbe o turismo em suas terras. '],
        correctAnswer: 2
    },
    {
        question: 'Como a Austrália aborda questões de acessibilidade e igualdade na educação?',
        choices: ['A educação é exclusiva para certas classes sociais.','Garantindo acesso igualitário à educação e investindo em programas de inclusão.','A educação não é uma prioridade na Austrália. ',' A educação é restrita a certas áreas geográficas. '],
        correctAnswer: 1
    },
    {
        question: 'Quais são os efeitos da urbanização na vida e cultura das comunidades rurais na Austrália?',
        choices: ['Não há comunidades rurais na Austrália.','A urbanização não afeta as comunidades rurais. ','A urbanização fortalece as comunidades rurais.',' As comunidades rurais enfrentam perda de identidade e recursos. '],
        correctAnswer: 3
    },
    {
        question: 'Como a Austrália aborda questões de sustentabilidade ambiental e conservação da fauna e flora?',
        choices:['Implementando políticas de conservação e proteção ambiental.','A fauna e a flora não são importantes para a Austrália. ','Priorizando o desenvolvimento econômico em detrimento do meio ambiente.','Ignorando a conservação ambiental.'],
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
