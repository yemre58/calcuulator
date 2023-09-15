const display=document.querySelector('.calculator-input');
const keys =document.querySelector('.calculator-keys');


let displayValue="0";
let fisrtValue= null;
let operator= null;
let waitingForSecondValue = false;
updateDisplay();

function updateDisplay(){
    display.value=displayValue;
}

keys.addEventListener('click',function(e){
    const element=e.target;
if(!element.matches('button'))return;

    if(element.classList.contains('operator')){

       //onsole.log('operator ',element.value);return;
        handleOperator(element.value);
        updateDisplay();
        return;
    }
    if(element.classList.contains('decimal')){

      //  console.log('decimal ',element.value);return;
            inputDecimal();
            updateDisplay();
            return;
    }
        
    if(element.classList.contains('clear')){

      //  console.log('clear ',element.value);return;
            clear();
            updateDisplay();
            return;

    }
    
    if(element.classList.contains('cleares')){

        cleares();
        updateDisplay();
        return;
       // console.log('cleares ',element.value);return;
    }
   // console.log('number',element.value);
   inputNumber(element.value);
   updateDisplay();

});
function handleOperator(nextOperator) {
    const value = parseFloat(displayValue);
    if (operator && waitingForSecondValue) {
      operator = nextOperator;
      return;
    }
    if (fisrtValue == null) {
      fisrtValue = value;
    } else if (operator) {
      const result = calculate(fisrtValue, value, operator);
      displayValue = String(result);
      fisrtValue = result;
    }
    waitingForSecondValue = true;
    operator = nextOperator;
    updateDisplay(); 
    console.log(displayValue, fisrtValue, operator, waitingForSecondValue);
  }
  
  
function calculate(first,second,nextOperator){
    if(nextOperator === '+')
    {
        return first + second;
    }
    else if(nextOperator === '-')
    {
        return first- second;
    }
    else if(nextOperator === '/')
    {
        return first / second;
    }
    else if( nextOperator ==='*')
    {
        return first * second;
    }
    return second;
}

function inputNumber(num){
    if(waitingForSecondValue){
        displayValue=num;
        waitingForSecondValue=false;
    }
    else{
        displayValue=displayValue ==='0' ? num:displayValue +num;
    }
    console.log(displayValue,fisrtValue,operator,waitingForSecondValue);
}

function inputDecimal(){
    if(!displayValue.includes('.')){
        displayValue += '.';
         }
}
function clear() {
    displayValue = '0'; 
  }

  function cleares() {
    if (displayValue.length > 1) {
      displayValue = displayValue.slice(0, -1);
    } else {
      displayValue = '0';
    }
  }