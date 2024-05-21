var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: 'Como as diferentes etnias na Nigéria contribuem para a diversidade cultural do país? a língua oficial do Egito?',
        choices: ['Cada etnia domina a cultura em diferentes regiões.', 'As etnias competem entre si, resultando em divisões culturais.', 'As diferentes etnias enriquecem a diversidade cultural da Nigéria.', 'A cultura nigeriana é uniforme, independentemente da etnia.'],
        correctAnswer: 2
    },
    {
        question: 'Quais são os efeitos da urbanização rápida na Nigéria em termos de identidade cultural e coesão social?',
        choices: ['A urbanização rápida fortalece a identidade cultural e promove a coesão social.', 'A urbanização rápida não tem impacto na identidade cultural e coesão social. ', 'A urbanização rápida cria uma cultura homogênea e fortalece a coesão social. ', 'A urbanização rápida leva à perda de identidade cultural e aumenta a divisão social.'],
        correctAnswer: 3
    },
    {
        question: 'De que forma o legado colonial na Nigéria influenciou as estruturas sociais e raciais do país?al é uma das mais famosas maravilhas arquitetônicas do Egito Antigo?',
        choices: ['O colonialismo fortaleceu as estruturas sociais tradicionais. ', 'O legado colonial diminuiu as divisões raciais na Nigéria.',  'O legado colonial teve pouco impacto nas estruturas sociais e raciais. ','O colonialismo exacerbou divisões raciais e étnicas.'],
        correctAnswer: 3
    },
    {
        question: 'Quais são os principais desafios enfrentados pelas mulheres na Nigéria em termos de igualdade de gênero?',
        choices: ['A violência de gênero e a discriminação persistem em vários aspectos da vida das mulheres.', 'As mulheres nigerianas desfrutam de igualdade de gênero. ', 'A desigualdade de gênero é um problema exclusivo das áreas rurais. ', 'A igualdade de gênero é alcançada por meio de políticas governamentais eficazes. '],
        correctAnswer: 0
    },
    {
        question: 'Qual é o papel das religiões na formação da identidade cultural da Nigéria?',
        choices: ['As religiões desempenham um papel secundário na identidade cultural.', 'A religião é a única fonte de identidade cultural na Nigéria. ', 'A identidade cultural nigeriana é completamente secular, sem influência religiosa. ', 'As religiões coexistem e influenciam a identidade cultural de maneiras diversas. '],
        correctAnswer: 3
    },
    {
        question: 'Como a migração interna e internacional afeta a composição étnica e cultural da Nigéria?',
        choices: ['A migração internacional leva à homogeneização cultural. ', 'A migração cria uma diversidade étnica e cultural dinâmica no país. ', ' A migração interna fortalece as identidades étnicas locais. ', 'A migração não tem impacto na composição étnica e cultural.'],
        correctAnswer: 1
    },
    {
        question: 'Qual é o impacto da indústria do entretenimento nigeriano, como Nollywood, na projeção da cultura nigeriana globalmente?',
        choices: ['A indústria do entretenimento nigeriano tem pouco impacto internacional. ', 'Nollywood promove estereótipos negativos sobre a cultura nigeriana. ', 'A indústria do entretenimento nigeriano projeta uma imagem positiva e vibrante da cultura do país. ', 'A cultura nigeriana não é representada na indústria do entretenimento. '],
        correctAnswer: 2
    },
    {
        question: 'Como as políticas governamentais na Nigéria abordam questões de diversidade étnica e racial?',
        choices: [' A diversidade étnica e racial é valorizada e promovida nas políticas governamentais. ', 'Não existem políticas governamentais relacionadas à diversidade étnica e racial. ', 'As políticas governamentais ignoram questões de diversidade étnica e racial. ', 'As políticas governamentais promovem a segregação étnica e racial. '],
        correctAnswer: 0
    },
    {
        question: 'Quais são os desafios enfrentados pelas comunidades LGBTQ+ na Nigéria em termos de direitos humanos e inclusão social?',
        choices: [' A Nigéria é um país inclusivo para a comunidade LGBTQ+. ', 'A comunidade LGBTQ+ desfruta de todos os direitos humanos sem discriminação. ', 'A legislação anti-LGBTQ+ cria desafios significativos de direitos humanos e inclusão social. ', 'Os desafios enfrentados pela comunidade LGBTQ+ são exclusivos das áreas urbanas. '],
        correctAnswer: 2
    },
    {
        question: 'Qual é o papel das tradições culturais nigerianas na resolução de conflitos e na promoção da coesão social?',
        choices: ['As tradições culturais são irrelevantes para questões de conflito e coesão social. ', 'As tradições culturais desempenham um papel importante na resolução de conflitos e na promoção da coesão social. ', 'As tradições culturais perpetuam conflitos étnicos e sociais. ', 'As tradições culturais nigerianas não têm impacto na resolução de conflitos. '],
        correctAnswer: 1
    },
    {
        question: 'De que maneira as disparidades econômicas na Nigéria impactam a mobilidade social e as oportunidades de educação?',
        choices: ['As disparidades econômicas não afetam a mobilidade social. ', 'As disparidades econômicas criam oportunidades iguais para todos. ', 'As disparidades econômicas limitam a mobilidade social e o acesso à educação. ', 'Não existem disparidades econômicas na Nigéria. '],
        correctAnswer: 2
    },
    {
        question: 'Como a diáspora nigeriana contribui para a disseminação da cultura e da influência do país globalmente?',
        choices: ['A diáspora nigeriana promove a cultura e a influência do país em todo o mundo. ', 'A diáspora nigeriana enfraquece a influência cultural do país no exterior. ', 'A diáspora nigeriana tem pouco impacto na disseminação da cultura do país. ', 'A diáspora nigeriana é irrelevante para a cultura e a influência do país. '],
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
