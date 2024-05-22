var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
    {
        question: 'Como a Grécia preserva sua rica herança cultural e histórica?',
        choices: ['Não se importa com sua herança cultural e histórica.', 'Adota políticas para proteger e promover sua história e cultura.', 'Abandona sua herança cultural e histórica.', 'Sua herança cultural e histórica não é significativa.'],
        correctAnswer: 1
    },
    
    {
        question: 'Qual é o impacto da religião na sociedade grega hoje?',
        choices: ['Não tem impacto.', 'É uma força que une as pessoas e influencia positivamente a sociedade.', 'Está apenas ligada a práticas antigas.', 'Causa divisões e conflitos.'],
        correctAnswer: 1
    },
    
    {
        question: 'Como a economia afeta a união social na Grécia?',
        choices: ['Não afeta.', 'Cria desafios que prejudicam a união social.', 'Promove a união social.', 'Não é relevante.'],
        correctAnswer: 1
    },
    
    {
        question: 'Quais são os desafios para os jovens gregos em termos de educação e emprego?',
        choices: ['Todos têm as mesmas oportunidades.', 'Falta de acesso à educação de qualidade e altas taxas de desemprego.', 'Não enfrentam desafios.', 'O governo garante educação e emprego para todos.'],
        correctAnswer: 1
    },
    
    {
        question: 'Qual é o impacto da crise dos refugiados na Grécia em termos de integração social e cultural?',
        choices: ['Nenhum impacto.', 'Desafios significativos na integração social e cultural.', 'Reforçou a integração social e cultural.', 'A Grécia não está envolvida.'],
        correctAnswer: 1
    },
    
    {
        question: 'Como a Grécia promove a igualdade racial e social?',
        choices: ['Não possui políticas de inclusão.', 'Implementa políticas eficazes para promover a igualdade.', 'Políticas de inclusão que exacerbam divisões.', 'Igualdade já é uma realidade.'],
        correctAnswer: 1
    },
    
    {
        question: 'Qual é o papel da juventude grega na mudança social e política?',
        choices: ['Não se envolve em mudanças.', 'Desempenha um papel significativo.', 'Tem pouco impacto.', 'É contra mudanças.'],
        correctAnswer: 1
    },
    
    {
        question: 'Como a Grécia aborda a questão da diversidade étnica em sua sociedade?',
        choices: ['Ignora a diversidade étnica.', 'Promove políticas de integração para comunidades étnicas.', 'Exclui minorias étnicas.', 'Não tem diversidade étnica.'],
        correctAnswer: 1
    },
    
    {
        question: 'Qual é o impacto da crise econômica na coesão social da Grécia?',
        choices: ['Não há impacto.', 'Fortalece os laços sociais.', 'Cria divisões e tensões.', 'Torna a sociedade mais unida.'],
        correctAnswer: 2
    },
    
    {
        question: 'Como a Grécia lida com a questão da acessibilidade para pessoas com deficiência?',
        choices: ['Não se preocupa com acessibilidade.', 'Tem políticas inclusivas para pessoas com deficiência.', 'Discrimina pessoas com deficiência.', 'Não há pessoas com deficiência na Grécia.'],
        correctAnswer: 1
    },
    
    {
        question: 'Qual é o papel das tradições culturais na identidade nacional grega?',
        choices: ['As tradições culturais são ignoradas.', 'São fundamentais para a identidade nacional.', 'Não têm impacto na identidade nacional.', 'Causam divisões na sociedade.'],
        correctAnswer: 1
    },
    
    {
        question: 'Como a Grécia enfrenta o desafio da inclusão de comunidades LGBTQ+?',
        choices: ['Não reconhece a comunidade LGBTQ+.', 'Tem políticas de inclusão e proteção dos direitos LGBTQ+.', 'Discrimina abertamente a comunidade LGBTQ+.', 'A comunidade LGBTQ+ não existe na Grécia.'],
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
const dica = '<p>Dica: A Grécia preserva sua rica herança cultural e histórica através de políticas de proteção e promoção, enquanto a religião atua como uma força unificadora na sociedade. No entanto, desafios econômicos geram tensões sociais, especialmente para os jovens, que enfrentam dificuldades de acesso à educação e emprego. A crise dos refugiados também traz desafios significativos para a integração social e cultural. A Grécia promove a igualdade racial e social através de políticas eficazes, enquanto a juventude desempenha um papel importante na mudança social e política. Políticas de integração são implementadas para lidar com a diversidade étnica, embora a crise econômica tenha criado divisões e tensões na sociedade. A acessibilidade para pessoas com deficiência é uma prioridade, e as tradições culturais desempenham um papel fundamental na identidade nacional, enquanto políticas de inclusão protegem os direitos LGBTQ+. </p>';

// Adiciona um evento de clique à imagem da lâmpada
lampada.addEventListener('click', () => {
    // Exibe a dica no elemento <aside>
    aside.innerHTML = dica;
});