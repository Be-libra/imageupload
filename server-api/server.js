const express=require('express');
const path = require("path");
const multer = require("multer");
const cors = require('cors');

const storage = multer.diskStorage({
   destination: "./public/uploads/",
   filename: function(req, file, cb){
      cb(null,"IMAGE-" +file.originalname+ Date.now() + path.extname(file.originalname));
   }
});

const upload = multer({
   storage: storage,
   //limits:{fileSize: 1000000},
}).array("myImage",4);


const app = express();
app.use(cors());
app.post("/upload",(req,res)=> {
   upload(req, res, (err) => {
      console.log("Request ---", req.body);
      console.log("Request file ---", req.file);//Here you get file.
      /*Now do where ever you want to do*/
      if(!err)
         return res.sendStatus(200).end();
   });
});


app.listen(3001,()=>{console.log('listening port 3001');});