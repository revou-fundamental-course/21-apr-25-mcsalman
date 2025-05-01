document.addEventListener('DOMContentLoaded',intitLoad, validateForm );

function validateForm() {
    const inputCelcius = document.getElementById('convertInput');
 
    console.log(inputCelcius.value);
 
    if (inputCelcius.value === '') {
        alert('Input tidak boleh kosong!');
    } else {
        /// Convert to fahrenheit
    }
}


function intitLoad()
{
    console.log('Temperature converter script loaded');

    // Initialize elements
    const inputCelsius = document.getElementById('convertInput');
    const inputFahrenheit = document.getElementById('resulInput');
    const inputCalculation = document.getElementById('calculation');

    const btnConvert = document.getElementById('btnConvert');
    const btnReset = document.getElementById('btnReset');
    const btnReverse = document.getElementById('btnReverse');

    
    // Convert Celsius 
    function convert(reverse = false) {
        if (reverse == false && inputCelsius.value !== '') {
            const convertInput = parseFloat(inputCelsius.value);
            const resulInput = (convertInput * 9) / 5 + 32;
            inputFahrenheit.value = resulInput.toFixed(2);
            inputCalculation.value = `${convertInput}°C * (9/5) + 32 = ${resulInput.toFixed(
                2
            )}°F`;
        }

        if (reverse && inputFahrenheit.value !== '') {
            const resulInput = parseFloat(inputFahrenheit.value);
            const convertInput = ((resulInput - 32) * 5) / 9;
            inputCelsius.value = convertInput.toFixed(2);
            inputCalculation.value = `(${resulInput}°F - 32) * 5/9 = ${convertInput.toFixed(
                2
            )}°C`;
        }
    }

    function reset() {
        document.getElementById('convertInput').value = '';
        document.getElementById('resulInput').value = '';
        document.getElementById('calculation').value = '';
    }

    function reverse() {
        convert(true);
    }

    // Event listeners
    btnConvert.addEventListener('click', () => convert(false));
    btnReset.addEventListener('click', reset);
    btnReverse.addEventListener('click', reverse);
}