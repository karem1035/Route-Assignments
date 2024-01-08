const button = document.querySelector('.btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const quotesArray = [
  {
    quote:
      'The only limit to our realization of tomorrow will be our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote:
      'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  { quote: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
  {
    quote: 'Strive not to be a success, but rather to be of value.',
    author: 'Albert Einstein',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: 'Robert Frost',
  },
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    quote:
      'You have within you right now, everything you need to deal with whatever the world can throw at you.',
    author: 'Brian Tracy',
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
  {
    quote: 'Life is 10% what happens to us and 90% how we react to it.',
    author: 'Charles R. Swindoll',
  },
];

quote.textContent = quotesArray[0].quote;
author.textContent = quotesArray[0].author;

let prev = 0;

function quoteChange() {
  let current = Math.floor(Math.random() * 10);
  if (current === prev) quoteChange();
  quote.textContent = quotesArray[current].quote;
  author.textContent = quotesArray[current].author;
}

button.addEventListener('click', quoteChange);
