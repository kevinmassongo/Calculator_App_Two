const buttons = document.querySelectorAll('button[type="button"]');
const input = document.getElementById('input');
const calcul = document.getElementById('calcul');
const reset = document.getElementById('reset');
const clear = document.getElementById('clear');
const plus = document.getElementById('plus');
const moins = document.getElementById('minus');
const times = document.getElementById('times');
const divideby = document.getElementById('divideby');
const sign = document.getElementById('plusoumoins');
const percentage = document.getElementById('percentage')
const equals = document.getElementById('equals')

let inputValeur = '';
let textInput = '';

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        if(button.textContent === '0' && input.value === ''){
            return
        }else if(button.textContent === '.' && input.value.includes('.')){
            return
        }else if(button.textContent !== 'C'){
            textInput += button.textContent;
        }
        inputValeur += button.textContent;
        input.value = inputValeur;
        calcul.textContent = textInput;
    })
})