// Mois : 0 = janvier, 11 = décembre
const holidays = [
  { name: "New Year's Day", month: 0, day: 1 },
  { name: "Labour Day", month: 4, day: 1 },
  { name: "Throne Day (Morocco)", month: 6, day: 30 },
  { name: "Independence Day (Morocco)", month: 10, day: 18 }
];

function timeUntilNextHoliday() {
  const now = new Date();
  const year = now.getFullYear();

  // Construire les dates des jours fériés pour cette année et la suivante
  const upcoming = [];
  for (const h of holidays) {
    for (const y of [year, year + 1]) {
      const date = new Date(y, h.month, h.day);
      if (date > now) {
        upcoming.push({ name: h.name, date });
      }
    }
  }

  // Trier et prendre le plus proche
  upcoming.sort((a, b) => a.date - b.date);
  const next = upcoming[0];

  // Calcul du temps restant
  const totalSeconds = Math.floor((next.date - now) / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n) => String(n).padStart(2, "0");

  return {
    today: now.toDateString(),
    holiday: next.name,
    message: `the next holiday (${next.name}) is in ${days} days and ${pad(hours)}:${pad(minutes)}:${pad(seconds)} hours`,
  };
}

module.exports = timeUntilNextHoliday;