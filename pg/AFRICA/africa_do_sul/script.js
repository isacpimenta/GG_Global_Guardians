var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: "Como o apartheid moldou as dinâmicas raciais e sociais na África do Sul?",
        choices: [
            "O apartheid promoveu a igualdade racial na África do Sul.",
            "O apartheid não teve impacto significativo nas dinâmicas raciais.",
            "O apartheid exacerbou as divisões raciais e sociais no país.",
            "O apartheid foi uma política de inclusão social na África do Sul."
        ],
        correctAnswer: 2
    },
    {
        question: "Qual é o papel das línguas na construção da identidade cultural na África do Sul?",
        choices: [
            "As línguas são uma fonte de divisão e conflito na África do Sul.",
            "A África do Sul tem apenas uma língua oficial.",
            "As línguas refletem a diversidade e promovem a identidade cultural na África do Sul.",
            "As línguas são irrelevantes para a identidade cultural no país."
        ],
        correctAnswer: 2
    },
    {
        question: "Quais são os desafios enfrentados pelas comunidades indígenas na África do Sul em termos de preservação cultural e direitos territoriais?",
        choices: [
            "As comunidades indígenas lutam pela preservação cultural e pela proteção de seus territórios.",
            "As comunidades indígenas foram totalmente assimiladas pela sociedade dominante.",
            "As comunidades indígenas não enfrentam desafios significativos.",
            "As comunidades indígenas não têm direitos territoriais na África do Sul."
        ],
        correctAnswer: 0
    },
    {
        question: "Como a música e a dança são usadas na África do Sul para expressar identidade cultural e resistência?",
        choices: [
            "A música e a dança não têm relevância cultural na África do Sul.",
            "A música e a dança são apenas formas de entretenimento na África do Sul.",
            "A música e a dança são meios poderosos de expressão cultural e resistência.",
            "A música e a dança são proibidas na África do Sul."
        ],
        correctAnswer: 2
    },
    {
        question: "De que forma as políticas de reconciliação na África do Sul após o fim do apartheid abordaram as injustiças do passado?",
        choices: [
            "As políticas de reconciliação ignoraram as injustiças do passado.",
            "As políticas de reconciliação foram eficazes na abordagem das injustiças do passado.",
            "Não houve políticas de reconciliação na África do Sul.",
            "As políticas de reconciliação agravaram as injustiças do passado."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o impacto do turismo na África do Sul em termos de preservação cultural e desenvolvimento econômico?",
        choices: [
            "O turismo não tem impacto na preservação cultural ou no desenvolvimento econômico.",
            "O turismo promove a preservação cultural, mas não contribui para o desenvolvimento econômico.",
            "O turismo pode promover a preservação cultural e contribuir para o desenvolvimento econômico, mas também pode levar à exploração cultural.",
            "O turismo ameaça a preservação cultural e prejudica o desenvolvimento econômico."
        ],
        correctAnswer: 2
    },
    {
        question: "Quais são os desafios enfrentados pelos jovens na África do Sul em termos de acesso à educação e oportunidades de emprego?",
        choices: [
            "Os jovens na África do Sul têm acesso igualitário à educação e oportunidades de emprego.",
            "Os desafios incluem falta de acesso à educação de qualidade e altas taxas de desemprego.",
            "Os jovens não enfrentam desafios significativos na África do Sul.",
            "A educação e o emprego são garantidos pelo governo para todos os jovens."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o papel das tradições de contação de histórias na transmissão de conhecimento e cultura na África do Sul?",
        choices: [
            "As tradições de contação de histórias são obsoletas na África do Sul.",
            "As tradições de contação de histórias são exclusivas de certas comunidades.",
            "As tradições de contação de histórias desempenham um papel vital na transmissão de conhecimento e cultura.",
            "As tradições de contação de histórias são usadas apenas para entretenimento."
        ],
        correctAnswer: 2
    },
    {
        question: "Como as representações na mídia afetam a percepção das identidades raciais e culturais na África do Sul?",
        choices: [
            "A mídia promove representações precisas e inclusivas das identidades raciais e culturais.",
            "A mídia perpetua estereótipos e distorce as identidades raciais e culturais.",
            "A mídia não tem impacto na percepção das identidades raciais e culturais.",
            "A mídia promove a diversidade e a compreensão das identidades raciais e culturais."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o impacto do colonialismo na preservação e na perda de línguas e culturas tradicionais na África do Sul?",
        choices: [
            "O colonialismo promoveu ativamente a preservação de línguas e culturas tradicionais.",
            "O colonialismo resultou na perda irreparável de línguas e culturas tradicionais.",
            "O colonialismo teve pouco impacto na preservação ou perda de línguas e culturas tradicionais.",
            "O colonialismo resultou na revitalização de línguas e culturas tradicionais."
        ],
        correctAnswer: 1
    },
    {
        question: "Como as políticas de empoderamento das mulheres têm sido implementadas na África do Sul para promover a igualdade de gênero?",
        choices: [
            "As políticas de empoderamento das mulheres são inexistentes na África do Sul.",
            "As políticas de empoderamento das mulheres têm sido eficazes na promoção da igualdade de gênero.",
            "As políticas de empoderamento das mulheres têm sido implementadas, mas com resultados limitados.",
            "A igualdade de gênero é uma realidade na África do Sul, portanto, não são necessárias políticas específicas."
        ],
        correctAnswer: 2
    },
    {
        question: "De que maneira as questões ambientais, como a escassez de água e a degradação do solo, afetam as comunidades na África do Sul?",
        choices: [
            "As questões ambientais não afetam as comunidades na África do Sul.",
            "As questões ambientais contribuem para a prosperidade das comunidades.",
            "As questões ambientais exacerbam a pobreza e a insegurança alimentar nas comunidades.",
            "As questões ambientais são exclusivamente preocupações urbanas, não afetando as comunidades rurais."
        ],
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

// Obtém a referência para a imagem da lâmpada
const lampada = document.querySelector('#lampada');

// Obtém a referência para o elemento <aside>
const aside = document.querySelector('aside');

// Define o conteúdo da dica
const dica = '<p>Dica: Ao abordar questões sobre a África do Sul, destaque como as políticas, culturas e desafios pós-apartheid influenciaram as dinâmicas sociais e identitárias, fornecendo uma compreensão abrangente do contexto histórico e contemporâneo do país.</p>';

// Adiciona um evento de clique à imagem da lâmpada
lampada.addEventListener('click', () => {
    // Exibe a dica no elemento <aside>
    aside.innerHTML = dica;
});

buildQuiz();
