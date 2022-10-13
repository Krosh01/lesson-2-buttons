let i = 0
let red = document.querySelector('#red')
red.addEventListener('click',() => {
    let time4 = setTimeout(() => {
        if(i < 10){
            console.log('changet to  green ');
            red.style.backgroundColor='#00FF00'
        }
    },1000)
    let textchange3 = setTimeout(()=> {
        if(i < 10){
            red.textContent = 'green'
        }
    },1000)
})
let green = document.querySelector('#green')
green.addEventListener('click',() => {
    let time = setTimeout(() =>{
        if(i < 10){
            console.log('changet to  aqua');
            green.style.backgroundColor='#00FFFF'
        }
    },1000)
    let textchange2 = setTimeout(()=> {
        if(i < 10){
            green.textContent = 'aqua'
        }
    },1000)
})
let yellow = document.querySelector('#yellow')
yellow.addEventListener('click',() => {
    let time2 = setTimeout(() =>{
        if(i < 10){
            console.log('changet to  purple');
            yellow.style.backgroundColor='#FF00FF' 
        }
    },1000)
    let textchange = setTimeout(()=>{
        yellow.textContent = 'purple'      
    },1000)
})
let reset = document.querySelector('.reset')
reset.addEventListener('click',() => {
    let time2 = setTimeout(() =>{
        if(i < 10){
            console.log('changet to  yellow again');
            yellow.style.backgroundColor='#FFFF00' 
        }
    },1000)
    let textchange = setTimeout(()=>{
        yellow.textContent = 'yellow'  
    },1000)
    let time = setTimeout(() =>{
        if(i < 10){
            console.log('changet to  green again');
            green.style.backgroundColor='#00FF00'
        }
    },1000)
    let textchange2 = setTimeout(()=> {
        if(i < 10){
            green.textContent = 'green'
        }
    },1000)
    let time4 = setTimeout(() => {
        if(i < 10){
            console.log('changet to  red again');
            red.style.backgroundColor='#FF0000' 
        }
    },1000)
    let textchange3 = setTimeout(()=> {
        if(i < 10){
            red.textContent = 'red'
        }
    },1000) 
})