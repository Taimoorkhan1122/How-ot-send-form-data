const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

// app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("<h1>got response from express server 🚀</h1>");
})

app.post('/form', (req, res) => {
    res.send({
      message: "form submitted",
      data: req.body,
    });
})

app.listen(3333,() => {
    console.log("server is up on port 3333");
})
