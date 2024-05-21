var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: "Como as diferentes manifestações culturais na Argentina, como o candombe ou a dança folclórica, refletem a complexidade étnica do país?",
        choices: [
            "Celebrando apenas uma cultura dominante.",
            "Limitando-se a uma única expressão cultural.",
            "Destacando a diversidade étnica e cultural.",
            "Ignorando as influências culturais."
        ],
        correctAnswer: 2
    },
    {
        question: "Quais são os impactos da discriminação racial na Argentina e como isso se reflete nas políticas públicas?",
        choices: [
            "Não tem impacto significativo na sociedade argentina.",
            "Reflete-se apenas em aspectos históricos.",
            "Perpetua desigualdades sociais e raciais.",
            "Está totalmente superada pela legislação moderna."
        ],
        correctAnswer: 2
    },
    {
        question: "Como as políticas de inclusão e diversidade têm sido implementadas no ambiente de trabalho na Argentina?",
        choices: [
            "Sem políticas de inclusão.",
            "Promovendo igualdade sem desafios.",
            "Contribuindo para a redução das desigualdades, mas enfrentando resistência.",
            "Causando mais divisão do que inclusão."
        ],
        correctAnswer: 2
    },
    {
        question: "De que forma a representação da diversidade étnica na mídia argentina pode influenciar a percepção social sobre as minorias étnicas?",
        choices: [
            "Não influencia a percepção social.",
            "Reflete apenas a realidade social.",
            "Contribui para perpetuar estereótipos negativos.",
            "Não tem relevância na sociedade argentina."
        ],
        correctAnswer: 2
    },
    {
        question: "Como as questões socioeconômicas afetam o acesso à educação e oportunidades de emprego na Argentina?",
        choices: [
            "Sem impacto significativo.",
            "Afetando apenas áreas urbanas.",
            "Tendo um impacto significativo e perpetuando desigualdades.",
            "Superadas pelo mérito individual."
        ],
        correctAnswer: 2
    },
    {
        question: "Qual é o papel das religiões de matriz africana na construção da identidade cultural argentina e como elas são percebidas pela sociedade?",
        choices: [
            "Não influencia as relações sociais e políticas.",
            "Divide a sociedade em grupos opostos.",
            "Contribui para a coesão social e sendo marginalizadas.",
            "Não têm relevância na Argentina."
        ],
        correctAnswer: 2
    },
    {
        question: "Como as comunidades indígenas na Argentina estão lutando pela preservação de suas línguas e tradições em meio à pressão da modernização e desenvolvimento?",
        choices: [
            "Não estão enfrentando desafios significativos.",
            "Desistindo de lutar pela preservação cultural.",
            "Utilizando estratégias legais e de resistência.",
            "Integrando-se completamente à sociedade argentina."
        ],
        correctAnswer: 2
    },
    {
        question: "Quais são os principais desafios enfrentados pelos afro-argentinos na luta pela igualdade de direitos e reconhecimento de sua contribuição para a sociedade?",
        choices: [
            "Não enfrentam desafios significativos.",
            "Totalmente integrados à sociedade.",
            "Enfrentando resistência política e burocrática.",
            "Não têm interesse na igualdade de direitos."
        ],
        correctAnswer: 2
    },
    {
        question: "De que maneira a violência urbana está relacionada a questões sociais como pobreza, desigualdade e falta de oportunidades na Argentina?",
        choices: [
            "Não há relação entre violência urbana e questões sociais.",
            "A violência urbana é causada por fatores biológicos.",
            "A pobreza e a falta de oportunidades contribuem para a violência.",
            "A violência urbana é independente das questões sociais."
        ],
        correctAnswer: 2
    },
    {
        question: "Como as expressões artísticas contemporâneas na Argentina abordam temas como identidade, raça e pertencimento social?",
        choices: [
            "Não abordam esses temas.",
            "São irrelevantes para a discussão.",
            "Abordam de forma ativa, desafiando estereótipos e promovendo inclusão.",
            "Refletem apenas questões individuais."
        ],
        correctAnswer: 2
    },
    {
        question: "Como as políticas de imigração na Argentina influenciam a diversidade étnica e cultural do país?",
        choices: [
            "Reduzindo a diversidade étnica.",
            "Promovendo exclusão de determinados grupos étnicos.",
            "Contribuindo para a riqueza cultural e étnica do país.",
            "Ignorando completamente a diversidade étnica."
        ],
        correctAnswer: 2
    },
    {
        question: "Qual é a importância do reconhecimento e da valorização das línguas indígenas para a construção de uma sociedade mais inclusiva na Argentina?",
        choices: [
            "Sem relevância para a sociedade argentina.",
            "Limitada a questões históricas.",
            "Fundamental para promover inclusão e respeito à diversidade cultural.",
            "Irrelevante para a integração social."
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

buildQuiz();
