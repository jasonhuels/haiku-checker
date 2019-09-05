export function getSyllables(word) {
  const VOWELS = ["a", "e", "i", "o", "u"];
  const DIPHTHONGS = ["oi", "oy", "ou", "ow", "au", "aw", "oo", "uy", "ye", "ey"];
  let count = 0;
  let newWord = "";
  let reg = /^[a-zA-Z]/;

  if(word[word.length-3] === "'" && word[word.length-2] === 'r' && word[word.length-1] === 'e') {
    word = word.slice(0, word.length-3);
  }
  console.log(word)

  // Clean word of non-alphabetic characters
  for(let i=0; i<word.length; i++) {
    if(reg.test(word[i])) {
      newWord += word[i].toLowerCase();
    }
  }

  if(newWord.length > 0 && newWord.length <= 3) {
    count = 1;
  } else {
    if(newWord[newWord.length-3] === 'p' && newWord[newWord.length-2] === 'e' && newWord[newWord.length-1] === 'd') {
      newWord = newWord.slice(0, newWord.length-3);
    }

    if(newWord[newWord.length-1] === 'e') { // Remove silent 'e' from end of word
      if(newWord[newWord.length-2] === 'l' || newWord[newWord.length-2] === 'r') {
        count++;
        newWord = newWord.slice(0, newWord.length-2);
      } else {
        newWord = newWord.slice(0, newWord.length-1);
      }
    }

    for(let i=0; i<DIPHTHONGS.length; i++) {
      if(newWord.includes(DIPHTHONGS[i])) {
        count++;
        newWord = newWord.replace(DIPHTHONGS[i], "#");
      }
    }

    for(let i=0; i<newWord.length; i++) {
      if(VOWELS.includes(newWord[i])) {
        count++;
        if(VOWELS.includes(newWord[i+1])) {
          newWord = newWord.replace(newWord[i+1], "#");
        }
        newWord = newWord.replace(newWord[i], "#");
      }
    }
    console.log(newWord);
    for(let i=0; i<newWord.length; i++) {
      if(newWord[i].includes("#")) {
        newWord = newWord.replace("#", "");
      }
    }
    console.log(newWord);
    if(newWord.length >= 3) {
      for(let i=0; i<newWord.length; i++) {
        if(newWord[i].includes("y")) {
          count++;
        }
      }
    }

  }
  return count;
}
