const express = require('express');
var editProfile = express.Router();
editProfile.use(express.json())
const add = require("../model/edit_profile_db");
const jwt = require('jsonwebtoken')

editProfile.get("/userName",function(req,res){
    let user_id = req.body.user_id
    let response= add.showUserName(user_id)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
        res.json({"massage":"wrong"})
    })
})


editProfile.post("/profile",function(req,res){
    let user_id = req.body.user_id
    let user_data = {
        phone_number:req.body.phone_number,
        email_id:req.body.email_id,
        birth_date:req.body.birth_date,
        education:req.body.education,
        address:req.body.address,
        bio:req.body.bio

    }
    let response = add.profile(user_id,user_data)
    response.then((data)=>{
        if(data[0]["user_id"]==user_id){
            let token = jwt.sign({"user":data[0]},"secret_key")
            res.cookie(token)
            jwt.verify(token,"secret_key",(err,result)=>{
                add.myProfile(user_data)
                .then((data)=>{
                    res.json({"massage":"profile updated","data":data})
                })
            }) 
        }else{
            console.log("errrrr")
        }
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
    
})

module.exports = editProfile