

let yeas = document.querySelector('#yeas');
let no = document.querySelector('#no');
let box = document.querySelector('#box');
let child = document.createElement('h2');
child.textContent = 'Признал всё таки!';

let i =0;
no.addEventListener('click', ()=>{
  i++;
   console.log(i);
  if(i % 2 !==0){
     box.className = 'block'
  } else {
     box.className = 'box'
  }
});


yeas.addEventListener('click', ()=>{
   alert('Я знал)');
   box.appendChild(child);
});

