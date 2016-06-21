/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
// as  module.exports is saves the line, so that others can use the router.

// see the .pug files in the views folder for the following:
router.get('/', (req, res) => {
  res.render('home/index');
});

router.get('/about', (req, res) => {
  res.render('home/about');
});

router.get('/faq', (req, res) => {
  res.render('home/faq');
});
