'use strict';


//CALLING AND SAVING ID'S INSIDE VARIABLES
const passwordOutput = document.getElementById('password-output');
const lengthInput = document.getElementById('length-input');
const upperCaseInput = document.getElementById('uppercase-input');
const lowerCaseInput = document.getElementById('lowercase-input');
const numbersInput = document.getElementById('numbers-input');
const symbolsInput = document.getElementById('symbols-input');
const generateBtn = document.getElementById('generate-btn');

const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '1234567890';
const symbolChars = '!@#$%^&*()_+{}:"|<>?~';

//GENERATE PASSWORD BUTTON COMMAND
generateBtn.addEventListener('click', () => {
  let chars = '';

  //OPTIONS
  if (upperCaseInput.checked) {
    chars += upperChars;
  }

  if (lowerCaseInput.checked) {
    chars += lowerChars;
  }

  if (numbersInput.checked) {
    chars += numberChars;
  }

  if (symbolsInput.checked) {
    chars += symbolChars;
  }

  //ALERTS
  if (chars === '') {
    alert('Please select atleast one type of character');
    return;
  }

  const length = Number(lengthInput.value);

  if (!length || length < 8 || length > 32) {
    alert('Please enter a valid password  length between 8 and 32');
    return;
  }

  let pass = '';


//THE LOOP FOR THE PASSWORD
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    pass += chars[randomIndex];
  }

  passwordOutput.textContent = pass;
});

// input.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       generateBtn.click();
//     }
//   });
