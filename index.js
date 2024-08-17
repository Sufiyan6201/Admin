const express = require('express');
const admin_Router = require('./router/adminRouter');
const path = require('path');
const db = require('./config/database');
const bodyParser = require('body-parser')
const P_Router = require('./router/product.router');
const catRouter = require('./router/cat.router');
const subCatRouter = require('./router/subCat.Router');
const extraCatRouter = require('./router/extraCat.Router');
const passAuth = require('./middleware/passport.middleware');
const user_Router = require('./router/userRouter');
const expressSession = require('express-session');
const localAuth = require('./controller/passportLocal');
const passport = require('passport');


const app = express();
localAuth(passport)

const port = 8180;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname + '/public')));
app.use('/uploads', express.static(path.join(__dirname + '/uploads')));



app.set('view engine', 'ejs');
app.use(expressSession({ secret: "key",resave:false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(user_Router)
app.use(passAuth)
app.use(admin_Router);
app.use('/product', P_Router);
app.use('/Category', catRouter)
app.use('/SubCategory', subCatRouter)
app.use('/ExtraCategory', extraCatRouter)


app.listen(port, (err) => {
     db();
     if (!err) {
          console.log('server is running on port \nhttp://localhost:' + port)
     }
});