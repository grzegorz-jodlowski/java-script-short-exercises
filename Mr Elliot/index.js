/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 12 - "Mr. Elliot"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję zmieniającą tekst na pozdrowienia od Mr. Elliota, według przykładu.
*
*
* Przykład:
* greetings('hacker'); // => 'H4Ck3r'
* greeting('Control Is An Illusion'); // => 'C0NtR0L 15 4N 1lLu510n'
* greeting('Saving The World'); // => 'S4V1Ng tHe w0rLd'
*
*/

const hackerCipher = {
  'a': '4',
  'A': '4',
  's': '5',
  'S': '5',
  'e': '3',
  'E': '3',
  'o': '0',
  'O': '0',
  'i': '1',
  'I': '1'
}

function greeting(message) {
  const newMessage = message.split('').map((letter, index) => {
    if (hackerCipher[letter]) {
      return hackerCipher[letter]
    } else {
      return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    }
  }
  );

  return newMessage.join('');
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(greeting('hacker'), 'H4Ck3r');
verify(greeting('Control Is An Illusion'), 'C0NtR0L 15 4N 1lLu510n');
verify(greeting('Saving The World'), '54V1Ng tH3 w0rLd');