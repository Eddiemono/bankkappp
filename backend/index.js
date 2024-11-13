require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const morgan = require('morgan')
const cors = require('cors');

const userRoute = require('./routes/userRoute')

const app = express()

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: '*',
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Orign", "*");
  next();
})

app.get('/', (req, res) => {
  res.send('App is alive')
})

app.use('/api/user', userRoute)

mongoose.connect(process.env.MONGO_URI)

  app.listen(process.env.PORT || 5000, () => {
    console.log(`database is connected & app is running on port`, process.env.PORT);
  })


