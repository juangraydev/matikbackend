require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const app = express();
const port = process.env.PORT || 8000;
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//middleware
const authorize = require('./middleware/authMiddleware');

//routes 
const auth = require('./routes/auth');
const house = require('./routes/house');

app.use('/api/v1/auth', auth);
app.use('/api/v1/house', authorize(), house);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})