export function getSyllables(word) {
  const VOWELS = ["a", "e", "i", "o", "u"];
  const DIPHTHONGS = ["oi", "oy", "ou", "ow", "au", "aw", "oo", "uy", "ye", "ey"];
  let count = 0;
  let newWord = "";
  let reg = /^[a-zA-Z]/;

  for(let i=0; i<word.length; i++) {
    if(reg.test(word[i])) {
      newWord += word[i].toLowerCase();
    }
  }

  if(newWord.length === 1) {
    count = 1;
  } else {
    if(newWord[newWord.length-1] === 'e') {
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
    newWord = newWord.replace("#", "");
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
