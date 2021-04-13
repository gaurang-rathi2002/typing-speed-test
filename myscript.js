const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const btn = document.getElementById('btn')
 

quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
  
    let correct = true
    arrayQuote.forEach((characterSpan, index) => {
      const character = arrayValue[index]
      if (character == null) {
        characterSpan.classList.remove('correct')
        characterSpan.classList.remove('incorrect')
        correct = false
      } else if (character === characterSpan.innerText) {
        characterSpan.classList.add('correct')
        characterSpan.classList.remove('incorrect')
      } else {
        characterSpan.classList.remove('correct')
        characterSpan.classList.add('incorrect')
        correct = false
      }
    })
  
    if (correct) renderNewQuote()
  })
 function getRandomQuote() {
     return fetch(RANDOM_QUOTE_API_URL)
     .then(response => response.json())
     .then(data => data.content)
 }
 async function renderNewQuote() {
     const quote = await getRandomQuote()
     quoteDisplayElement.innerHTML = ''
     quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
     })
     quoteInputElement.value = null
 }
renderNewQuote()

var counter = 60;

setInterval( function(){
    counter--;

    if( counter >= 0 ){
        id = document.getElementById("timer");
        id.innerHTML = counter;
    }

    if( counter === 0 ){
        id.innerHTML = "Times Up";
    }
}, 1000);

