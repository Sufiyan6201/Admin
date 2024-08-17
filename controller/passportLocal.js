const userModel = require("../models/user.Schema");

const localStrategy = require('passport-local').Strategy;
const localAuth = (passport) => {
     passport.use(new localStrategy(async (username, password, done) => {
          try {
               const user = await userModel.findOne({ username: username })
               if (!user) {
                    return done(null, false, { message: 'Invalid username or password' })
               }
               if (user.password != password) {
                    return done(null, false, { message: 'Invalid username or password' })
               }
               return done(null, user)
          } catch (error) {
               return done(error)
          }
     }))
     passport.serializeUser((user,done)=>{
          done(null,user.id)
     });
     passport.deserializeUser(async (id,done)=>{
          try {
               const user =await
               userModel.findById(id);
               done(null,user);
          } catch (error) {
               done(error,false)
          }
     })
}

module.exports =localAuth