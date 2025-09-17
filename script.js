// Slider functionality
const slider = document.getElementById('slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let scrollAmount = 0;
const cardWidth = 260; // width + margin

prev.addEventListener('click', () => {
  scrollAmount -= cardWidth * 2;
  if(scrollAmount < 0) scrollAmount = 0;
  slider.style.transform = `translateX(-${scrollAmount}px)`;
});

next.addEventListener('click', () => {
  scrollAmount += cardWidth * 2;
  const maxScroll = slider.scrollWidth - slider.clientWidth;
  if(scrollAmount > maxScroll) scrollAmount = maxScroll;
  slider.style.transform = `translateX(-${scrollAmount}px)`;
});

// Fade-in sections on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => { 
    if(entry.isIntersecting){ 
      entry.target.classList.add('visible'); 
      appearOnScroll.unobserve(entry.target); 
    } 
  });
}, appearOptions);
faders.forEach(fader => { appearOnScroll.observe(fader); });
