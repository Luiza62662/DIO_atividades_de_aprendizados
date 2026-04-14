const { askForLink } = require('./prompt');
const { generateQRCode } = require('./qrService');

async function main() {
  const url = askForLink();

  if (!url) {
    console.log("❌ URL inválida!");
    return;
  }

  await generateQRCode(url);
}

main();
