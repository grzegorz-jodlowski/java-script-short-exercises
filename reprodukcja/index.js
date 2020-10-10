const PIXEL_COLOR = '#e44d4d';

const fakeCanvasPixels = document.querySelectorAll('.fake-canvas .pixel');
const originalCanvasPixels = document.querySelectorAll('.original-canvas .pixel');

const dotsIndexes = [];

originalCanvasPixels.forEach((pixel, index) => {
  if (pixel.classList.contains('pixel-dot')) {
    dotsIndexes.push(index)
  }
})

fakeCanvasPixels.forEach((pixel, index) => {
  if (dotsIndexes.includes(index)) {
    pixel.classList.add('pixel-dot')
  }
})

// const originalCanvas = document.querySelectorAll('.original-canvas .pixel');
// const fakeCanvas = document.querySelectorAll('.fake-canvas .pixel')

// originalCanvas.forEach((element, index) => {
//   if(element.classList.contains('pixel-dot')) {
//     fakeCanvas[index].classList.add('pixel-dot');
//   }
// })


// const fakeCanvasPixels = document.querySelectorAll('.fake-canvas .pixel');
// const originalCanvasPixels = document.querySelectorAll('.original-canvas .pixel')


// const createPixelsArray = (pixels)=> {
//   const pixelsArray = [];
//   pixels.forEach((pixel)=> pixel.classList.contains('pixel-dot') ? pixelsArray.push(1) : pixelsArray.push(0))
//   return pixelsArray;
// }

// const reproduce = (blankPixels, mappedOriginal) => {
//   mappedOriginal.forEach((pixel, index) => pixel && blankPixels[index].classList.add('pixel-dot'))
// }

// const originalpixelsMap = createPixelsArray(originalCanvasPixels);

// reproduce(fakeCanvasPixels, originalpixelsMap);




