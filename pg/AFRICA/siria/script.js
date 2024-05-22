var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: "Qual é a diversidade étnica no Sudão?",
        choices: ["Árabe", "Núbio", "Beja", "Todas as opções acima"],
        correctAnswer: 3
    },
    {
        question: "Como a diversidade étnica do Sudão influencia sua cultura?",
        choices: ["Através de práticas culinárias variadas", "Na música e na dança", "Nas tradições religiosas", "Todas as opções acima"],
        correctAnswer: 3
    },
    {
        question: "Quais são os desafios enfrentados pelas minorias étnicas no Sudão?",
        choices: ["Discriminação racial", "Falta de representação política", "Restrições ao uso da língua nativa", "Todas as opções acima"],
        correctAnswer: 3
    },
    {
        question: "Como a sustentabilidade é abordada no Sudão?",
        choices: ["Através de práticas agrícolas tradicionais", "Implementação de políticas de conservação ambiental", "Promoção de fontes de energia renovável", "Todas as opções acima"],
        correctAnswer: 3
    },
    {
        question: "Como a diversidade étnica do Sudão contribui para sua riqueza cultural?",
        choices: ["Através de festivais e celebrações únicas", "Na preservação de línguas e tradições ancestrais", "Na arquitetura e artesanato", "Todas as opções acima"],
        correctAnswer: 3
    },
    {
        question: "Como as políticas governamentais podem promover a inclusão social no Sudão?",
        choices: ["Através de programas de educação inclusiva", "Implementação de leis antidiscriminação", "Criação de oportunidades de emprego equitativas", "Todas as opções acima"],
        correctAnswer: 3
    },
    {
        question: "Qual é a importância da preservação da diversidade cultural para o desenvolvimento sustentável?",
        choices: ["Promove o respeito mútuo e a compreensão entre as comunidades", "Contribui para a inovação e a criatividade", "Fortalece o tecido social e a coesão comunitária", "Todas as opções acima"],
        correctAnswer: 3
    },
    {
        question: "Como a migração influencia a diversidade étnica e cultural do Sudão?",
        choices: ["Introduz novas tradições e costumes", "Contribui para a troca de ideias e experiências", "Pode causar tensões entre grupos étnicos", "Todas as opções acima"],
        correctAnswer: 3
    },
    {
        question: "Como o Sudão pode promover a igualdade de gênero para garantir uma sociedade mais inclusiva?",
        choices: ["Através da implementação de leis que protegem os direitos das mulheres", "Investindo em educação e capacitação para mulheres", "Promovendo a participação das mulheres na tomada de decisões", "Todas as opções acima"],
        correctAnswer: 3
    },
    {
        question: "Quais são os principais desafios ambientais enfrentados pelo Sudão?",
        choices: ["Desertificação", "Escassez de água", "Poluição do ar e da água", "Todas as opções acima"],
        correctAnswer: 3
    },
    {
        question: "Qual das seguintes religiões é predominante no Sudão?",
        choices: ["Islamismo", "Cristianismo", "Judaísmo", "Hinduísmo"],
        correctAnswer: 0
    },
    {
        question: "Que rio é vital para a agricultura e economia do Sudão?",
        choices: ["Nilo", "Níger", "Congo", "Zambeze"],
        correctAnswer: 0
    }
]


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
const dica = '<p>Dica: Para entender a complexidade da Síria, lembre-se: sua diversidade étnica e religiosa enriquece sua cultura; a guerra civil causou divisões e deslocamentos; minorias enfrentam perseguição; políticas exacerbam divisões; a religião influencia relações sociais e políticas; mulheres enfrentam discriminação; a diáspora preserva a identidade; políticas de refugiados dificultam a integração; a destruição do patrimônio é uma perda irreparável; a educação promove tolerância; jovens sofrem com falta de acesso à educação e emprego; ONGs desempenham papel crucial na ajuda humanitária.</p>';

// Adiciona um evento de clique à imagem da lâmpada
lampada.addEventListener('click', () => {
    // Exibe a dica no elemento <aside>
    aside.innerHTML = dica;
});

buildQuiz();