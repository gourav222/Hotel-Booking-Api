const register = require("../models/userRegisterSchema");
const login = require("../models/userLoginSchema");
const jwt = require('jsonwebtoken')
const response = {
    status : "Pass",
    statuscode : 201
}

const userLogin = (req,res) => {
    const userEmail = {email:req.body.email} 
    register.find(userEmail)
    .exec()
    .then(user => {
        const response = {
            status : "Pass",
            statuscoe : 201
        }
        if(user < 1){
            response.status = "Fail";
            response.statuscoe = 204;
            res.send(response);
        }
        else{
            if(user[0].password === req.body.password){
                const tmp = jwt.sign(userEmail,"J3SdtW07P05RCSbRkpaB98VwmxG1XI19",{algorithm : 'HS256'})
                res.send({accessToken : tmp,response})
            }
            else{
                response.status = "Fail";
                response.statuscoe = 204;
                res.send(response);
            }
        }
    })
}

const userRegistration = (req,res) => {
    register.create(req.body)
    .then(data => {
        res.send(response)
    })
    .catch(err => {
        response.status = "Fail"
        response.statuscode = 204
        res.send(response)
    })
}

const userList = (req,res) => {
    register.find().then(result => {
        res.json({User_data:result});
    }).catch(err=>{
        res.json({error:err})
    });
}

module.exports = {userLogin,userRegistration,userList}