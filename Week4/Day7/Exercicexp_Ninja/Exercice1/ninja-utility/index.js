const { program } = require("commander");
const greet = require("./commands/greet");
const fetchWeather = require("./commands/fetch");
const readFile = require("./commands/read");

program
  .name("ninja-utility")
  .description("A command-line utility with greet, fetch and read commands")
  .version("1.0.0");

program
  .command("greet")
  .description("Display a colorful greeting")
  .argument("[name]", "name to greet", "Ninja")
  .action((name) => greet(name));

program
  .command("fetch")
  .description("Fetch the current weather from a public API")
  .option("--lat <latitude>", "latitude", "48.85")
  .option("--lon <longitude>", "longitude", "2.35")
  .action((options) => fetchWeather(options));

program
  .command("read")
  .description("Read and display the content of a file")
  .argument("<file>", "path of the file to read")
  .action((file) => readFile(file));

if (process.argv.length <= 2) {
  greet("Ninja");
} else {
  program.parseAsync(process.argv);
}