const string = "ПривЕт! Как дела?";

const vowels = ["а", "я", "о", "ё", "у", "ю", "и", "ы", "е", "э"];

const getVowels = stringToFilter => {
  let extractedVowels = "";  

  for (let i = 0; i < stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i].toLowerCase();

    if (vowels.includes(currentLetter)) {
      extractedVowels += currentLetter;
    }
  }

  return extractedVowels;
}

console.log(getVowels(string));