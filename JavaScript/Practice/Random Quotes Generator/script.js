let quotes = [
  "Focus on progress, not perfection.",
  "Grow through what you go through.",
  "Embrace failure as a stepping stone to success.",
  "Collect moments, not things.",
  "Every moment is a fresh beginning.",
  "Bloom and grow.",
  "Beauty is being comfortable in your own skin.",
  "Spend time with yourself.",
  "All good things are wild and free.",
  "Living to die, dying to live.",
  "It’s okay to feel lost sometimes.",
  "Create with the heart, build with the mind.",
  "Everything affects everything.",
  "Let your spirit fly free.",
  "Autumn shows us how beautiful it is to let things go.",
  "Find happiness in the small things.",
  "In the right light, at the right time, everything is extraordinary.",
  "Do more of what makes you happy.",
  "Stars can’t shine without darkness.",
  "Find joy in your journey.",
  "Step by step, day by day.",
  "Think of the beauty around you and be happy.",
  "Follow your dreams; they know the way.",
  "Magic is something you create.",
  "Let the light reflect your future path.",
  "Feeling is believing.",
  "Take me where summer never ends.",
  "Spread your wings and fly.",
  "Think less, live more.",
  "All the best things begin with a dream.",
  "Every day is one you’ve never seen before.",
  "A dream with purpose becomes ambition.",
  "Create your own opportunities.",
  "Every morning is a new beginning.",
  "Between the pages of a book is a lovely place to be.",
  "Be a rainbow on someone’s rainy day.",
  "Let things flow naturally toward where they are meant to go.",
  "Life is a journey, not a race.",
  "This flower smells beautiful.",
  "You don’t owe perfection to anyone.",
  "Mindset is everything.",
  "Dare to be different.",
];

let generateQuotes = document.querySelector("button");
let body = document.body;

generateQuotes.addEventListener("click", function () {
  let quote = document.createElement("p");

  let redColor = Math.floor(Math.random() * 256);
  let greenColor = Math.floor(Math.random() * 256);
  let blueColor = Math.floor(Math.random() * 256);

  let posX = Math.floor(Math.random() * 80);
  let posY = Math.floor(Math.random() * 80);

  let rotat = Math.floor(Math.random() * 361);
  let textSize = Math.floor(Math.random() * 3);

  quote.style.color = "white";
  quote.style.position = "absolute";
  quote.style.top = posY + "vh";
  quote.style.left = posX + "vw";
  quote.style.padding = 10 + "px";
  quote.style.borderRadius = 5 + "px";
  quote.style.rotate = rotat + "deg";
  quote.style.fontSize = textSize + "rem";
  quote.style.backgroundColor = `rgb(${redColor},${greenColor},${blueColor})`;

  quoteIndex = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[quoteIndex];

  body.appendChild(quote);
});
