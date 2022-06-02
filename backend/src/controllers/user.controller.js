const register = require("../models/userRegisterSchema");
const login = require("../models/userLoginSchema");

const response = {
    status : "Pass",
    statuscode : 202
}

const userLogin = (req,res) => {
    register.find({email:req.body.email})
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
                res.send(response);
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