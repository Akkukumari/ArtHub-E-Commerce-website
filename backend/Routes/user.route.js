const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { userModel } = require("../Models/user.model");
require('dotenv').config();

const userRouter = express.Router();

userRouter.post("/register", async (req,res) => {
    const {name,email,pass} = req.body;
   try{
      bcrypt.hash(pass, 5, async (err,hash) => {
         if(err){
            res.status(400).json({error:err.message})
         }else{
            const user = new userModel({name,email,pass:hash});
            await user.save();
         }
      })
      res.status(200).json({message:"User has been registered", user: req.body})
   }catch(err){
    res.status(400).json({error:err.message});
   }
});


userRouter.post("/login", async (req,res) => {
    const {email,pass} = req.body;
    try{
      const user = await userModel.findOne({email});
      if(user){
        bcrypt.compare(pass,user.pass, (err, result) => {
         if(result){
            let token = jwt.sign({userId:user._id, user:user.name}, process.env.secretKey)
            res.json({msg:"Logged In!!", token})
         }else{
            res.status(400).json({msg:"Wrong Credentials"});
         }
        })
      }else{
        res.json({msg: "User doesn't exit"}) 
      }
    }catch(err){
    res.status(400).json({error:err.message});
    }
});


module.exports = {userRouter};