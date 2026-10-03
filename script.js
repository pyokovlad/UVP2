document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle');
 const links=document.querySelector('.nav-links');
 if(toggle&&links){toggle.addEventListener('click',()=>links.classList.toggle('open'));links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')))}
 const year=document.querySelector('[data-year]'); if(year) year.textContent=new Date().getFullYear();
});
