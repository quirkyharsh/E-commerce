const PORT = 4000;
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require('os');
const { log } = require('console');

app.use(express.json());
app.use(cors());
//mongodb+srv://HarshPatil:<db_password>@cluster0.hrc10wo.mongodb.net/?appName=Cluster0

mongoose.connect("mongodb+srv://HarshPatil:Harsh%402006@cluster0.hrc10wo.mongodb.net/e-commerce")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


//API Creation

app.get("/",(req, res)=>{
    res.send("Express App is running");
})

//Image storage engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({storage:storage})

//Creating upload ENdpoint for Images
app.use('/images',express.static('upload/images'));

app.post("/upload", upload.single('product'),(req,res)=>{
    res.json({
        success: 1,
        image_url:`http://localhost:${PORT}/images/${req.file.filename}`
    });
});

//Schema for creating product

const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required: true,
    },
    category:{
        type:String,
        required: true,
    },
    new_price:{
        type: Number,
        required:true,
    },
    old_price:{
        type: Number,
        required:true,
    },
    date:{
        type:Date,
        default: Date.now(),
    },
    available:{
        type:Boolean,
        default:true,
    },
});

app.post('/addproduct', async (req,res)=>{
    const product = new Product({
        id:req.body.id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log('Saved');
    res.json({
        success:true,
        name:req.body.name,
    });
});


app.listen(PORT,(error)=>{
    if(!error){
        console.log("Server running on port" + PORT);
    }else {
        console.log("ERROR:" + error);
    }
})