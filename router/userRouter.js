const { Router } = require("express");

const passport = require('passport');
const { loginPage, signupPage, signup, logout } = require("../controller/userController");

const user_Router = Router()

user_Router.get('/login', loginPage)
user_Router.post('/login', passport.authenticate('local', {
     failureRedirect: '/login',
     successRedirect: '/'
}))
user_Router.get('/signup', signupPage)
user_Router.post('/signup', signup)
user_Router.get('/logout', logout)

module.exports = user_Router