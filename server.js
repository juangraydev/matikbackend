require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;
var cors = require('cors');
// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:5000'];

const options = {
  origin: allowedOrigins,
  credentials: true
};

app.use(cors(options))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//routes 
const auth = require('./routes/auth');

app.use('/api/v1/auth', auth);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})