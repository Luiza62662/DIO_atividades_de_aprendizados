const prompt = require('prompt-sync')();

function askForLink() {
  console.log("\n🛒 GERADOR DE QR CODE PARA E-COMMERCE\n");
  const url = prompt("🔗 Digite o link do produto: ");
  return url;
}

module.exports = { askForLink };
