const timeUntilNextHoliday = require("./date");

const result = timeUntilNextHoliday();

console.log("Today's date:", result.today);
console.log(result.message);