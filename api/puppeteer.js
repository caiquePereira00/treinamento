const express = require('express');
const router = express.Router();
const puppeeteer = require('puppeteer'); 


router.get('/', (req, res) => {

    (async () => {
        const brower = await puppeeteer.launch({
            headless:false
        });
        const page = await brower.newPage();
        await page.goto('https://br.pinterest.com/login/ ');
        await page.type('#email','caiquejp160505@gmail.com')
        await page.type('#password','Caiquejp105')
        await page.click('button[type="submit"]'); // With type
        //await page.screenshot({path: './public/buddy-screenshot.png'})
        
        })();
    
    res.status(200).send('Entrou')
})  

module.exports = router;