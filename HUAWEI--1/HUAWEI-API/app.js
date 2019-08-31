const express = require('express');
const path = require("path");
const router = express.Router();
const cors = require("cors");


const app = express();

const indentAll = require("./mock/indentAll");
const indent = require("./mock/indent");
const newGift = require("./mock/newGift");
const shopDetails = require("./mock/shopDetails");


router.get("/indentAll",(req,res)=>{
	res.json(indentAll)
})
router.get("/indent",(req,res)=>{
	res.json(indent)
})
router.get("/newGift",(req,res)=>{
	res.json(newGift)
})
router.get("/shopDetails",(req,res)=>{
	res.json(shopDetails)
})



app.use(cors());
app.use("/api",router);


app.listen(3000,()=>{
	console.log("ok")
})