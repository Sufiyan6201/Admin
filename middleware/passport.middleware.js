const passAuth =(req,res,next)=>{
     console.log(req.user);
     
     if(req.user){
          next()
     }else{
          return res.redirect('/login')
     }
}

module.exports= passAuth;