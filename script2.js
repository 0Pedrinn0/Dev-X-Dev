const music = document.getElementById('background-music');
const challengeScreen = document.getElementById('challenge-screen');
const readyScreen = document.getElementById('ready-screen');
const quizScreen = document.getElementById('quiz-screen');
const gameOverScreen = document.getElementById('game-over');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreText = document.getElementById('score-text');

const questions = [
    {
        question: "O que significa HTML?",
        options: [
            "A. HyperText Markup Language",
            "B. HighText Machine Language",
            "C. Hyper Transfer Markup Level",
            "D. Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Qual tag usamos para criar um link em HTML?",
        options: [
            "A. <p>",
            "B. <link>",
            "C. <a>",
            "D. <href>"
        ],
        correct: 2
    },
    {
        question: "Qual atributo da tag <img> define a imagem a ser exibida?",
        options: [
            "A. alt",
            "B. href",
            "C. src",
            "D. link"
        ],
        correct: 2
    },
    {
        question: "Em CSS, qual propriedade muda a cor do texto?",
        options: [
            "A. background-color",
            "B. font-color",
            "C. text-style",
            "D. color"
        ],
        correct: 3
    },
    {
        question: "Qual propriedade CSS muda o tamanho da fonte?",
        options: [
            "A. font-size",
            "B. text-size",
            "C. font-style",
            "D. size"
        ],
        correct: 0
    },
    {
        question: "Qual símbolo usamos para selecionar uma classe em CSS?",
        options: [
            "A. #",
            "B. .",
            "C. $",
            "D. *"
        ],
        correct: 1
    },
    {
        question: "Em JavaScript, qual palavra-chave declara uma variável?",
        options: [
            "A. var",
            "B. let",
            "C. const",
            "D. Todas as anteriores"
        ],
        correct: 3
    },
    {
        question: "Como escrevemos um comentário em JavaScript?",
        options: [
            "A. <!-- comentário -->",
            "B. // comentário",
            "C. /* comentário */",
            "D. B e C"
        ],
        correct: 3
    },
    {
        question: "Qual método converte JSON para objeto em JS?",
        options: [
            "A. JSON.parse()",
            "B. JSON.stringify()",
            "C. JSON.object()",
            "D. JSON.convert()"
        ],
        correct: 0
    },
    {
        question: "Qual evento é disparado quando clicamos em um botão?",
        options: [
            "A. change",
            "B. input",
            "C. click",
            "D. submit"
        ],
        correct: 2
    },
    {
        question: "Em HTML5, qual tag representa conteúdo principal?",
        options: [
            "A. <section>",
            "B. <article>",
            "C. <main>",
            "D. <div>"
        ],
        correct: 2
    },
    {
        question: "Qual propriedade CSS controla o espaço interno de um elemento?",
        options: [
            "A. margin",
            "B. border",
            "C. padding",
            "D. spacing"
        ],
        correct: 2
    },
    {
        question: "Em JS, qual operador usamos para comparação estrita?",
        options: [
            "A. ==",
            "B. =",
            "C. ===",
            "D. !="
        ],
        correct: 2
    },
    {
        question: "Qual extensão é usada para arquivos de JavaScript?",
        options: [
            "A. .html",
            "B. .js",
            "C. .css",
            "D. .java"
        ],
        correct: 1
    },
    {
        question: "O que significa CSS?",
        options: [
            "A. Computer Style Sheets",
            "B. Cascading Style Sheets",
            "C. Creative Style System",
            "D. Colorful Style Sheets"
        ],
        correct: 1
    },
    {
        question: "Qual comando Git envia alterações para o repositório remoto?",
        options: [
            "A. git commit",
            "B. git push",
            "C. git pull",
            "D. git clone"
        ],
        correct: 1
    },
    {
        question: "Qual IDE é mais usada por devs web?",
        options: [
            "A. Photoshop",
            "B. Visual Studio Code",
            "C. Word",
            "D. Excel"
        ],
        correct: 1
    },
    {
        question: "O que é um framework?",
        options: [
            "A. Uma linguagem de programação",
            "B. Um conjunto de bibliotecas e ferramentas",
            "C. Um banco de dados",
            "D. Um sistema operacional"
        ],
        correct: 1
    },
    {
        question: "Qual destes NÃO é um banco de dados?",
        options: [
            "A. MySQL",
            "B. PostgreSQL",
            "C. MongoDB",
            "D. JavaScript"
        ],
        correct: 3
    },
    {
        question: "Quem criou o Windows?",
        options: [
            "A. Steve Jobs",
            "B. Bill Gates",
            "C. Mark Zuckerberg",
            "D. Elon Musk"
        ],
        correct: 1
    },
    {
        question: "Qual tag HTML é usada para criar um parágrafo?",
        options: [
            "A. <para>",
            "B. <p>",
            "C. <paragraph>",
            "D. <text>"
        ],
        correct: 1
    },
    {
        question: "Qual atributo HTML é usado para definir a cor de fundo de um elemento?",
        options: [
            "A. color",
            "B. bgcolor",
            "C. background-color",
            "D. style-color"
        ],
        correct: 1
    },
    {
        question: "Qual tag HTML é usada para linkar CSS no HTML?",
        options: [
            "A. <link>",
            "B. <a>",
            "C. <href>",
            "D. <url>"
        ],
        correct: 0
    },
    {
        question: "Qual seletor CSS seleciona todos os elementos <p>?",
        options: [
            "A. p",
            "B. .p",
            "C. #p",
            "D. *p"
        ],
        correct: 0
    },
    {
        question: "Qual propriedade CSS é usada para alterar o tamanho da fonte?",
        options: [
            "A. font-size",
            "B. text-size",
            "C. size-font",
            "D. text-style"
        ],
        correct: 0
    },
    {
        question: "Como você escreve um comentário em CSS?",
        options: [
            "A. // comentário",
            "B. <!-- comentário -->",
            "C. /* comentário */",
            "D. # comentário"
        ],
        correct: 2
    },
    {
        question: "Como você cria uma função em JavaScript?",
        options: [
            "A. function myFunction() {}",
            "B. create function myFunction() {}",
            "C. func myFunction() {}",
            "D. define function myFunction() {}"
        ],
        correct: 0
    },
    {
        question: "Qual evento JavaScript ocorre quando o usuário clica em um botão?",
        options: [
            "A. onmouseover",
            "B. onclick",
            "C. onmouseclick",
            "D. onhover"
        ],
        correct: 1
    },
    {
        question: "Como você seleciona um elemento pelo id em JavaScript?",
        options: [
            "A. document.getElementById('id')",
            "B. document.getElement('id')",
            "C. document.querySelectorAll('#id')",
            "D. document.findById('id')"
        ],
        correct: 0
    },
    {
        question: "Qual é a forma correta de adicionar texto a um elemento HTML usando JS?",
        options: [
            "A. element.innerText = 'texto';",
            "B. element.text = 'texto';",
            "C. element.value = 'texto';",
            "D. element.content = 'texto';"
        ],
        correct: 0
    },
    {
        question: "Qual operador em JS é usado para comparação de igualdade?",
        options: [
            "A. =",
            "B. ==",
            "C. +=",
            "D. ===="
        ],
        correct: 3
    },
    {
        question: "Qual tag HTML é usada para criar uma lista não ordenada?",
        options: [
            "A. <ul>",
            "B. <ol>",
            "C. <li>",
            "D. <list>"
        ],
        correct: 0
    },
    {
        question: "Qual propriedade CSS altera a cor de fundo de um elemento?",
        options: [
            "A. background",
            "B. color",
            "C. bg-color",
            "D. background-color"
        ],
        correct: 3
    },
    {
        question: "Qual método JavaScript converte uma string em número?",
        options: [
            "A. Number()",
            "B. parseInt()",
            "C. parseFloat()",
            "D. todas as anteriores dependendo do caso"
        ],
        correct: 3
    },
    {
        question: "Qual tag HTML é usada para criar um título de nível 1?",
        options: [
            "A. <h1>",
            "B. <header>",
            "C. <title>",
            "D. <h>"
        ],
        correct: 0
    },
    {
        question: "Qual propriedade CSS altera o espaçamento interno (padding) de um elemento?",
        options: [
            "A. margin",
            "B. padding",
            "C. spacing",
            "D. border"
        ],
        correct: 1
    },
    {
        question: "Como você centraliza horizontalmente um elemento com CSS?",
        options: [
            "A. margin: auto;",
            "B. text-align: center;",
            "C. align: center;",
            "D. display: center;"
        ],
        correct: 0
    },
    {
        question: "Qual propriedade CSS altera a opacidade de um elemento?",
        options: [
            "A. opacity",
            "B. alpha",
            "C. visibility",
            "D. display"
        ],
        correct: 0
    },
    {
        question: "Qual unidade CSS representa pixels?",
        options: [
            "A. px",
            "B. pt",
            "C. em",
            "D. %"
        ],
        correct: 0
    },

    {
        question: "Qual atributo HTML define o texto que aparece quando o mouse passa sobre um elemento?",
        options: [
            "A. tooltip",
            "B. alt",
            "C. title",
            "D. hover"
        ],
        correct: 2
    },
];
const indiceAleatorio = Math.floor(Math.random() * questions.length); 
const questoesAleatorias = questions[indiceAleatorio];

function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

let currentQuestion = 0;
let score = 0;

function goToScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    shuffleQuestions();
    goToScreen('quiz-screen');
    showQuestion();
    startCountdown();
    music.play();
    setTimeout(gameOver, 360000);
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const correct = questions[currentQuestion].correct;
    if (selected === correct) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        gameOver();
    }
}

function gameOver() {
    goToScreen('game-over');
    pauseCountdown();
    scoreText.textContent = `Você acertou ${score} e respondeu ${currentQuestion} de ${questions.length} perguntas!`;
    music.pause();
    music.currentTime = 0;
    music.pause();
    music.currentTime = 0;
}

function restart() {
    goToScreen('challenge-screen');
    resetCountdown();
}
let totalSeconds = 360; // 5 minutos = 300 segundos
let interval = null;
let running = false;

function updateDisplay() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("display").textContent = `${m}:${s}`;
}

function countdown() {
    if (totalSeconds > 0) {
        totalSeconds--;
        updateDisplay();
    } else {
        clearInterval(interval);
        running = false;
    }
}

function startCountdown() {
    if (!running) {
        interval = setInterval(countdown, 1000);
        running = true;
    }
}

function pauseCountdown() {
    clearInterval(interval);
    running = false;
}

function resetCountdown() {
    clearInterval(interval);
    totalSeconds = 360; // voltar para 5 minutos
    running = false;
    updateDisplay();
}

// Inicializa o display com 5 minutos
updateDisplay();