const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.classList.toggle('open', open);
  nav.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.classList.remove('open');
  nav.classList.remove('open');
  document.body.classList.remove('menu-open');
}));

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.filter;
    document.querySelectorAll('.work-card').forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelector('#contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Halo Jet Desain Corp,%0A%0ANama: ${encodeURIComponent(data.get('name'))}%0ADivisi: ${encodeURIComponent(data.get('division'))}%0AProyek: ${encodeURIComponent(data.get('message'))}`;
  window.open(`https://wa.me/6289521052099?text=${message}`, '_blank', 'noopener,noreferrer');
});

document.querySelector('#year').textContent = new Date().getFullYear();
