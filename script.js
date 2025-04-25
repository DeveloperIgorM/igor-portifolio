window.sr = ScrollReveal({ reset: true });

sr.reveal('.intro-1, .iconProfile', {duration: 2000});

sr.reveal('.profile-bg, .title-sobre, .body-card, .footer-card, .header-skills, .cards-container, .title-contato, .phone', {
  duration: 1000,      // Tempo da animação (ms)
  origin: 'top',    // Aparece vindo de baixo
  distance: '50px',    // Distância que ele se move pra cima
  easing: 'ease-in-out',
  opacity: 0,           // Começa invisível e aparece
  interval: 200
});
