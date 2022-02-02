function openCloseMenu() {
  const x = document.querySelector('.mobile-menu');
  const y = document.querySelector('body');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
    y.style.overflow = 'scroll';
  } else {
    x.style.display = 'flex';
    y.style.overflow = 'hidden';
  }
}
function addevent(id) {
  document.getElementById(id).addEventListener('click', () => {
    openCloseMenu();
  });
}
const ids = ['onclick-open', 'onclick-close', 'onclick-logo', 'onclick-past-events', 'onclick-sponsors','onclick-compaign'];
ids.forEach(addevent);

const mediaQuery = window.matchMedia('(min-width: 768px)');

mediaQuery.addEventListener("change", () => {
    document.querySelector('.mobile-menu').style.display = 'none';
    document.body.style.zoom = "100%"; 
});