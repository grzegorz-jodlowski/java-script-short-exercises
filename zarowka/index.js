const bulb = document.querySelector('.bulb');
const switcher = document.querySelector('#light-toggle');

switcher.addEventListener('change', () => bulb.classList.toggle('bulb--on'))

