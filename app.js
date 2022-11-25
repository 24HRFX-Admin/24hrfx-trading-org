var express = require ('express');
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');
const path = require ('path');

const app = express();

const publicDirectory = path.join (__dirname, './public');
app.use (express.static (publicDirectory));

//parse url-encoded bodies (as sent by html forms)
app.use (express.urlencoded ({extended: false}));
//parse json bodies as sent by html forms
app.use (express.json());


app.use (bodyParser.json());
app.use (express.static('public'));
app.use (bodyParser.urlencoded({
    extended:true
}))

app.set ('view engine', 'hbs');

const dburl = "mongodb+srv://admin24hrfx:testwork@cluster0.dxffmwz.mongodb.net/?retryWrites=true&w=majority";
const localdburl = "mongodb://localhost:27017/User-Management";

mongoose.connect (dburl, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on ('error', ()=> console.log ("Error in connecting to the database !!"))
db.once ('open', ()=> console.log ("Connected to the database"));


app.use ('/', require('./routes/pages'));
app.use ('/auth', require('./routes/auth'));

const port = process.env.PORT || 8000;

app.listen (port, ()=> {
    console.log ('server started on port')
})

