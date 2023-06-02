const age = document.querySelector('#age');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const gender = document.querySelector('#gender-male');
const activityMin = document.querySelector('#activity-minimal');

const resetParameters = () => {
    age.value = '';
    height.value = '';
    weight.value = '';
    gender.checked = true;
    activityMin.checked = true;
}

const isField = () => {
    return age.value !== '' && height.value !== '' && weight.value !== '';
}

const isValidate = () => {
    return age.value > 0 && age.value < 110 && height.value > 0 && height.value < 250 && weight.value > 0 &&
        weight.value < 200
}

const getNormFromWomen = () => {
    return (10 * weight.value) + (6.25 * height.value) - (5 * age.value) - 161;
}

const getNormFromMen = () => {
    return (10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5;
}

const getNorm = () => gender.checked ? getNormFromMen() : getNormFromWomen();

const getActivity = () => {
    const activityValues = {
        'min': 1.2,
        'low': 1.375,
        'medium': 1.55,
        'high': 1.725,
        'max': 1.9
    };
    const checkedValue = document.querySelector('[name="activity"]:checked').value;
    return activityValues[checkedValue] || 1.2;
}

const getCaloriesDefaultWeight = () => {
    return Math.round(getNorm() * getActivity());
}

const getCaloriesLowWeight = () => {
    return Math.round(getCaloriesDefaultWeight() - getCaloriesDefaultWeight() * 0.15);
}

const getCalorieUpWeight = () => {
    return Math.round(getCaloriesDefaultWeight() + getCaloriesDefaultWeight() * 0.15);
}

export {
    resetParameters,
    isValidate,
    isField,
    getCaloriesDefaultWeight,
    getCaloriesLowWeight,
    getCalorieUpWeight,
}
