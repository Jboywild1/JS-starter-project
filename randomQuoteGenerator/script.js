'use strict';

const quoteCon = getElementById('quote-container');
const quote = getElementById('quote');
const author = getElementById('author');
const twitter = getElementById('twitter');
const newQuote = getElementById('new-quote');
const loader = getElementById('loader');


const random = Math.floor(Math.random() * 8);

if (random <= 2){
  random = 'Dream big. Start small. Stay consistent.';
}else if (random <= 4){
  random = 'Your only limit is the one you refuse to challenge.'
}else if (random <= 6) {
  random = 'Success is built one small step at a time.';
}


newQuote.onclick = function () {

  const newQ = document.createElement('p');
  newQ.textContent = random;
}