const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html', {title: 'Inicio'});
});

router.get('/contacto', (req, res) => {
  res.render('contacto.html', {title: 'Contacto'});
});

module.exports = router;