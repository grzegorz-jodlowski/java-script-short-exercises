const directions = {
  top: '🔼',
  bottom: '🔽'
}

const directionIcon = document.querySelector('.direction-icon');
const floorInfo = document.querySelector('.direction-floor');
const elevator = document.querySelector('.elevator');
const floors = document.querySelectorAll('.floor');

const elevatorHeight = elevator.scrollHeight;
const numberOfFloors = floors.length;
const floorHeight = elevatorHeight / floors.length;

directionIcon.textContent = directions.bottom;
floorInfo.textContent = numberOfFloors - 1;

let prevTop = elevator.scrollTop;

elevator.addEventListener('scroll', (event) => {
  const top = event.target.scrollTop;
  const currentFloor = ((numberOfFloors - 1) - (top / floorHeight)).toFixed()
  floorInfo.textContent = currentFloor;

  if (prevTop < top) {
    directionIcon.textContent = directions.bottom;
  } else if (prevTop > top) {
    directionIcon.textContent = directions.top;
  }

  prevTop = top;
})