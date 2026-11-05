const fs = require("fs");
const path = require("path");

function readFileContent() {
  const filePath = path.join(__dirname, "files", "file-data.txt");

  try {
    const content = fs.readFileSync(filePath, "utf-8");
    console.log("Content of file-data.txt:");
    console.log(content);
  } catch (error) {
    console.log("Error while reading the file:", error.message);
  }
}

module.exports = readFileContent;