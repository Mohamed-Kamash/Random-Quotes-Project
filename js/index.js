var quotes = [
  `“Be yourself; everyone else is already taken.” <br>
  ― Oscar Wilde`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br>
  ― Albert Einstein`,
  `“So many books, so little time.” <br>
  ― Frank Zappa`,
  `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <br>
  ― Bernard M. Baruch`,
  `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” <br>
  ― Dr. Seuss`,
  `“You only live once, but if you do it right, once is enough.” <br>
  ― Mae West`,
  `“In three words I can sum up everything I've learned about life: it goes on.” <br>
  ― Robert Frost`,
  `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.” <br>
  ― J.K. Rowling, Harry Potter and the Goblet of Fire`,
  `“If you tell the truth, you don't have to remember anything.” <br>
  ― Mark Twain`,
  `“A friend is someone who knows all about you and still loves you.” <br>
  ― Elbert Hubbard`,
  `“ضربو الاعور على عينو قالك خربانة خربانة“ <br>
  انا اللى بقول عادى :D :D-`,
];
function randomQ() {
  var x = Math.floor(Math.random() * quotes.length);
  document.getElementById("demo").innerHTML = quotes[x];
}
