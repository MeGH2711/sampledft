const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
  
  // Scroll to gallery section
  await page.evaluate(() => {
    const el = document.getElementById('gallery');
    if(el) el.scrollIntoView();
  });
  
  // Wait a bit for animations
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  await page.screenshot({ path: 'gallery_screenshot.png' });
  await browser.close();
  console.log('Screenshot taken!');
})();
