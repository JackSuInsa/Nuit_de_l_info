const { render } = require('ejs');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('credit.ejs');
});

module.exports = router;