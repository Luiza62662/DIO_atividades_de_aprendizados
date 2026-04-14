const QRCode = require('qrcode');

async function generateQRCode(url) {
  try {
    const fileName = `qrcode-${Date.now()}.png`;

    await QRCode.toFile(fileName, url, {
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });

    console.log("\n✅ QR Code gerado com sucesso!");
    console.log(`📁 Arquivo: ${fileName}\n`);
  } catch (error) {
    console.error("❌ Erro ao gerar QR Code:", error);
  }
}

module.exports = { generateQRCode };
