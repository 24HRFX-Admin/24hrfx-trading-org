const mongoose = require ('mongoose');
const {isEmail} = require ('validator');

const userSchema = new mongoose.Schema ({
    email: {type: String, required: [true, 'Enter an email'], unique: true, lowercase: true, validate: [isEmail, 'Enter a valid email address']},
    username: {type: String, required:true, unique:true},
    password: {type: String, required: true},
    userID: {type: String, unique: true},
    balance: {type: String}
},
{collection: 'users'}
)


/*
userSchema.statics.log = async function (username, userID, password) {
    const user = await this.findOne ({username});
    if (user) {
        const auth = await bcrypt.compare (password, user.password);
    
        if (auth && userID === user.userID) {
            return user;
        }
        throw Error ('Incorrect password or user-ID');
    }
    throw Error ('Incorrect username');
}
*/



const model = mongoose.model ('userSchema', userSchema);

module.exports = model;