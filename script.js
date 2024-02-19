let d = new Date();
setInterval(() => {
  document.getElementById("date").innerHTML = Date();
}, 1000);
console.log(d);
async function newQuote() {
  let quote_container = document.getElementById("quote-container");
  quote_container.innerHTML = "<p>Loading...</p>";
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();

  const quotes = `
    <p>${data.content}</p>
    <p>${data.author}</p>
  `;
  quote_container.innerHTML = quotes;
}
