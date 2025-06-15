const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#Uppercase");
const lowercaseCheck = document.querySelector("#Lowercase");
const numberCheck = document.querySelector("#Number");
const symbolCheck = document.querySelector("#Symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generate-password");
const allCheckbox = document.querySelectorAll("input[type=checkbox]");
const symbols = "~`!@#$%^&*()_-+={}[]:;<>,.?/*"

let password = "";
let passwordLength = 10;
let checkCount = 1 ;
uppercaseCheck.checked = true;
handleSlider();

setIndicator("#ccc");

// set password length
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength - min)*100 / (max - min)) + "% 100%";
}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumber(){
    return getRandomInt(0 , 9);
}
function generateLowerCase(){
    return String.fromCharCode(getRandomInt(97 , 123)) ;
}
function generateUpperCase(){
    return String.fromCharCode(getRandomInt(65 , 90)) ;
}
function generateSymbol(){
     return symbols.charAt(getRandomInt(0 , symbols.length - 1)) ;
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbols = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numberCheck.checked) hasNumber = true;
    if (symbolCheck.checked) hasSymbols = true;

    if (hasUpper && hasLower && (hasNumber || hasSymbols) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if ((hasUpper || hasLower) && (hasNumber || hasSymbols) && passwordLength >= 6) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

async function copyContent(){
    try{
     await navigator.clipboard.writeText(passwordDisplay.value);
     copyMsg.innerText = "Copied!";
    }
    catch (e) {
        copyMsg.innerText = "Failed to copy!";
    }
    copyMsg.classList.add("active");
    setTimeout(()=>{
        copyMsg.classList.remove("active");
    }, 2000);
}

inputSlider.addEventListener("input", (e) =>{
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener("click", () => {
    if(passwordDisplay.value){
        copyContent();
    }
});

function handleCheckBoxChange(){
    checkCount = 0 ;
    allCheckbox.forEach(element => {
        if(element.checked){
            checkCount++;
        }
    });

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckBoxChange);
});

function shufflePassword(array){
    // Fisher Yates Method
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((element) => { str += element; });
    return str;
}

generateBtn.addEventListener("click", () => {
    if(checkCount <= 0) return ;
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    password = "";
    // if(uppercaseCheck.checked){
    //     password += generateUpperCase();
    // }
    // if(lowercaseCheck.checked){
    //     password += generateLowerCase();
    // }
    // if(numberCheck.checked){
    //     password += getRandomNumber();
    // }
    // if(symbolCheck.checked){
    //     password += generateSymbol();
    // }

    let funcArr = [] ;

    if(uppercaseCheck.checked){
        funcArr.push(generateUpperCase);
    }
    if(lowercaseCheck.checked){
        funcArr.push(generateLowerCase);
    }
    if(numberCheck.checked){
        funcArr.push(getRandomNumber);
    }
    if(symbolCheck.checked) {
        funcArr.push(generateSymbol);
    }

    for(let i = 0 ; i<funcArr.length ; i++){
        password += funcArr[i]();
    }

    for(let i = 0 ; i<passwordLength - funcArr.length ; i++){
        password += funcArr[getRandomInt(0 , funcArr.length-1)]();
    }

    password = shufflePassword(Array.from(password));
    passwordDisplay.value = password;
    calcStrength();
});