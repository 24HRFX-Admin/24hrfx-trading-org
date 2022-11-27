//const router = require("../routes/pages");
var mongoose= require ('mongoose');
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcryptjs');
const user = require('../model/users');
const dotenv = require ('dotenv');


const dburl = "mongodb+srv://admin24hrfx:testwork@cluster0.dxffmwz.mongodb.net/?retryWrites=true&w=majority";
const localdburl = "mongodb://localhost:27017/User-Management";

mongoose.connect (dburl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on ('error', ()=> console.log ("Error in connecting to the database !!"))
db.once ('open', ()=> console.log ("Connected to the database"));

/*
exports.login = async (req, res) => {

    const { userName, userID, password } = req.body;
    
        if (!userName || !userID || !password) {
            return res.status(400).render("login", {
                message: 'Please provide username, user_ID and your password !'
              });
        }
        db.query('SELECT User_ID FROM NewUsers WHERE username = ?', [userName], (err, results) => {
            if(err) throw (err);
            else {
                console.log("results");
            }
    
            if (userID == 'AD-605088' && password == 'admin@user-AD60' && userName == 'Admin') {
                //return res.redirect ('/Users');

                    db.query ('SELECT * FROM NewUsers ORDER BY Id ASC', (error, results) => {
                        
                        if (error) {
                            console.log (error);
                        }
                        else {
                            return res.render ('users', {results})
                        }
                    })
            
            }
            else if(userID == results[0].User_ID) {
                //return res.redirect ('/account');

                db.query ('SELECT Balance FROM NewUsers where username = ?', [userName], (error, results) => {
                        
                    if (error) {
                        console.log (error);
                    }
                    else {
                        //console.log(results);
                        return res.render ('account', {results})
                        //return res.redirect ('/account');
                    }
                })
            }
            else {
                return res.render ('login', {
                    message: "Wrong username ,user-ID or password !"
                })
            }
            
        })
}
*/

exports.register = async (req, res) => {
    const {username, email, password, passwordConfirm} = req.body;

    const hashedpassword = await bcrypt.hash (password, 10);

    let randomNo = Math.random()*10000000;
    const betterNo = Math.floor(randomNo);

    try {
        if (!username || !email || !password || !passwordConfirm) {
            return res.render ('register', {
                message: "Fill in all the required fields !!"
            })
        }
        else if( password !== passwordConfirm) {
            return res.render ('register', {
                message: "Passwords do not match !"
            })
        }
        else {
            const response = await user.create({
                username: username, password: hashedpassword, email: email, userID: betterNo, balance: 'pending...'
            })
            console.log ('user created successfully', response);
            return res.render ('activation');
        }
    }
    catch (error) {
        console.log(error);
    }
/*
    try {
        var data = {
            "username" : username,
            "email" : email,
            "password": hashedpassword,
            "userid" : betterNo
        }
        if (!username || !email || !password || !passwordConfirm) {
            return res.render ('register', {
                message: "Fill in all the required fields !!"
            })
        }
        else if ( password !== passwordConfirm) {
            return res.render ('register', {
                message: "Passwords do not match !"
            })
        }
        else {
            db.collection('users').insertOne(data, (err, collection)=> {
                if (err) {
                    throw err;
                }
                console.log ("Data inserted successfully");
                return res.render ('activation');
            }) 
        }
    }
    catch (error){
        console.log(error);
    }
    */
}


exports.login = async (req, res) => {
    const {username, userid, password} = req.body;

    if (userid == 'AD-605088' && password == 'admin@user' && username == 'Admin') {    
        db.collection("users").find({}).toArray(function(err, results) {
            if (err) throw err;
            res.render ('users', {results})
          });
 
    }

    const results = await user.findOne ({username}).lean();

    if (!username || !userid || !password) {
        return res.render ('login', {
            message: "Fill in the required fields !"
        })
    }
    
    else if (!results) {
        return res.render ('login', {
            message: "Wrong username !"
        })
    }
    else if (results) {
       //const auth = await bcrypt.compare (password, user.password);
    
       if (userid !== results.userID) {
        return res.render ('login', {
            message: "Wrong user-Id !"
        })
    }
        else if (userid === results.userID) {
            return res.render ('account', {results});
        }
        
    }
    
    else {
        console.log ("Error on login !!");
    }
    

}


exports.editbalance = async (req, res) => {
    console.log (req.body);

    const {email, balance} = req.body;

    db.collection('users').updateOne (
        {email: email},
        {$set: {
            balance: balance
        }}
    )
}


/*
exports.userA = async (req, res) => {
    const {nameA, amountA } = req.body;
    console.log (req.body);

    db.query ('UPDATE deposits SET Name=?, Amount=? WHERE Id = "1"', [nameA, amountA], (error, results) => {
        if (error) {
            console.log (error);
        }
        if (!nameA|| !nameA) {
            return res.status(400).render("history", {
                message: 'Fill in the required fields !'
            });
        }
        else {
            return res.status(400).render("history", {
                message2: 'user-1 successfully updated'
            });
        }

    })
}

exports.userB = async (req, res) => {
    const {nameB, amountB } = req.body;
    console.log (req.body);

    db.query ('UPDATE deposits SET Name = ?, Amount = ? WHERE Id = "2" ', [nameB, amountB], (error, results) => {
        if (error) {
            console.log (error);
        }
        if (!nameB|| !nameB) {
            return res.status(400).render("history", {
                message: 'Fill in the required fields !'
            });
        }
        else {
            return res.status(400).render("history", {
                message2: 'user-2 successfully updated'
            });
        }

    })
}

exports.userC = async (req, res) => {
    const {nameC, amountC } = req.body;
    console.log (req.body);

    db.query ('UPDATE deposits SET Name = ?, Amount = ? WHERE Id = "3" ', [nameC, amountC], (error, results) => {
        if (error) {
            console.log (error);
        }
        if (!nameC|| !nameC) {
            return res.status(400).render("history", {
                message: 'Fill in the required fields !'
            });
        }
        else {
            return res.status(400).render("history", {
                message2: 'user-3 successfully updated'
            });
        }

    })
}

exports.userD = async (req, res) => {
    const {nameD, amountD } = req.body;
    console.log (req.body);

    db.query ('UPDATE deposits SET Name = ?, Amount = ? WHERE Id = "4" ', [nameD, amountD], (error, results) => {
        if (error) {
            console.log (error);
        }
        if (!nameD|| !nameD) {
            return res.status(400).render("history", {
                message: 'Fill in the required fields !'
            });
        }
        else {
            return res.status(400).render("history", {
                message2: 'user-4 successfully updated'
            });
        }

    })
}

exports.userE = async (req, res) => {
    const {nameE, amountE } = req.body;
    console.log (req.body);

    db.query ('UPDATE deposits SET Name = ?, Amount = ? WHERE Id = "5" ', [nameE, amountE], (error, results) => {
        if (error) {
            console.log (error);
        }
        if (!nameE || !nameE) {
            return res.status(400).render("history", {
                message: 'Fill in the required fields !'
            });
        }
        else {
            return res.status(400).render("history", {
                message2: 'user-5 successfully updated'
            });
        }

    })
}

exports.userF = async (req, res) => {
    const {nameF, amountF } = req.body;
    console.log (req.body);

    db.query ('UPDATE deposits SET Name = ?, Amount = ? WHERE Id = "6" ', [nameF, amountF], (error, results) => {
        if (error) {
            console.log (error);
        }
        if (!nameF|| !nameF) {
            return res.status(400).render("history", {
                message: 'Fill in the required fields !'
            });
        }
        else {
            return res.status(400).render("history", {
                message2: 'user-6 successfully updated'
            });
        }

    })
}

exports.userG = async (req, res) => {
    const {nameG, amountG } = req.body;
    console.log (req.body);

    db.query ('UPDATE withdrawals SET Name = ?, Amount = ? WHERE Id = "1" ', [nameG, amountG], (error, results) => {
        if (error) {
            console.log (error);
        }
        if (!nameG|| !nameG) {
            return res.status(400).render("history", {
                message: 'Fill in the required fields !'
            });
        }
        else {
            return res.status(400).render("history", {
                message2: 'user-7 successfully updated'
            });
        }

    })
}

exports.userH = async (req, res) => {
    const {nameH, amountH } = req.body;
    console.log (req.body);

    db.query ('UPDATE withdrawals SET Name = ?, Amount = ? WHERE Id = "2" ', [nameH, amountH], (error, results) => {
        if (error) {
            console.log (error);
        }
        if (!nameH|| !nameH) {
            return res.status(400).render("history", {
                message: 'Fill in the required fields !'
            });
        }
        else {
            return res.status(400).render("history", {
                message2: 'user-8 successfully updated'
            });
        }

    })
}

exports.userI = async (req, res) => {
    const {nameI, amountI } = req.body;
    console.log (req.body);

    db.query ('UPDATE withdrawals SET Name = ?, Amount = ? WHERE Id = "3" ', [nameI, amountI], (error, results) => {
        if (error) {
            console.log (error);
        }
        if (!nameI|| !nameI) {
            return res.status(400).render("history", {
                message: 'Fill in the required fields !'
            });
        }
        else {
            return res.status(400).render("history", {
                message2: 'user-9 successfully updated'
            });
        }

    })
}

exports.userJ = async (req, res) => {
    const {nameJ, amountJ } = req.body;
    console.log (req.body);

    db.query ('UPDATE withdrawals SET Name = ?, Amount = ? WHERE Id = "4" ', [nameJ, amountJ], (error, results) => {
        if (error) {
            console.log (error);
        }
        if (!nameJ|| !nameJ) {
            return res.status(400).render("history", {
                message: 'Fill in the required fields !'
            });
        }
        else {
            return res.status(400).render("history", {
                message2: 'user-10 successfully updated'
            });
        }

    })
}

exports.userK = async (req, res) => {
    const {nameK, amountK } = req.body;
    console.log (req.body);

    db.query ('UPDATE withdrawals SET Name = ?, Amount = ? WHERE Id = "5" ', [nameK, amountK], (error, results) => {
        if (error) {
            console.log (error);
        }
        if (!nameK|| !nameK) {
            return res.status(400).render("history", {
                message: 'Fill in the required fields !'
            });
        }
        else {
            return res.status(400).render("history", {
                message2: 'user-11 successfully updated'
            });
        }

    })
}

exports.userL = async (req, res) => {
    const {nameL, amountL } = req.body;
    console.log (req.body);

    db.query ('UPDATE withdrawals SET Name = ?, Amount = ? WHERE Id = "6" ', [nameL, amountL], (error, results) => {
        if (error) {
            console.log (error);
        }
        if (!nameL|| !nameL) {
            return res.status(400).render("history", {
                message: 'Fill in the required fields !'
            });
        }
        else {
            return res.status(400).render("history", {
                message2: 'user-12 successfully updated'
            });
        }

    })
}

*/