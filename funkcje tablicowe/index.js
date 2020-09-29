/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 15 - "Funkcje tablicowe"
*/

/*
* Cel zadania
*------------
* Zaimplementuj własne wersje funkcji tablicowych Array.prototype.length oraz Array.prototype.filter, bez wykorzystania tych wbudowanych.
*
*
* Przykład:
* filter([1, 2, 3, 4], isEven); // => [2, 4]
* length([1, 2, 3, 4]); // => 4
*
*/

function filter(array, callback) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i])
    }
  }
  return newArray;
}

function length(array) {
  let counter = 0;

  array.forEach(elem => counter++)

  return counter;
}

// function length(array) {
//   const arrayKeys = [...array.keys()];
//   let i = 0;
//   while(arrayKeys[i] !== undefined) {
//     i++;
//   }
//   return i;
// }

// const length = (array) => array.reduce(arrLength => ++arrLength, 0);

/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(',') : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(filter([1, 2, 3, 4], (el) => el % 2 === 0), [2, 4]);
verify(filter([1, 2, 3, 4], (el) => el % 2 !== 0), [1, 3]);
verify(length([1, 2, 3, 4]), 4);
verify(length([]), 0);