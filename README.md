# What is School Web Roblox?
School Web Roblox is just a simple Node.js project that allows you to access Roblox's offical website on any school device. The project runs on `express`, `puppeteer`, `puppeteer-extra`, `puppeteer-extra-plugin-stealth`.
It uses `express` to host the server so you can send requests to the headless browser. And `puppeteer-extra` to stream and run functions from the Express servers to the page.
# Setup
## Installing Node.js
Since this project runs on Node.js you're going to need to install Node.js from the offical site. So enter the [offical site's download page](https://nodejs.org/en/download), and select your operating system then copy the text the website gives you by clicking Copy to Clipboard. Then paste it into your terminal.
## Downloading the project
Open our Github repository and download our project as a ZIP file by clicking Code then selecting Download ZIP. Then extract the ZIP file.
## Installing the needed resources
### Installing the libaries.
Our project runs on Node.js libaries. Which means, installing them is necessary if you want the code to actually run. First, navigate to the extracted folder.
```
cd /path/to/the/file
```
After you navigated to the directory, install the libaries by typing in:
```
npm install
```
It should ask you if you approve the scripts, if you do not trust in the author of the libaries then just close the terminal and continue brainrotting yourself on TikTok. But if you do, type in:
```
npm install-scripts approve express puppeteer puppeteer-extra puppeteer-extra-plugin-stealth
```
### Installing the Puppeteer Chromium Browsers
After you approve the libraries, type in: 
```
npx puppeteer browsers install
```
It then should install the needed Chromium browser.
# Starting the Project
Starting the project is simple. Just type in:
```
npm start
```
It should then run the project. Wait until it says `Client is ready!`, then open your school device and open the server:
```
http://<your_ip>:3000/
```
# Notes
Don't do this if you don't want to get in trouble at school.
