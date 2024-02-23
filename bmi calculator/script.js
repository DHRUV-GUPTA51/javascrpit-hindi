// const form = document.querySelector('form');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const result = document.querySelector('#result');

//     if (height == '' || isNaN(height)) {
//         result.innerHTML = `enter the valid number ${height}`
//     } else if (weight == '' || isNaN(weight)) {
//         result.innerHTML = `enter the valid number ${weight}`
//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);

//         result.innerHTML = < span > $ { bmi } < /span>;

//         const alpha = bmi;
//         const bmistatus = document.createElement('span');
//         if (alpha < 18.6) {
//             bmistatus.innerHTML = 'YOU ARE UNDER WEIGHT'
//         } else if (alpha > 25.9) {
//             bmistatus.innerHTML = 'YOU ARE oVER WEIGHT'

//         } else {
//             bmistatus.innerHTML = 'Congratulations! You are in a healthy weight range.';
//         }
//         result.appendChild(bmistatus);
//     }
// });

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        result.innerHTML = 'Please enter valid numbers for height and weight.';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML = '<span>' + bmi + '</span>';

        const alpha = parseFloat(bmi);
        const bmistatus = document.createElement('span');
        if (alpha < 18.6) {
            bmistatus.innerHTML = 'YOU ARE UNDERWEIGHT';
        } else if (alpha > 25.9) {
            bmistatus.innerHTML = 'YOU ARE OVERWEIGHT';
        } else {
            bmistatus.innerHTML = 'Congratulations! You are in a healthy weight range.';
        }
        result.appendChild(bmistatus);
    }
});