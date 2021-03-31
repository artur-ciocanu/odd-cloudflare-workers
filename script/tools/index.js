const fs = require("fs");
const DIST_FILE = __dirname + "/../dist/index.js";
// This is required for Cloudflare Worker environment
const PREPEND = `var window = self;`;

const isFilePresent = () => fs.existsSync(DIST_FILE);

const readFile = () => {
  return fs.readFileSync(DIST_FILE).toString("utf-8");
}

const writeFile = content => {
  fs.writeFileSync(DIST_FILE, content);
}

const main = () => {
  if (!isFilePresent()) {
    throw new Error(`${DIST_FILE} does not exists.`);
  }

  const content = readFile();

  writeFile(PREPEND + `\n` + content);
}

main();