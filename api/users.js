const express = require('express');
const router = express.Router();

router.get('/create', (req, res)=>{
    res.send('<h1>Hello word</h1>')
   
})

router.get('/delete', (req, res) => {
    res.status(200).send("nova rota")
})


module.exports = router;