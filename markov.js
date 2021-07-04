/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chains = this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = {}
    for (const word in this.words) {

      const keyWord = this.words[word];
      let value;
      if (this.words[parseInt(word) + 1]) {

        value = this.words[parseInt(word) + 1];
      } else {

        value = null;
      }
      if (chains[keyWord]) {

        chains[keyWord].push(value);
      } else {

        chains[keyWord] = [value];
      }
    }
    return chains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let textArr = [];
    let lastI = 0;
    const keysTotal = Object.keys(this.chains).length

    while (textArr.length < numWords) {

      const randomIndex = Math.floor(Math.random() * keysTotal);
      const startWord = Object.keys(this.chains)[randomIndex];
      for (let i = 0; i < numWords - textArr.length; i++) {

        const index = lastI + (i - 1)
        if (i == 0) {

          textArr.push(' ' + startWord);
        } else {
          
          const lastWord = textArr[index];
          let lastWordKey;
          if (lastWord[0] == ' ') {

            lastWordKey = lastWord.slice(1);
          } else {

            lastWordKey = lastWord;
          }
          const nextWords = this.chains[lastWordKey];
          
          const nextWordIndex = Math.floor(Math.random() * nextWords.length);
          
          const nextWord = nextWords[nextWordIndex];
          if (nextWord == null) {

            textArr.push('.');
            numWords++;
            lastI = textArr.length;
            break;
          }
          textArr.push(' ' + nextWord);
          
        }
      }
    }
    const finalString = textArr.join('')
    return finalString.slice(1)
  }
}

//let mm = new MarkovMachine("the cat in the hat");

// let mm = new MarkovMachine("the cat in the hat is in the hat")
// console.log(mm.makeText(50))

// let mnm = new MarkovMachine("look if you had one shot or one opportunity to seize everything you ever wanted in one moment would you capture it or just let it slip yo his palms are sweaty knees weak arms are heavy there's vomit on his sweater already mom's spaghetti")
// console.log(mnm.makeText(50))

module.exports = MarkovMachine;