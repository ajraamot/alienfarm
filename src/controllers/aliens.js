/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
import Alien from '../models/alien';

// as  module.exports is saves the line, so that others can use the router.

// see the .pug files in the views folder for the following:


router.get('/', (req, res) => {
  const aliens = Alien.find();
  console.log('aliens: ', aliens);
  res.render('aliens/index', { aliens });
});

router.get('/new', (req, res) => {
  res.render('aliens/new');
});

router.get('/:id', (req, res) => {
  const alien = Alien.find(req.params.id);
  res.render('aliens/show', { alien });
});

router.post('/', (req, res) => {
  console.log('inside allien.js controller : ', req.body);
  const alien = new Alien(req.body);
  alien.save();
  res.redirect('/aliens');
});
