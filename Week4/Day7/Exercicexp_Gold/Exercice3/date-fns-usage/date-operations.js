const { addDays, format } = require("date-fns");

function displayDateOperations() {
  // 1. Date et heure actuelles
  const now = new Date();

  // 2. Ajouter 5 jours
  const futureDate = addDays(now, 5);

  // 3. Formater la date en texte
  const formattedDate = format(futureDate, "yyyy-MM-dd HH:mm:ss");
  const readableDate = format(futureDate, "EEEE, MMMM do yyyy");

  // 4. Afficher dans le terminal
  console.log("Current date:", format(now, "yyyy-MM-dd HH:mm:ss"));
  console.log("Date + 5 days:", formattedDate);
  console.log("Readable format:", readableDate);
}

module.exports = displayDateOperations;