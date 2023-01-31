const navLinks = document.querySelectorAll('.lista-nav a[href^="#"]')

const observador = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const navLink = document.querySelector(`.lista-nav a[href='#${id}']`)

    if(entry.isIntersecting){
      document.querySelector('.lista-nav a.active').classList.remove('active');
      navLink.classList.add('active');
    } 
  });
}, {rootMargin: '-50% 0px -50% 0px'});

navLinks.forEach(navLink => {
  const hash = navLink.getAttribute('href');
  const target = document.querySelector(hash);
  if(target){
    observador.observe(target);
  }
})