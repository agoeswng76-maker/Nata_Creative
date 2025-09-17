const slides = document.getElementById('slides');
const dotsContainer = document.getElementById('dots');
const totalSlides = slides.children.length;
let index = 0;

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => setIndex(i));
  dotsContainer.appendChild(dot);
}

function setIndex(i) {
  index = i;
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function updateDots() {
  [...dotsContainer.children].forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  index = (index + 1) % totalSlides;
  setIndex(index);
}, 3500);
