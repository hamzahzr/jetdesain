const chips=[...document.querySelectorAll('.chip')],cards=[...document.querySelectorAll('.division-item')],search=document.querySelector('#service-search');
let category='all';
const empty=document.createElement('p');empty.className='empty-state';empty.textContent='Layanan tidak ditemukan. Coba kata lain atau pilih Semua.';empty.setAttribute('role','status');empty.hidden=true;document.querySelector('.division-list')?.after(empty);
function filter(){const q=(search?.value||'').toLowerCase().trim();let count=0;cards.forEach(c=>{const show=(category==='all'||category===c.dataset.category)&&c.textContent.toLowerCase().includes(q);c.hidden=!show;if(show)count++});empty.hidden=count>0}
chips.forEach(c=>{c.setAttribute('aria-pressed',String(c.classList.contains('active')));c.addEventListener('click',()=>{category=c.dataset.target;chips.forEach(x=>{x.classList.toggle('active',x===c);x.setAttribute('aria-pressed',String(x===c))});filter()})});
search?.addEventListener('input',filter);
document.querySelector('.search-box button')?.addEventListener('click',()=>{filter();document.querySelector('#divisions')?.scrollIntoView({behavior:'smooth'})});
document.querySelector('#contact-form')?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const text=encodeURIComponent('Halo Jet Desain Corp,\n\nNama: '+String(d.get('name')).trim()+'\nDivisi: '+d.get('division')+'\nProyek: '+String(d.get('message')).trim());window.open('https://wa.me/6289521052099?text='+text,'_blank','noopener,noreferrer')});
const y=document.querySelector('#year');if(y)y.textContent=new Date().getFullYear();
const navs=[...document.querySelectorAll('.bottom-nav a,.side-nav nav a')];
function activeNav(){let selected='';document.querySelectorAll('main section[id]').forEach(s=>{if(s.getBoundingClientRect().top<window.innerHeight*.42)selected='#'+s.id});navs.forEach(a=>{const h=a.getAttribute('href');const on=selected?h===selected:h==='index.html';a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}
window.addEventListener('scroll',activeNav,{passive:true});activeNav();
