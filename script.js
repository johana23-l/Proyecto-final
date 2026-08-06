document.addEventListener('DOMContentLoaded',()=>{
  // Smooth nav
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.addEventListener('click',e=>{
      e.preventDefault();const id=a.getAttribute('href').slice(1);const el=document.getElementById(id);if(el){el.scrollIntoView({behavior:'smooth',block:'start'})}
    })
  })
  // small responsive toggle
  const brand=document.querySelector('.brand');
  brand.addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'})})
})
