//retrieve html elements

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


//add an event handler to all buttons

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

//added a click event handler in the reset and clear buttons

reset.addEventListener('click', resetFunction)

function resetFunction(){
    inputValeur = '';
    textInput = '';
    input.value = inputValeur;
    calcul.textContent = textInput;
}

clear.addEventListener('click', clearFunction)

function clearFunction(){
    inputValeur = inputValeur.slice(0, -2);
    textInput= inputValeur;
    input.value = inputValeur;
    calcul.textContent = textInput;
}

plus.addEventListener('click', plusFunction)

function plusFunction(e){
    e.preventDefault();
    if(plus){
        inputValeur = '';
    };
    textInput += ' + '
    input.value = inputValeur
    calcul.textContent = textInput
}

moins.addEventListener('click', moinsFunction)

function moinsFunction(e){
    e.preventDefault();
    if(moins){
        inputValeur = ''
    };
    textInput += ' - ';
    input.value = inputValeur;
    calcul.textContent = textInput;
}

times.addEventListener('click', timesFunction)

function timesFunction(e){
    e.preventDefault();
    if(times){
        inputValeur = ''
    };
    if(textInput += ' * '){
        calcul.textContent += ' × '
    }
    input.value = inputValeur;
}

divideby.addEventListener('click', dividebyFunction);

function dividebyFunction(e){
    e.preventDefault();
    if(divideby){
        inputValeur = ''
    };
    textInput += ' / ';
    input.value = inputValeur;
    calcul.textContent = textInput;
}
