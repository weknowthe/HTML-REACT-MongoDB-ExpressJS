const Router = require("./routes")
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
var restify = require('restify');
const path = require('path')


const app = express();
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/customer',
  {
    useNewUrlParser: true,
   // useFindAndModify: false,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log(" Mongo Connected successfully");
});

app.use(Router);

mongoose.Promise = global.Promise;
app.use(restify.plugins.bodyParser());

app.use(function(req, res, next) {
 req.header('Content-Type', 'application/json');
   next();
});

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next,err) => {
  res.status(404).send("<-ERROR->");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});


