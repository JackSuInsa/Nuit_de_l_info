const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('decouverte.ejs');
});

module.exports = router;