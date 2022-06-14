const firstNameInput = document.querySelector('#first-name')
const lastNameInput = document.querySelector('#last-name')
const numberInput = document.querySelector('#number-input')
const monthInput = document.querySelector('#expiration-month')
const yearInput = document.querySelector('#expiration-year')
const cvvInput = document.querySelector('#cvv-input')

const fullNameInput = firstNameInput + lastNameInput 

const nameDisplay = document.querySelector('.name')
const firstNumbersDisplay = document.querySelector('.first')
const secondNumbersDisplay = document.querySelector('.second')
const thirdNumbersDisplay = document.querySelector('.third')
const fourthNumbersDisplay = document.querySelector('.fourth')
const monthDisplay = document.querySelector('.month')
const yearDisplay = document.querySelector('.year')
const cvvDisplay = document.querySelector('.cvv')

numberInput.oninput = () => {
    firstNumbersDisplay.innerHTML = numberInput.value.substring(0, 4);
    secondNumbersDisplay.innerHTML = numberInput.value.substring(4, 8);
    thirdNumbersDisplay.innerHTML = numberInput.value.substring(8, 12);
    fourthNumbersDisplay.innerHTML = numberInput.value.substring(12, 16);
}

firstNameInput.oninput = () => {
    nameDisplay.innerHTML = firstNameInput.value + ' ' + lastNameInput.value;
}

lastNameInput.oninput = () => {
    nameDisplay.innerHTML = firstNameInput.value + ' ' + lastNameInput.value;
}

monthInput.oninput = () => {
    monthDisplay.innerHTML = monthInput.value;
}

yearInput.oninput = () => {
    yearDisplay.innerHTML = yearInput.value.substring(2, 4);
}

cvvInput.onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

cvvInput.onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

cvvInput.oninput = () => {
    document.querySelector('.cvv').innerText = cvvInput.value;
}