'use strict';

const quoteCon = document.getElementById('quote-container');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const twitter = document.getElementById('twitter');
const newQuote = document.getElementById('new-quote');
const loader = document.getElementById('loader');
const exit = document.getElementById('exit');





newQuote.addEventListener('click', newqq);

  function newqq () {

    // exit.addEventListener('click', );


    let random = Math.floor(Math.random() * 14);

if (random <= 2){
  random = 'Dream big. Start small. Stay consistent.';
}else if (random <= 4 && random >= 2){
  random = 'Your only limit is the one you refuse to challenge.'
}else if (random <= 6 && random >= 4) {
  random = 'Success is built one small step at a time.';
}else if (random <= 8 && random >= 6) {
  random = 'Progress beats perfection.';
}else if (random <= 10 && random >= 8) {
  random = 'Make today count.';
}else if (random <= 12 && random >= 10) {
  random = 'You become what you repeatedly do.';
}else if (random <= 14 && random >= 12) {
  random = 'Hard work whispers before success shouts.';
};

let randomAuth = Math.floor(Math.random() * 8);

if (randomAuth <= 2) {
  randomAuth = 'Abraham Lincoln';
} else if (randomAuth <= 4 && randomAuth >= 2) {
  randomAuth = 'Musely';
} else if (randomAuth <= 6 && randomAuth >= 4) {
  randomAuth = 'Donald Trump';
}

    quote.innerHTML = '';
    author.innerHTML = '';


  let newQ = document.createElement('p');
  let auth = document.createElement('p');

  auth.textContent = randomAuth;
  newQ.textContent = random;

  quote.appendChild(newQ);
  author.appendChild(auth);

  exit.style.display = "block";
}