/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 2 - "Walidacja"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która sprawdzi, czy przekazane hasło spełnia określone warunki:
*
* a) Ma długość od 3 do 10 znaków
* b) Zawiera jeden ze znaków specjalnych - !, @ lub #
* c) Zawiera cyfrę
*
* Przykład:
* validatePassword('test') // => false
* validatePassword('test11!') // => true
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/

function hasProperLength(minLength, maxLength) {
  return text => (text.length >= minLength && text.length <= maxLength) || false;
}

function hasSpecialSigns(signsArray) {
  return text => signsArray.some(sign => text.includes(sign));
}

function hasNumberOfDigits(numberOfDigits) {
  return text => (text.split('').map(sign => Number(sign) >= 0).filter(item => item === true).length) === numberOfDigits;
}

function validatePassword(password) {
  if (typeof password !== 'string') {
    throw new Error('Password is not a string');
  }

  return [
    hasProperLength(3, 10),
    hasSpecialSigns(['!', '@', '#']),
    hasNumberOfDigits(1)
  ].every(v => v(password))
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(validatePassword(''), false);
verify(validatePassword('lol'), false);
verify(validatePassword('ToDziala1#'), true);