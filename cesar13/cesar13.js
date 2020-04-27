function cesar13(input) {
  if (!input) throw new Error('Input is empty')
  if (typeof input !== 'string') throw new Error('Input is not a text')
  if (input.includes(' ')) throw new Error('Input should be a string of characters')

  const unicodeOfA = 65;
  const unicodeOfZ = 90;
  const unicodeOfa = 97;
  const unicodeOfz = 122;

  const cipher = 13;

  let result = '';

  input.split('').map((letter, i) => {
    let letterUnicode = input.charCodeAt(i)

    if (letterUnicode >= unicodeOfA && letterUnicode <= unicodeOfZ) {
      result += String.fromCharCode(letterUnicode + cipher > unicodeOfZ ? (letterUnicode + cipher) % unicodeOfZ + unicodeOfA - 1 : letterUnicode + cipher);
    } else if (letterUnicode >= unicodeOfa && letterUnicode <= unicodeOfz) {
      result += String.fromCharCode(letterUnicode + cipher > unicodeOfz ? (letterUnicode + cipher) % unicodeOfz + unicodeOfa - 1 : letterUnicode + cipher);
    } else {
      result += letter;
    }
  })

  return result;
}

export default cesar13;


function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

try {
  verify(cesar13('PRZEPRO!GRAMOWANI'), 'CEMRCEB!TENZBJNAV');
  verify(cesar13('ra1no'), 'en1ab');
} catch (err) {
  console.log(err.message)
}