const quotes = [
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    // Add more quotes here
];

// Correct way to select individual elements
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

let currentQuoteIndex = 0;

function showQuote(index) {
    const quote = quotes[index];
    quoteText.innerText = `"${quote.text}"`;
    quoteAuthor.innerText = `- ${quote.author}`;
}

// Event listener for the button
newQuoteBtn.addEventListener("click", () => {
    showQuote(currentQuoteIndex);
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
});

// Show the first quote on page load
showQuote(currentQuoteIndex);
