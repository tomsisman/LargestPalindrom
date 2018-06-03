let palindrom = 0
let startTime

// Reverse number
const reverseOfNumber = (number) => parseInt(number.toString().split('').reverse().join(''));

// Checks the orginal number with the reserved number
const isPalindromic = (number) => (number === reverseOfNumber(number) ? true : false);

// Creates minium number
const minValue = (numberOfDigits) => {
    let minNumber = 1
    for (let i = 1; i < numberOfDigits; i++) minNumber += '0'
    return parseInt(minNumber)
}

// Creates maxium number
const maxValue = (numberOfDigits) => {
    let maxNumber = 9
    for (let i = 1; i < numberOfDigits; i++) maxNumber += '9'
    return parseInt(maxNumber)
}

// Input the number of digits, output the largest palindrom
const getLargestPalindrom = (numberOfDigits) => {
    let minNumber = minValue(numberOfDigits)
    let maxNumber = maxValue(numberOfDigits)
    let x, y, product;
    for (x = maxNumber; x >= minNumber; x--) {
        for (y = x; y <= maxValue(numberOfDigits); y++) {
            product = x * y;
            if (isPalindromic(product)) {
                if (palindrom < product) { 
                    palindrom = product;
                }
            }
        } 
        
        if (palindrom > product) {
            return palindrom
        }
    }
}

// *** Below displays to DOM ***

// Watches for submission, starts a timer, does calculation and then renders the result to DOM
document.querySelector('#digit-number-form').addEventListener('submit', (e) => {
    e.preventDefault();
    palindrom = 0;
    startTime = Date.now();
    palindrom = getLargestPalindrom(e.target.digitNo.value)
    renderToDOM()
});

// Removes html from results-div, then adds new values. 
const renderToDOM = () => {
    document.querySelector('#results-div').innerHTML = ''
    const resultEl = document.createElement('p')
    const resultText = document.createTextNode(`${palindrom} - ${Date.now() - startTime}ms`)
    resultEl.appendChild(resultText);
    document.querySelector('#results-div').appendChild(resultEl)
}