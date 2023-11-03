class WordCounter{
    constructor(inputText){
        this.inputText = inputText;
        this.inputText.addEventListener('input', () => {
            this.count();
        })
    }
    count(){
        let wordStat = this.getNumStat(this.inputText.value.trim())
        this.emitEvent(wordStat)
    }    
    emitEvent(wordStat){
        let newEvent = new CustomEvent('count',{
            bubbles : true,
            cancelable : true,
            detail: {
                wordStat
            }
        })
        this.inputText.dispatchEvent(newEvent)
    }

    getNumStat(str){
    let matches = str.match(/\S+/g)
    return {
        characters : str.length,
        words : matches ? matches.length : 0
        };
    } 

}