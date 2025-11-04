let currentPosition = 0;
// assigns the value 0 to the variable currentPosition
const gap = 10;
// assigns the value 10 to the variable gap (constant variable), sets gap of images to 10
const slideWidth = 400;
// assigns the value 400 to the variable slideWidth (constant variable), sets width of slides to 400

const items = document.querySelectorAll('.carousel-item');
// target carousel item and save in variable called items (constant variable)
const totalSlides = items.length;
// assigns number of carousel items to the variable totalSlides (constant variable)

function moveForward() {
  // creates a function called moveForward
  if (currentPosition >= totalSlides - 2) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }
  updateCarouselPosition();
  // if currentPosition is greater than or equal to totalSlides - 2, sets currentPosition = 0.
  // if currentPosition is NOT greater than or equal to totalSlides - 2, add 1 to currentPosition
  // then executes function updateCarouselPosition based on which condition is met
}

function moveBackward() {
  // creates a function called moveBackwards
  if (currentPosition <= 0) {
    currentPosition = totalSlides - 2;
  } else {
    currentPosition--;
  }
  updateCarouselPosition();
  // if currentPosition is less than or equal to 0, sets currentPosition = totalSlides - 2.
  // if currentPosition is NOT less than or equal to 0, subtracts 1 from currentPosition
  // then executes function updateCarouselPosition based on which condition is met
}

function updateCarouselPosition() {
  // creates a function called updateCarouselPosition
  const items = document.querySelectorAll('.carousel-item');
  // targets carousel-item and save in variable called items (constant variable)
  const offset = (slideWidth + gap) * currentPosition;
  // sets variable offset to equal slideWidth + gap multiplied by the currentPosition
  for (const item of items) {
    item.style.transform = `translateX(-${offset}px)`;
  }
  // when this function is executed, shifts all items in carousel by calculated offset
}
