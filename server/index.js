const express = require('express');
const app =express();
const signUp = require('../routes/signup_login');
app.use("/user",signUp);

creat_post = require("../routes/create_post");
app.use("/post",creat_post)

user_likes = require("../routes/user_likes");
app.use("/likes",user_likes)

editProfile = require("../routes/edit_profile");
app.use("/profile",editProfile)



app.listen(5000,()=>{
    console.log("server is listening 5000 ....")

});
