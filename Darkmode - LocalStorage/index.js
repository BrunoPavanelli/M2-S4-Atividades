// Selecionando o elemento HTML button
const button = document.querySelector("button");

// Selecionando o elemento HTML body
const body = document.body;

// Guardando o nome da classe que contém o modo dark
const theme = "dark-mode";

// Armazenando dois possíveis textos para o elemento button em um array
const themeButtonText = ["Trocar Para: Light Mode", "Trocar Para: Dark Mode"];

// Guardando o estado do tema que começa como undefined por padrão
let darkMode;

// Atribuindo um evento de clique ao elemento button
button.addEventListener("click", themeChange);

// Criando a função themeChange
function themeChange() {
  
  // Invertendo o estado da nossa variável darkMode
  darkMode = !darkMode;

  // Acessando a const body e adicionando ou removendo a classe dark-mode
  body.classList.toggle(theme);

  // Acessando o localStorage e usando o método setItem
  localStorage.setItem(theme, darkMode);

  // Chamando a função responsável por mudar o texto do botão
  themeChangeButtonText(button);
}

// Criando a função e seu parâmetro
function themeChangeButtonText(ButtonElement) {

    // Analsiando o estado do tema
    darkMode
      ? (ButtonElement.innerText = themeButtonText[0])
      : (ButtonElement.innerText = themeButtonText[1]);
}

// Criando a função
function themePreferenceAnalysis() {

    //re-atribuindo o valor do estado
    darkMode = JSON.parse(localStorage.getItem(theme));
  
    //verificando condição do estado
    if (darkMode) {
  
    //caso seja verdadeiro, troca para dark-mode
      themeChangeButtonText(button);
      body.classList.add(theme);
    } else {
      themeChangeButtonText(button);
    }
  }
  
  // Invocando a função em escopo global para iniciar toda vez que a página é carregada
themePreferenceAnalysis();