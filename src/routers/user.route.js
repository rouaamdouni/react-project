const routeModel = require("../models/user.model");
const route = require("express").Router();

route.post("/register",(req,res)=> {
    routeModel.register(req.body.username,req.body.email,req.body.password)
    .then((user)=>res.status(200).json({util:user,msg:"registred!!!"}))
    .catch((err)=>res.json({error:err}));
})
module.exports = route;