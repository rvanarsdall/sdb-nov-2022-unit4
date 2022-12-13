let phrase = "The brown fox went over the hill and through the woods.";

function wordWrap(words) {
  let maxCharacterLength = 10;
  let arrayOfWords = words.split(" ");
  console.log(arrayOfWords);
  let currentCharacterCount = 0;
  let breakLines = [];

  let currentLineOfText = "";
  arrayOfWords.forEach((word, index) => {
    if (index === arrayOfWords.length - 1) {
      // We are at the end of the array print what we got
      currentLineOfText = currentLineOfText + " " + word;
      breakLines.push(currentLineOfText + "\n");
    } else if (currentCharacterCount + word.length > maxCharacterLength) {
      // New Line
      breakLines.push(currentLineOfText + "\n");
      currentCharacterCount = word.length;
      currentLineOfText = word;
    } else {
      // Add the current word to the text
      currentCharacterCount = currentCharacterCount + word.length;
      currentLineOfText = currentLineOfText + " " + word;
    }
  });
  return breakLines.join(" ");
}

console.log(wordWrap(""));
