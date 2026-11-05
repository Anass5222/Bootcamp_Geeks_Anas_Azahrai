function timeUntilNewYear() {
  const now = new Date();

  // 1er janvier de l'année prochaine, à 00:00:00
  const newYear = new Date(now.getFullYear() + 1, 0, 1);

  // Différence en millisecondes
  const diff = newYear - now;

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Ajoute un 0 devant si besoin : 5 -> "05"
  const pad = (n) => String(n).padStart(2, "0");

  return `the 1st January is in ${days} days and ${pad(hours)}:${pad(minutes)}:${pad(seconds)} hours`;
}

module.exports = timeUntilNewYear;

