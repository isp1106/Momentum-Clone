const quotes = [
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
  },
  {
    quote: "In order to be irreplaceable, one must always be different",
    author: "Coco Chanel",
  },
  {
    quote: "Java is to JavaScript what car is to Carpet.",
    author: "Chris Heilmann",
  },
  {
    quote: "Knowledge is power.",
    author: "Francis Bacon",
  },
  {
    quote:
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    author: "Dan Salomon",
  },
  {
    quote: "Ruby is rubbish! PHP is phpantastic!",
    author: "Nikita Popov",
  },
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  {
    quote: "Fix the cause, not the symptom.",
    author: "Steve Maguire",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
