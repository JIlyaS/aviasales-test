const fs = require('fs');

const {Router} = require('express');

const router = Router();

router.get('/tickets', async (req, res) => {
  try {
    const data = fs.readFileSync('./mock/tickets.json', "utf8");
    const tickets = JSON.parse(data);
    res.send(tickets.tickets);
  } catch (err) {
    res.status(500).json({ message: err})
  }
});

module.exports = router;