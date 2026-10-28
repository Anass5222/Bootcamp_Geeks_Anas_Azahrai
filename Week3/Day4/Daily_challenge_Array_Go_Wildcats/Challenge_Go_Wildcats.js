const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

// 1. Tableau des usernames avec "!" à la fin (avec forEach)
const usernames = [];
gameInfo.forEach(player => {
  usernames.push(player.username + "!");
});
console.log(usernames);


// 2. Usernames des joueurs avec un score supérieur à 5
const winners = [];
gameInfo.forEach(player => {
  if (player.score > 5) {
    winners.push(player.username);
  }
});
console.log(winners);

// 3. Score total des joueurs
const totalScore = gameInfo.reduce((total, player) => total + player.score, 0);
console.log(totalScore);
