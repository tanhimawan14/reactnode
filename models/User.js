const mongoose = require('mongoose');

// Destructuring
// const Schema = mongoose.Schema;
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    email: String,
    credits: {
        type: Number,
        default: 0
    }
});

// name, and function object
mongoose.model('users', userSchema);