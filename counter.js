const wrapper = document.querySelector('.countLabel')
const increase = document.getElementById('upctn')
const decrease = document.getElementById('downctn')
const reset = document.getElementById('resetctn')
let counter = 0;

function Up(){
    increase.addEventListener('click',()=>{
        counter++;
        wrapper.textContent = counter
    })
}
function Reset(){
    reset.addEventListener('click',()=>{
        counter = 0;
        wrapper.textContent = counter
    })
}
function Decrease(){
    decrease.addEventListener('click',()=>{
        counter--;
        wrapper.textContent = counter
    })
}
function Display(){
    wrapper.textContent = counter
}

// Affichage du compteur
Display();

// Appel des fonctions 
Up();
Reset();
Decrease();
