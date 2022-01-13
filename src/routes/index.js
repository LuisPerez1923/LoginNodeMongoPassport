const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index')
})

router.get('/signup', (req, res, next) => {
    res.render('signup')
})

router.post('/signup', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.email);
    console.log(req.body.password);
    res.send('Recibido')
})

router.get('/signin', (req, res, next) => {
    
})

router.post('/signin', (req, res, next) => {
    
})

module.exports = router