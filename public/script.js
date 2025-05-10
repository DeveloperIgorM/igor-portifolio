window.sr = ScrollReveal({ reset: false });
// sr.reveal('.nav', {duration: 2000});

sr.reveal('.nav-logo, .container-fluid, .nav-links, .intro-1, .wave-bg, .iconProfile', {
  duration: 1000,      // Tempo da animação (ms)
  origin: 'left',    // Aparece vindo de baixo
  distance: '50px',    // Distância que ele se move pra cima
  easing: 'ease-in-out',
  opacity: 0,           // Começa invisível e aparece
});

sr.reveal('.profile-bg, .title-sobre', {
  duration: 1000,    
  origin: 'left',    
  distance: '50px',  
  easing: 'ease-in-out',
  opacity: 0,           
  
});

sr.reveal('.title-projetos, .body-card-project, .footer-card-project', {
  duration: 1000,    
  origin: 'right',    
  distance: '50px',  
  easing: 'ease-in-out',
  opacity: 0,           

});
sr.reveal('.body-card-project-2, .footer-card-project-2', {
  duration: 1000,    
  origin: 'left',    
  distance: '50px',  
  easing: 'ease-in-out',
  opacity: 0,           

});

sr.reveal('.skills-container, .header-skills, .cards-container, .card-skills, .header-card,.body-card,.footer-card', {
  duration: 1000,    
  origin: 'right',    
  distance: '50px',  
  easing: 'ease-in-out',
  opacity: 0,           
  
});
sr.reveal(' .title-contato, .phone', {
  duration: 1000,    
  origin: 'left',    
  distance: '50px',  
  easing: 'ease-in-out',
  opacity: 0,           
  
});


