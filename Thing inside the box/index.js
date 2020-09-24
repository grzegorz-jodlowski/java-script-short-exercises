/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 11 - Thing inside the box
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, sprawdzającą czy pudełko jest puste.
*
*
*/

function thing(box) {
  return (/\*\s*o\s*\*/).test(box.split("\n"))
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(thing(`*****
                *   * o
                *   *
                *****`), false);

verify(thing(`*****
                * o *
                *   *
                *****`), true);

verify(thing(`*****
                 *   *
                 *   *
                 *****`), false);