const express = require("express");
const {auth} = require("../Middleware/auth.middleware");
const { noteModel } = require("../Models/post.model");

const postRouter = express.Router();
postRouter.use(auth);

postRouter.post("/create", async(req,res) => {
    try{
      const note = new noteModel(req.body);
      await note.save()
      res.json({msg:"New note has been added", note:req.body})
    }catch(err){
        res.json({error:err.message})
    }
})

postRouter.get("/", async (req,res) => {
    try{
        const notes = await noteModel.find({userId:req.body.userId})
        res.json(notes)
      }catch(err){
          res.json({error:err.message})
      }
})

postRouter.patch("/update/:noteId", async (req,res) => {
    const userIdinUserDoc = req.body.userID;
    const {noteId} = req.params;
    try{
        const note = await noteModel.find({_id:noteId});
        const userIdinNoteDoc = note.userID;
        if(userIdinUserDoc === userIdinNoteDoc){
             await noteModel.findByIdAndUpdate({_id:noteId}, req.body)
             res.json({msg:`${note.title} has been updated`});
        }else{
            res.json({msg:"Not Authorized!!"})
        }
    }catch(err){
       res.json({error:err})
    }
})

postRouter.delete("/delete/:noteId", async (req,res) => {
    const userIdinUserDoc = req.body.userID;
    const {noteId} = req.params;
    try{
        const note = await noteModel.find({_id:noteId});
        const userIdinNoteDoc = note.userID;
        if(userIdinUserDoc === userIdinNoteDoc){
             await noteModel.findByIdAndDelete({_id:noteId})
             res.json({msg:`Note has been deleted`});
        }else{
            res.json({msg:"Not Authorized!!"})
        }
    }catch(err){
       res.json({error:err})
    }
})


module.exports = {postRouter}