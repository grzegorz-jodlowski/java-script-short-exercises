const input = document.querySelector('.text-input');
const mirror = document.querySelector('.mirror');

const makeReflection = () => mirror.textContent = input.value.split('').reverse().join('');

input.addEventListener('keyup', makeReflection)

