const testData = require('../db/data.json')
const router = require('express').Router();

router.get("/", async (req, res) => {
    try {
        res.render('home', {testData});
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;