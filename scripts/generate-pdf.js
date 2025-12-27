const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Read the CV file (which is HTML but technically .md extension currently)
  const cvPath = path.join(__dirname, '../Yeasir_Ahnaf_CV.md');
  let content = fs.readFileSync(cvPath, 'utf8');

  // Since the file might be raw HTML inside MD, we just use it directly.
  // If it was pure Markdown, we'd convert it, but we refactored it to HTML.
  // We'll wrap it in standard HTML tags just in case, if they are missing, for safety.
  if (!content.trim().startsWith('<!DOCTYPE html>')) {
      content = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>CV</title>
        </head>
        <body>
          ${content}
        </body>
      </html>`;
  }

  await page.setContent(content, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: path.join(__dirname, '../Yeasir_Ahnaf_CV.pdf'),
    format: 'A4',
    printBackground: true,
    margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
    }
  });

  await browser.close();
  console.log('PDF Generated Successfully');
})();
