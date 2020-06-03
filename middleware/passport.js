const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const passport = require('passport')
const db = require('../models')
module.exports = passport => {
    passport.use(new GoogleStrategy({
        clientID: "959470667706-0vjs6dfb8dbnogvhp54ho0vs2hfqhar0.apps.googleusercontent.com",
        clientSecret: "IUezN9As8_OB2cjeBCMISFvi",
        callbackURL: "http://localhost:3000/users/google/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        db.USERS.findOne({email : profile._json.email})
        .then((usr) => {
            if(usr){
                usr.save().then(u => done(null,u) )
            }else{
                const newUser = new db.USERS({
                    email  : profile._json.email,
                })
                newUser.save()
                .then((user)=> {
                    return done(null,user)
                })
            }
        })
      }
    ));
    
}