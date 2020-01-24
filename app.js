const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');
const Tickets = require('./models/Tickets');

const app = express();

app.use(cors({
  origin:['http://localhost:3006','http://localhost:3006'],
  credentials:true
}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "http://localhost:3006");
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.use('/api', require(`./routes/main.routes`));

const PORT = config.get('port') || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () => console.log(`App has benn started ${PORT}`));
  } catch (err) {
    console.log(`Server error ${err.message}`);
    process.exit(1);
  }
}

start();
