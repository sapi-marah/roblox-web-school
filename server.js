const express = require('express');
const app = express();
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const path = require('path');
let current_screenshot = undefined;
let browser = undefined;
let page = undefined;
app.use(express.json());
puppeteer.use(StealthPlugin());
app.post('/click', async function(req, res) {
    let { x, y } = req.body;
    if (!page) {
        return res.status(500).send("Page hasn't loaded.");
    }
    await page.mouse.click(
        Number(x),
        Number(y)
    );
    return res.status(200).send('Clicked at: ' + x + ', ' + y);
});
app.post('/keydown', async function(req, res) {
    let { key } = req.body;
    if (!page) {
        return res.status(500).send("Page hasn't loaded.");
    }
    await page.keyboard.down(key);
    return res.status(200).send('Held key: ' + key);
});
app.post('/keyup', async function(req, res) {
    let { key } = req.body;
    if (!page) {
        return res.status(500).send("Page hasn't loaded.");
    }
    await page.keyboard.up(key);
    return res.status(200).send('Unheld key: ' + key);
});
setInterval(async function() {
    try {
        let screenshot = await page.screenshot({ encoding : 'base64' });
        screenshot = 'data:image/jpeg;base64,' + screenshot;
        current_screenshot = screenshot;
    } catch(e) {
        current_screenshot = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original';
    }
}, 500);
app.get('/screenshot', async function(req, res) {
    if (current_screenshot) {
        return res.send(current_screenshot);
    } else {
        return res.send('https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original');
    }
});
app.post('/setViewport', async function(req, res) {
    let { width, height } = req.body;
    if (!page) {
        return res.status(500).send("Page hasn't loaded.");
    }
    await page.setViewport({
        width : Number(width),
        height : Number(height)
    });
    return res.status(200).send('Successfully had set viewport to: ' + width + ', ' + height);
});
app.get('/', async function(req, res) {
    res.sendFile(path.join(__dirname, 'remote_page.html'));
});
app.listen(3000, '::', async function(req, res) {
    console.log('Creating client...');
    browser = await puppeteer.launch();
    console.log('Loaded client!')
    console.log('Loading new page...');
    page = await browser.newPage();
    console.log('Loaded a new page!');
    console.log('Redirecting client to roblox.com...');
    await page.goto('https://roblox.com');
    console.log('Loaded roblox.com!');
    console.log('Client is ready!');
});