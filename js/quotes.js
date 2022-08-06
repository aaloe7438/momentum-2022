const quotes = [
    {
        quote: "Happiness is how: not a what. A talent, not an object",
        author: "Hermann Hesse", 
    },
    {
        quote: "Most folks are about as happy as they make up their minds to be.",
        author: "Abraham Lincoln",
    },
    {
        quote: "The starting point of all achievement is desire.",
        author: "Napolen Hill",
    },
    {
        quote: "One must live the way one thinks or end up thinking the way one has lived.",
        author: "Paul Bourget", 
    },
    {
        quote: "Victory belongs to the most persevering.",
        author: "Napoleon Bonaparte", 
    },    
    {
        quote: "Everything that I understand, I understand only because I love.",
        author: "Lev Tolstoy", 
    },       
    {
        quote: "Respect yourself and others will respect you.",
        author: "Confucius", 
    }, 
    {
        quote: "When you repeat a mistake, it is not a mistake anymore: it is a decision.",
        author: "Paulo Coelho", 
    },  
    {
        quote: "Great hopes make great men.",
        author: "Thomas Fuller", 
    },   
    {
        quote: "Strong reasons make strong actions.",
        author: "William Shakespeare", 
    },             
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
