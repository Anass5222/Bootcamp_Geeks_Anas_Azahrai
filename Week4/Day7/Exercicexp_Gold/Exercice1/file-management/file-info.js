const path = require("path");
const fs = require("fs");

function displayFileInfo() {
  const filePath = path.join(__dirname, "data", "example.txt");

  if (!fs.existsSync(filePath)) {
    console.log("The file does not exist:", filePath);
    return;
  }

  const stats = fs.statSync(filePath);

  console.log("File exists:", true);
  console.log("File path:", filePath);
  console.log("Size:", stats.size, "bytes");
  console.log("Creation time:", stats.birthtime);
}

module.exports = displayFileInfo;