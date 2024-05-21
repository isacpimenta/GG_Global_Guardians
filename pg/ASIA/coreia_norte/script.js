var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: "Quais são algumas das principais tradições culturais japonesas?",
        choices: [
            "Cerimônia do chá e kendo.",
            "Dança do ventre e festivais de música eletrônica.",
            "Desfiles de carnaval e música samba.",
            "Celebração de St. Patrick's Day e jogos de futebol."
        ],
        correctAnswer: 0
    },
    {
        question: "Como a sociedade japonesa tradicionalmente valoriza a educação?",
        choices: [
            "Priorizando apenas a educação formal.",
            "Incentivando a busca por conhecimento e excelência acadêmica.",
            "Desencorajando a educação para a maioria da população.",
            "Limitando o acesso à educação."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é a capital do Japão?",
        choices: [
            "Kyoto",
            "Osaka",
            "Tóquio",
            "Hiroshima"
        ],
        correctAnswer: 2
    },
    {
        question: "Como o Japão preserva sua identidade cultural única?",
        choices: [
            "Assimilando culturas estrangeiras.",
            "Protegendo e promovendo suas tradições, artes e festivais.",
            "Ignorando completamente sua história cultural.",
            "Adotando a cultura de outros países."
        ],
        correctAnswer: 1
    },
    {
        question: "Quais são alguns dos alimentos tradicionais japoneses?",
        choices: [
            "Pizza e hambúrgueres.",
            "Sushi e sashimi.",
            "Espaguete e lasanha.",
            "Batatas fritas e cachorro-quente."
        ],
        correctAnswer: 1
    },
    {
        question: "Como o Japão aborda questões de igualdade de gênero?",
        choices: [
            "Priorizando os direitos das mulheres em todas as áreas da sociedade.",
            "Limitando as oportunidades das mulheres em comparação com os homens.",
            "Ignorando completamente as questões de gênero.",
            "Excluindo as mulheres de participar na sociedade japonesa."
        ],
        correctAnswer: 0
    },
    {
        question: "Quais são algumas das formas de entretenimento populares no Japão?",
        choices: [
            "Manga e anime.",
            "Rodeios e luta livre.",
            "Programas de culinária e jardinagem.",
            "Telenovelas e reality shows."
        ],
        correctAnswer: 0
    },
    {
        question: "Como o conceito de 'honra' é percebido na sociedade japonesa e como isso influencia as interações sociais?",
        choices: [
            "A honra é vista como irrelevante na sociedade japonesa.",
            "A honra é valorizada e influencia profundamente as interações sociais, promovendo respeito e integridade.",
            "A honra é usada como uma ferramenta para discriminar certos grupos sociais.",
            "A honra é uma ideia estrangeira para os japoneses."
        ],
        correctAnswer: 1
    },
    {
        question: "Como o Japão lida com questões de acessibilidade e inclusão para pessoas com deficiência?",
        choices: [
            "Acessibilidade e inclusão para pessoas com deficiência são prioridades, com leis e políticas que visam garantir igualdade de oportunidades.",
            "Pessoas com deficiência são frequentemente marginalizadas e excluídas da sociedade japonesa.",
            "O Japão não tem preocupações com acessibilidade para pessoas com deficiência.",
            "A acessibilidade é restrita a certas áreas urbanas do Japão."
        ],
        correctAnswer: 0
    },
    {
        question: "Como o sistema educacional japonês aborda a diversidade cultural e étnica dentro das salas de aula?",
        choices: [
            "Promovendo a segregação e discriminando alunos de diferentes origens culturais.",
            "Incentivando a inclusão e celebrando a diversidade cultural como uma parte importante do aprendizado.",
            "Ignorando completamente as diferenças culturais e étnicas dos alunos.",
            "Excluindo alunos de origens étnicas diferentes do sistema educacional japonês."
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é a atitude do Japão em relação à imigração e à diversidade étnica?",
        choices: [
            "O Japão adota uma política de imigração aberta, incentivando a diversidade étnica.",
            "A imigração é restrita e a diversidade étnica é geralmente vista com desconfiança.",
            "O Japão não tem políticas em relação à imigração e à diversidade étnica.",
            "O Japão tem políticas que excluem certos grupos étnicos da imigração."
        ],
        correctAnswer: 1
    },
    {
        question: "Como o Japão aborda questões de saúde mental na sociedade?",
        choices: [
            "Priorizando a saúde mental e fornecendo ampla acessibilidade a serviços de apoio e tratamento.",
            "Ignorando questões de saúde mental e estigmatizando aqueles que buscam ajuda.",
            "Saúde mental não é considerada uma prioridade no Japão.",
            "Apenas indivíduos de certos grupos têm acesso a serviços de saúde mental."
        ],
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
