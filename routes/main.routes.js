const fs = require('fs');
const Tickets = require('../models/Tickets');

const {Router} = require('express');

const router = Router();

router.get('/tickets', async (req, res) => {
  try {
    const ticketsData = await Tickets.find({});
    res.send(ticketsData);
  } catch (err) {
    res.status(500).json({ message: err})
  }
});

module.exports = router;
