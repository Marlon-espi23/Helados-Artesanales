const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const themeBtn = document.getElementById('themeBtn');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if(document.body.classList.contains('dark')){
    themeBtn.textContent = '☾';
  }else{
    themeBtn.textContent = '☀';
  }
});

function orderWhatsApp(producto){
  const numero = '50588888888';
  const mensaje = `Hola, quiero pedir ${producto} de Esencia Cítrica.`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: .13
});

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});