var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: 'Quais são algumas das tradições culturais mais importantes de Tuvalu?',
        choices: ['Danças de hula e leis do tiki. ','Canções de ukulele e culinária picante. ','Danças tradicionais e canções polinésias. ','Celebrações de carnaval e práticas de yoga.'],
        correctAnswer: 2
    },
    {
        question: 'Como é a estrutura familiar típica em Tuvalu?',
        choices: ['Famílias nucleares com pais e filhos.', 'Famílias extensas com múltiplas gerações vivendo juntas.', 'Famílias compostas apenas por irmãos.', 'Famílias uniparentais lideradas por mulheres.'],
        correctAnswer: 1
    },
    
    {
        question: 'Tuvalu é composto por quantos atóis?',
        choices: ['5', '9', '13', '20'],
        correctAnswer: 1
    },
    
    {
        question: 'Como os habitantes de Tuvalu se sustentam principalmente?',
        choices: ['Agricultura e pesca.', 'Indústria de tecnologia.', 'Mineração de minerais.', 'Serviços financeiros.'],
        correctAnswer: 0
    },
    
    {
        question: 'Como Tuvalu celebra suas tradições e cultura?',
        choices: ['Através de festivais anuais de música e dança.', 'Não há celebrações culturais em Tuvalu.', 'Com desfiles de carros alegóricos.', 'Através de competições esportivas internacionais.'],
        correctAnswer: 0
    },
    
    {
        question: 'Quais são algumas das línguas faladas em Tuvalu?',
        choices: ['Inglês e mandarim.', 'Tuvaluan e inglês.', 'Espanhol e francês.', 'Árabe e russo.'],
        correctAnswer: 1
    },
    
    {
        question: 'Como Tuvalu preserva sua identidade cultural única?',
        choices: ['Através de políticas de assimilação cultural.', 'Protegendo e promovendo suas tradições e línguas.', 'Ignorando completamente suas tradições culturais.', 'Adotando a cultura de outros países.'],
        correctAnswer: 1
    },
    
    {
        question: 'Como Tuvalu aborda questões de diversidade étnica e inclusão social?',
        choices: ['Promovendo a segregação étnica.', 'Celebrando a diversidade e promovendo a inclusão social.', 'Suprimindo identidades étnicas diversas.', 'Excluindo grupos étnicos minoritários.'],
        correctAnswer: 1
    },
    
    {
        question: 'Quais são algumas das principais fontes de entretenimento e lazer em Tuvalu?',
        choices: ['Assistir televisão e jogar videogame.', 'Praticar esportes aquáticos e participar de festivais culturais.', 'Fazer compras em shoppings e frequentar cafés.', 'Realizar atividades de montanhismo e acampamento.'],
        correctAnswer: 1
    },
    
    {
        question: 'Como as questões de saúde são abordadas em Tuvalu?',
        choices: ['A saúde é negligenciada, e os serviços médicos são escassos.', 'A saúde é uma prioridade, com investimentos em serviços médicos e programas de prevenção.', 'Não há preocupações com saúde em Tuvalu.', 'A saúde é privatizada, tornando-se inacessível para muitos.'],
        correctAnswer: 1
    },
    
    {
        question: 'Quais são algumas das formas tradicionais de arte em Tuvalu?',
        choices: ['Escultura em madeira e pintura em tela.', 'Tecelagem de tapa e fabricação de colares de conchas.', 'Escultura em argila e cerâmica.', 'Fotografia e cinema.'],
        correctAnswer: 1
    },
    
    {
        question: 'Como Tuvalu enfrenta os desafios relacionados às mudanças climáticas e à elevação do nível do mar?',
        choices: ['Ignorando os problemas climáticos e não tomando medidas.', 'Buscando soluções internacionais e adaptando-se às mudanças climáticas.', 'Negociando com outros países para transferência de população.', 'Negando a existência das mudanças climáticas.'],
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
