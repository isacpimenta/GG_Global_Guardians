var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: "Qual é a influência da diversidade étnica na cultura venezuelana?",
        choices: ["Inexistente.", "Marginal.", "Significativa.", "Excludente."],
        correctAnswer: 2
    },
    {
        question: "Como o sistema político venezuelano impacta as questões raciais e sociais?",
        choices: ["Promove igualdade.", "Ignora questões raciais.", "Cria divisões étnicas.", "Fomenta a inclusão social."],
        correctAnswer: 2
    },
    {
        question: "Quais são os desafios enfrentados pelas comunidades indígenas na Venezuela?",
        choices: ["Total inclusão na sociedade.", "Preservação de suas terras e culturas.", "Ausência de discriminação.", "Desinteresse na preservação cultural."],
        correctAnswer: 1
    },
    {
        question: "Como as políticas governamentais venezuelanas abordam as desigualdades sociais?",
        choices: ["Combatem efetivamente as desigualdades.", "Ignoram as desigualdades.", "Agravam as disparidades sociais.", "Promovem exclusão social."],
        correctAnswer: 2
    },
    {
        question: "Qual é o papel da música na identidade cultural venezuelana?",
        choices: ["Sem relevância cultural.", "Reflete apenas uma única cultura.", "Diversidade de estilos musicais.", "Fomenta divisões sociais."],
        correctAnswer: 2
    },
    {
        question: "Como a crise econômica afeta diferentes grupos sociais na Venezuela?",
        choices: ["Impacta igualmente todos os grupos.", "Beneficia as minorias.", "Agrava as desigualdades sociais.", "Promove a inclusão social."],
        correctAnswer: 2
    },
    {
        question: "Quais são as contribuições das comunidades afro-venezuelanas para a cultura do país?",
        choices: ["Nenhuma contribuição significativa.", "Preservação de tradições africanas.", "Assimilação completa à cultura dominante.", "Degradação cultural."],
        correctAnswer: 1
    },
    {
        question: "Como a Venezuela lida com a questão da migração interna e externa?",
        choices: ["Facilita a migração sem restrições.", "Promove políticas de inclusão para migrantes.", "Ignora completamente o fenômeno migratório.", "Impõe restrições e enfrenta desafios humanitários."],
        correctAnswer: 3
    },
    {
        question: "Qual é a importância da educação na promoção da igualdade social na Venezuela?",
        choices: ["Irrelevante para a igualdade social.", "Fundamental para reduzir desigualdades.", "Contribui para a exclusão social.", "Causa polarização política."],
        correctAnswer: 1
    },
    {
        question: "Como a Venezuela aborda as questões de gênero e sexualidade em sua sociedade?",
        choices: ["Promove igualdade de gênero.", "Ignora completamente essas questões.", "Fomenta discriminação com base em gênero e sexualidade.", "Estabelece políticas inclusivas para todos os gêneros e orientações sexuais."],
        correctAnswer: 2
    },
    {
        question: "Qual é o papel das ONGs e organizações da sociedade civil na Venezuela em relação aos direitos humanos?",
        choices: ["Não têm relevância.", "Atuam como defensoras dos direitos humanos.", "Contribuem para a violação dos direitos humanos.", "São ignoradas pelo governo."],
        correctAnswer: 1
    },
    {
        question: "Como a Venezuela aborda as questões de saúde pública e acesso à saúde para todos os cidadãos?",
        choices: ["Garante acesso igualitário à saúde.", "Restringe o acesso à saúde para grupos específicos.", "Ignora completamente as necessidades de saúde da população.", "Privilegia apenas os mais ricos."],
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

// Obtém a referência para a imagem da lâmpada
const lampada = document.querySelector('#lampada');

// Obtém a referência para o elemento <aside>
const aside = document.querySelector('aside');

// Define o conteúdo da dica
const dica = '<p>Dica: Reconhecer e enfrentar as desigualdades sociais e étnicas é fundamental para promover uma sociedade mais justa e inclusiva na Venezuela. Isso envolve desde a preservação das tradições culturais e direitos das comunidades indígenas e afro-venezuelanas até o combate às políticas que exacerbam as disparidades sociais. A educação desempenha um papel crucial na redução das desigualdades, enquanto as organizações da sociedade civil são essenciais na defesa dos direitos humanos.</p>';

// Adiciona um evento de clique à imagem da lâmpada
lampada.addEventListener('click', () => {
    // Exibe a dica no elemento <aside>
    aside.innerHTML = dica;
});