const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
//app.use('/api', router)

app.get('/', (req, res) => res.send('Home route!'));

app.listen(config.port, ()=>{
    console.log(`App is listening on url http://${ config.host }:${ config.port }`)
})