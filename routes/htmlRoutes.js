const router = require('express').Router();
const path = require('path');


//route to homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// route to notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// route back to index
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});



module.exports = router;