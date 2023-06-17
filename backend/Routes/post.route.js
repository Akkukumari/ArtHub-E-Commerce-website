const express = require("express");
const {auth} = require("../Middleware/auth.middleware");
const { postModel } = require("../Models/post.model");

const postRouter = express.Router();


postRouter.get("/",  async(req,res) => {
    try{
        // const posts = await postModel.find({userId:req.body.userId})
        const posts = await postModel.find()
        res.status(200).json(posts)
      }catch(err){
          res.json({error:err.message})
      }
})

postRouter.use(auth);

postRouter.post("/add", async(req,res) => {
    try{
      const post = new postModel(req.body);
      await post.save()
      res.json({msg:"New note has been added", post:req.body})
    }catch(err){
        res.json({error:err.message})
    }
})

postRouter.patch("/update/:postId", async (req,res) => {
    const {postId} = req.params;
    try{
        await postModel.findByIdAndUpdate({_id:postId}, req.body)
        res.json({msg:`${note.title} has been updated`});
    }catch(err){
       res.json({error:err})
    }
})

postRouter.delete("/delete/:postId", async (req,res) => {
    const userIdinUserDoc = req.body.userID;
    const {postId} = req.params;
    try{
        const post = await postModel.findOne({_id:postId});
        const userIdinPostDoc = note.userID;
        if(userIdinUserDoc === userIdinPostDoc){
             await postModel.findByIdAndDelete({_id:postId})
             res.status(200).json({msg:`Post has been deleted`, post});
        }else{
            res.status(404).json({msg:"Not Authorized!!"})
        }
    }catch(err){
       res.status(400).json({error:err})
    }
})


module.exports = {postRouter}



// { 
//     "title": "Mclare 720s Studio",
//     "img": "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/feeee2171107269.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg",
//     "desc": "Adam Bengtsson",
//     "price": "$699",
//     "discount": "10"
// }