const config = require('./config');
const { poolPromise } = require('./connection');
var Userstable = ('../Tables/UserTable');
var Courses = ('../Table/Courses');
//const routes = require('./routes/userRoutes')

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');
//const { poolPromise } = require('./connection');
const userRoutes = require('./routes/userRoutes');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

//use this format to route from routes folder
app.use('/api', userRoutes.routes)

router.use((request, response, next)=> { //middleware(used for authentication)
    console.log("middleware");
    next();
})


app.get('/', (req, res) => res.send('Home route!'));

app.listen(config.port, ()=>{
    console.log(`App is listening on url http://${ config.host }:${ config.port }`)
})
