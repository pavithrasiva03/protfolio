const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});

const quotes = {
  "Steve Jobs": "Innovation distinguishes between a leader and a follower.",
  "Elon Musk": "When something is important enough, you do it even if the odds are against you.",
  "Ada Lovelace": "That brain of mine is something more than merely mortal.",
  "Sundar Pichai": "Wear your failures as a badge of honor.",
  "Satya Nadella": "Be passionate and bold. Always keep learning. You stop doing useful things if you don't learn.",
   "APJ Abdul Kalam": "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."
};

const personEl = document.getElementById("quote-person");
const quoteEl = document.getElementById("quote-text");

document.querySelectorAll(".fan-img").forEach(img => {
  const person = img.dataset.person;

  img.addEventListener("mouseenter", () => updateQuote(person));
  img.addEventListener("click", () => updateQuote(person)); // mobile
});

function updateQuote(person) {
  personEl.textContent = person;
  quoteEl.textContent = quotes[person];
}


