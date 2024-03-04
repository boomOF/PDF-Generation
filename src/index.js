const PDFDocument = require('pdfkit');
const fs = require('fs');

function generatePDF(outputPath) {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(outputPath));

  doc.fontSize(25).text('Hello World!', 100, 100);

  doc.end();
}

module.exports = {
  generatePDF
}
