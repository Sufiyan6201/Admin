const mongoose=require('mongoose');
require('dotenv').config()
const db = async()=>{
     try {
          await
          mongoose.connect(process.env.DB_URL);
          console.log('connected to database');
     } catch (error) {
          console.log(error)
     }
}
module.exports=db;