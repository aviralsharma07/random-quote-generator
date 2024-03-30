const API_URL = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  const quoteData = await response.json();
  quote.innerHTML = quoteData.content;
  author.innerHTML = quoteData.author;
}

// getQuote(API_URL);

function tweetQuote() {
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "--- by " + author.innerHTML, "Tweet Window", "width=600,height=400");
}
