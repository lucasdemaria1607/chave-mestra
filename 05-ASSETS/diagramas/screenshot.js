const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const diagrams = [
  '01-loop-central.html',
  '02-10-atos.html',
  '03-ativos-de-percepcao.html',
  '04-esteira.html',
  '05-saber-fazer.html',
  '06-olimpo.html',
];

const DIR = __dirname;
const OUT = path.join(__dirname, 'png');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--force-device-scale-factor=2',
      '--allow-file-access-from-files',
    ],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });

  for (const file of diagrams) {
    const name = file.replace('.html', '');
    console.log(`Capturando ${name}...`);

    const filePath = `file:///${path.join(DIR, file).replace(/\\/g, '/')}`;
    await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000)); // aguarda Google Fonts

    const outPath = path.join(OUT, `${name}.png`);
    await page.screenshot({
      path: outPath,
      type: 'png',
      clip: { x: 0, y: 0, width: 1080, height: 1350 },
    });
    console.log(`  ✓ ${outPath}`);
  }

  await browser.close();
  console.log('\n✓ Todos os diagramas em /png/');
})();
