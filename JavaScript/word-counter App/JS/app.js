let textArea = document.querySelector('#text')
let textStat = document.querySelector('#stat')

new WordCounter(textArea);

const render = (event) => {
    textStat.innerHTML = `<p>You have written <span class="highlight">${event.detail.wordStat.words} words</span> and <span class="highlight">${event.detail.wordStat.characters} characters</span></p>`;
}

textArea.addEventListener('count', render)