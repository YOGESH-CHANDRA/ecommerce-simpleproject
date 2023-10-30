// Slider/Card control

let cards = document.querySelectorAll(".card");
let counter = 0;
let screenWidth = screen.width;

const cardX = (screenWidth) => {
  cards.forEach((card, i) => {
    if (screenWidth > 768) {
      card.style.left = `${(i * screenWidth) / 4}px`;
      card.style.width = `${screenWidth / 4}px`;
    } else if (screenWidth < 577) {
      card.style.left = `${i * screenWidth}px`;
      card.style.width = `${screenWidth}px`;
    } else {
      card.style.left = `${(i * screenWidth) / 2}px`;
      card.style.width = `${screenWidth / 2}px`;
    }
  });
};

cardX(screenWidth);

function reportWindowSize() {
  screenWidth = screen.width;
  cardX(screenWidth);
}

window.onresize = reportWindowSize;

const goPrev = () => {
  if ((counter) => 0) {
    slideImage();
    counter--;
  }
};
const goNext = () => {
  if (
    (counter == cards.length - 3 && screenWidth > 768) ||
    (counter == cards.length - 1 && (screenWidth < 769 || screenWidth > 576)) ||
    (counter == cards.length && screenWidth < 577)
  ) {
    counter = 0;
  } else {
    slideImage();
    counter++;
  }
};

const slideImage = () => {
  cards.forEach((card) => {
    card.style.transform = `translateX(-${counter * 100}%)`;
  });
};

setInterval(goNext, 2000);
