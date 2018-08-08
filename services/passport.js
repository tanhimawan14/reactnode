const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// Need to understand it!!! Repeat Encoding User!!! IMPORTANT
passport.serializeUser((user, done) => {
    // user.id !== profile.id, user.id === record at mongo
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
});

// passport.use => create authentication in "general", not specific
// new GoogleStrategy => create new google strategy configuration for auth.
/*
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: keys.addressURI,
        proxy: true
    }, (accessToken, refreshToken, profile, done) => {
        // Validator to block duplicated id
        
        User.findOne({googleId: profile.id})
            .then((exsistingUser) => {
                if(!exsistingUser) {
                    // need to add .save() to save a record
                    new User({ googleId: profile.id, email: profile.emails[0].value })
                            .save()
                            .then(user => done(null, user));
                }else{
                    // null => no error, data
                    done(null, exsistingUser)
                }
            })
        }
        )
);
*/

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: keys.addressURI,
        proxy: true
    }, 
    
    async (accessToken, refreshToken, profile, done) => {
        const exsistingUser = await User.findOne({googleId: profile.id})
            
        if(exsistingUser) {
            return done(null, exsistingUser)
        }

        const user = await new User({ googleId: profile.id, email: profile.emails[0].value }).save()
        done(null, user);
    })
);
