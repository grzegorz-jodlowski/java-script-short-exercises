/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 14 - "Hashtagujesz"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję wyszukującą hashtagi w zdaniu
*
*
* Przykład:
* findTags('W 2020 #opanujeJS'); // => opanujeJS
* findTags('Za chwilę dodam #opanujeJS!'); // => opanujeJS
* findTags('Lubię tagować #yolo #love#happy #h3cker'); // => yolo, love, happy, h3cker
*
*/

const nextBreakIndex = (message, fromIndex) => {
  const breaksSigns = [' ', '#', '!']
  const nextBreaksIndexes = breaksSigns.map(item => message.indexOf(item, fromIndex + 1))

  if (nextBreaksIndexes.every(item => item === -1)) {
    return message.length;
  } else {
    return Math.min(...nextBreaksIndexes.filter(num => num !== -1))
  }
}

function findTags(message) {
  const arr = []

  message.split('').forEach((letter, index) => {
    if (letter === '#') {
      arr.push(message.slice(index + 1, nextBreakIndex(message, index)));
    }
  })
  return arr;
}

/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(', ') : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(findTags('W 2020 #opanujeJS'), 'opanujeJS');
verify(findTags('Za chwilę dodam #opanujeJS!'), 'opanujeJS');
verify(findTags('Lubię tagować #yolo #love#happy #h3cker'), 'yolo, love, happy, h3cker');