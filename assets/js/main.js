// FADE OUT ANIMATION  //
const fadeTexts = document.querySelectorAll('.fade-out');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;

    fadeTexts.forEach((text) => {
        const rect = text.getBoundingClientRect();
        const fullyVisible = rect.top >= 0 && rect.bottom <= windowHeight;

        if (fullyVisible){
            text.style.opacity = 1;
        }else if (rect.bottom > windowHeight && rect.top < windowHeight){
            const visibleHeight = windowHeight - rect.top;
            const opacity = visibleHeight / rect.height;
            text.style.opacity = Math.max(0, Math.min(1, opacity));
        }else if (rect.bottom <= 0){
            text.style.opacity = 0;
        }else {
            text.style.opacity = 1;
        }
    });
});

const container = document.querySelector('.text-container');

function updateMask(){
  const scrollTop = container.scrollTop;
  const scrollHeight = container.scrollHeight;
  const clientHeight = container.clientHeight;

  const atTop = scrollTop <= 0;
  const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

  let mask = 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)';

  if (atTop) {
    mask = 'linear-gradient(to bottom, black 0%, black 90%, transparent 100%)';
  } else if (atBottom) {
    mask = 'linear-gradient(to bottom, transparent 0%, black 10%, black 100%)';
  }

  container.style.maskImage = mask;
  container.style.webkitMaskImage = mask;
}

container.addEventListener('scroll', updateMask);

document.addEventListener('DOMContentLoaded', updateMask);
