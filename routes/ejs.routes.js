const express = require("express");
const router = express.Router();
const auth_middleware = require('../middlewares/auth-middlewares.js')

router.get('/', auth_middleware ,(req,res) => {
    // if (res.locals.user.length===0) {
    //     console.log('inside if', res.locals.user)
    //     return res.render('login.ejs', {user: res.locals.user})
    // }
    console.log('res.locals.user',res.locals.user)
    return res.render('login.ejs', {user: res.locals.user});
})

router.get('/signup',(req,res)=>{
    res.render('signup.ejs')
})

module.exports = router