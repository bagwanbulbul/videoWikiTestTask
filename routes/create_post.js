const express = require('express');
var creat_post = express.Router();
creat_post.use(express.json())
const add = require("../model/create_post_db");

creat_post.post("/creat_post",function(req,res){
    let userPost = {
        user_id:req.body.user_id,
        post:req.body.post,
        caption:req.body.caption
    }
    let response=add.userPostData(userPost)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
module.exports = creat_post