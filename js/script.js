import {
    getCaloriesDefaultWeight,
    getCaloriesLowWeight,
    getCalorieUpWeight,
    isField,
    isValidate,
    resetParameters
} from "./tools.js";

const calculationButton = document.querySelector('.form__submit-button');
const resetButton = document.querySelector('.form__reset-button');
const resultCalculate = document.querySelector('.counter__result');
const groupInput = document.querySelector('.inputs-group');

const caloriesNorm = resultCalculate.querySelector('#calories-norm');
const caloriesMinimal = resultCalculate.querySelector('#calories-minimal');
const caloriesMaximal = resultCalculate.querySelector('#calories-maximal');

const groupInputHandler = () => {
    if(isField()){
        calculationButton.disabled = false;
    }
}

groupInput.addEventListener('change', groupInputHandler);

const groupInputResetHandler = () => {
        resetButton.disabled = false;
}

groupInput.addEventListener('change', groupInputResetHandler);


const calculateButtonClickHandler = (evt) => {
    evt.preventDefault();
    if(isValidate() && isField()){
        caloriesNorm.textContent = getCaloriesDefaultWeight().toLocaleString();
        caloriesMinimal.textContent = getCaloriesLowWeight().toLocaleString();
        caloriesMaximal.textContent = getCalorieUpWeight().toLocaleString();
    }
    else {
        caloriesNorm.textContent = '?';
        caloriesMinimal.textContent = '?';
        caloriesMaximal.textContent = '?';
        const counterResultContainer = document.querySelector('.counter__result');
        const errorBlock = document.createElement('div');
        errorBlock.style.color = 'red';
        errorBlock.textContent = 'Введите корректные данные для расчета!';
        counterResultContainer.append(errorBlock);
        setTimeout(() => {
            errorBlock.remove();
        }, 6000);
    }
    resultCalculate.classList.remove('counter__result--hidden');
}

calculationButton.addEventListener('click', calculateButtonClickHandler);

const resetButtonHandler = () => {
    calculationButton.disabled = true;
    resetButton.disabled = true;
    resultCalculate.classList.add('counter__result--hidden');
    resetParameters();
}

resetButton.addEventListener('click', resetButtonHandler);
