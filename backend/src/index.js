const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express(); 

app.use(cors(), function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })

app.use(express.json());
app.use(routes);

app.listen(3333);