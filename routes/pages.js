const express = require ('express');
const mongoose = require ('mongoose');

const dburl = "mongodb+srv://admin24hrfx:testwork@cluster0.dxffmwz.mongodb.net/?retryWrites=true&w=majority";
const localdburl = "mongodb://localhost:27017/User-Management";

mongoose.connect (dburl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on ('error', ()=> console.log ("Error in connecting to the database !!"))
db.once ('open', ()=> console.log ("Connected to the database"));


const router = express.Router();

router.get ('/', (req, res) => {
    res.render ('index');
})

router.get ('/register', (req, res) => {
    res.render ('register')
})

router.get ('/login', (req, res) => {
    res.render ('login')
})

router.get ('/aboutb', (req, res) => {
    res.render ('aboutb')
})

router.get ('/about', (req, res) => {
    res.render ('about')
})

router.get ('/faq2', (req, res) => {
    res.render ('faq2')
})

router.get ('/faq', (req, res) => {
    res.render ('faq')
})

router.get ('/account', (req, res) => {
    res.render ('account')
})

router.get ('/packages', (req, res) => {
    res.render ('packages')
})

router.get ('/packages2', (req, res) => {
    res.render ('packages2')
})

router.get ('/terms', (req, res) => {
    res.render ('terms')
})

router.get ('/admin', (req, res) => {
    res.render ('admin')
})

router.get ('/page1', (req, res) => {
    res.render ('page1')
})

router.get ('/history', (req, res) => {
    res.render ('history')
})

router.get ('/activation', (req, res) => {
    res.render ('activation')
})

router.get ('/email2', (req, res) => {
    res.render ('email2')
})

router.get ('/balance', (req, res) => {
    res.render ('balance')
})


router.get ('/users', async function (req, res) {
        db.collection("users").find({}).toArray(function (err, results) {
            if (err)
                throw err;
            res.render('users', { results });
        });

        //res.render ('users')
    })

module.exports = router;