const userModel = require("../models/user.Schema");

const loginPage = (req, res) => {
     return res.render('pages/login', {

     })
}


const signupPage = (req, res) => {
     return res.render('pages/signup')
}

const signup = async (req, res) => {
     const { username, email, password, phone } = req.body
     try {
          await userModel.create({
               username, email, password, phone
          });
          return res.redirect('/login')
     } catch (error) {
          console.log(error)
     }
}

const logout = (req, res) => {
     req.logout(() => {
          return res.redirect('/')
     })
}

module.exports = { loginPage, signupPage, signup, logout }