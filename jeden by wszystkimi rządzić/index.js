/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 6 - "Jedna by wszystkimi rządzić"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję rule() w taki sposób aby wszystkie przekazane do niej tablice zostały połączone w jedną
*
*
* Przykład:
* rule([1, 2], [5, 6]) // => [1, 2, 5 , 6];
*
*/

/*
* Punkty dodatkowe
*-----------------
* - Wykorzystaj operator rest
* - Zapisz rozwiązanie w jednej linii
*/

const rulez = (...arrays) => arrays.flat();

// const rulez = (...tabs) => [...tabs];
// const rulez = (...args) => [].concat(args).toString();
// const rulez = (...args) => args.toString();


/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(rulez([1, 5], [6, 1]), '1,5,6,1');
verify(rulez([1], [2], [3], [4], [5], [6]), '1,2,3,4,5,6');
console.log(rulez([1, 5], [6, 1]))
