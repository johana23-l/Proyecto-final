document.addEventListener('DOMContentLoaded',()=>{
  // Smooth nav links
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.addEventListener('click',e=>{
      e.preventDefault();const id=a.getAttribute('href').slice(1);const el=document.getElementById(id);if(el){el.scrollIntoView({behavior:'smooth',block:'start'})}
    })
  })

  // Brand click -> top
  const brand=document.querySelector('.nav-brand');
  if(brand) brand.addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'})})

  // Reveal on scroll using IntersectionObserver
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('show')}
    })
  },{threshold:0.15});

  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  // Make initial elements visible
  document.querySelectorAll('.reveal-delay').forEach((el,i)=>{
    setTimeout(()=>el.classList.add('show'), 200 + i*120);
  })
});
