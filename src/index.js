const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(str) {
    let inputData = str.split("**********")
  let words = [];
  
  inputData.forEach(item => {
    let word = [];
    item = item.split("");

    while (item.length !== 0) {
      let symbol = item.splice(0,2).join('');
      if (symbol == "00") {
        word.push("");
      } else if (symbol == "10") {
        word.push(".");
      } else {
        word.push("-");
      }
    }
  
    words.push(word);
  });
  
  let getLetters = () => {
    let res = [];

    words.forEach((item) => {
    
      let word = [];
      while (item.length !== 0) {
        word.push(item.splice(0,5))
      }
      res.push(word);
    })

    return res;
  }
  let decoded = getLetters().map((e) => e.map((item) => MORSE_TABLE[item.join("")]));
  return decoded.map((e) => e.join("")).join(" ");
}

module.exports = {
    decode
}