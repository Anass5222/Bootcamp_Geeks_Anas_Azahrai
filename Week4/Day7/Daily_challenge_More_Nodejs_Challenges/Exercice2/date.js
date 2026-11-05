function minutesLived(birthdate) {
  // Format attendu : "YYYY-MM-DD" (exemple : "2000-05-15")
  const birth = new Date(birthdate);

  if (isNaN(birth.getTime())) {
    throw new Error('Invalid date. Use the format "YYYY-MM-DD".');
  }

  const now = new Date();

  if (birth > now) {
    throw new Error("The birthdate cannot be in the future.");
  }

  // Différence en millisecondes -> minutes
  const diffMs = now - birth;
  return Math.floor(diffMs / (1000 * 60));
}

module.exports = minutesLived;