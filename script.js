const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('Uppercase');
const lowercaseEl = document.getElementById('Lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generator');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
    lower: getRamdomLower,
    upper: getRamdomUpper,
    number: getRamdomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password){ return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to the clipboard!')
})

generateEl.addEventListener('click',() =>{
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbols = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasSymbols,length);
})

function generatePassword( lower, upper, number, symbol, length){
    let generatePassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    

    if(typesCount === 0){
        return ''
    }

    for(let i=0;i < length ;i+= typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0]
            generatePassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatePassword.slice(0,length)

    return finalPassword

    

}

function getRamdomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

/* console.log(getRamdomLower()) */

function getRamdomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
/* console.log(getRamdomUpper()) */

function getRamdomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}
/* console.log(getRamdomNumber()) */

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]+=_-?/<,>:;'
    return symbols[Math.floor(Math.random()*symbols.length)];
}

/* console.log(getRandomSymbol()); */
