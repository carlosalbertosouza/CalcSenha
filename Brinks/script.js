document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
      // Array com várias senhas válidas
      const validPasswords = ["190", "212", "256", "254", "adm", "ctr", "239", "239"]; // Adicione as senhas desejadas

    if (validPasswords.includes(password)) {
        message.style.color = "green";
        message.textContent = "Senha correta! Exibindo conteúdo...";
        // Exibe o conteúdo após o login
        document.getElementById("content").style.display = "block";
        // Oculta o formulário de login
        document.getElementById("loginForm").style.display = "none";
        
        // Chama a função para exibir a soma
        displayCurrentDaySum();
    } else {
        message.style.color = "red";
        message.textContent = "Senha incorreta! Tente novamente.";
    }
});

const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const resultElement = document.getElementById('result');
const weekdayElement = document.getElementById('weekday');
const sumElement = document.getElementById('sum'); // Elemento para o valor somado

const fixedNumber1Button = document.getElementById('fixedNumber1');
const fixedNumber2Button = document.getElementById('fixedNumber2');

const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const weekdays = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
    "Quinta-feira", "Sexta-feira", "Sábado"
];

const weekdayValues = {
    0: 8,  // Domingo
    1: 13,  // Segunda-feira
    2: 31,  // Terça-feira
    3: 111,  // Quarta-feira
    4: 3,  // Quinta-feira
    5: 1,  // Sexta-feira
    6: 9   // Sábado
};

const dayValues = {
    1: 31, 2: 3, 3: 13, 4: 32, 5: 55, 6: 2, 7: 65,
    8: 13, 9: 61, 10: 4, 11: 53, 12: 81, 13: 8, 14: 51,
    15: 77, 16: 7, 17: 10, 18: 34, 19: 55, 20: 7,
    21: 53, 22: 71, 23: 3, 24: 7, 25: 45, 26: 49,
    27: 6, 28: 39, 29: 6, 30: 87, 31: 29
};

const monthValues = {
    1: 3, 2: 33, 3: 8, 4: 9, 5: 11, 6: 55,
    7: 20, 8: 4, 9: 1, 10: 5, 11: 12, 12: 4
};

const yearValues = {
    2022: 0, 2023: 0, 2024: 0, 2025: 0
};

const fixedNumber1 = 85; // Primeiro número fixo
const fixedNumber2 = 56; // Segundo número fixo

let selectedFixedNumber = fixedNumber1; // Valor fixo inicial

let date = new Date();
let currentDay = date.getDate(); // Dia atual
let currentMonth = date.getMonth() + 1; // Mês atual (0-indexed, então somamos 1)
let currentYear = date.getFullYear(); // Ano atual
let currentWeekday = date.getDay(); // Dia da semana atual (0 = Domingo, 1 = Segunda, etc.)

function displayCurrentDaySum() {
    const dayValue = dayValues[currentDay] || 0;
    const monthValue = monthValues[currentMonth] || 0;
    const yearValue = yearValues[currentYear] || 0;
    const weekdayValue = weekdayValues[currentWeekday] || 0; // Valor do dia da semana

    const totalSum = dayValue + monthValue + yearValue + selectedFixedNumber + weekdayValue;

    monthElement.textContent = `${months[currentMonth - 1]}`;
    yearElement.textContent = `${currentYear}`;
    weekdayElement.textContent = `${weekdays[currentWeekday]}`;
    resultElement.textContent = `${currentDay}`;
    sumElement.textContent = `${totalSum}`;
}

// Funções para atualizar o número fixo selecionado
function selectFixedNumber1() {
    selectedFixedNumber = fixedNumber1;
    displayCurrentDaySum();
}

function selectFixedNumber2() {
    selectedFixedNumber = fixedNumber2;
    displayCurrentDaySum();
}

// Adiciona eventos aos botões
fixedNumber1Button.addEventListener('click', selectFixedNumber1);
fixedNumber2Button.addEventListener('click', selectFixedNumber2);

// A função `displayCurrentDaySum()` será chamada após o login correto
