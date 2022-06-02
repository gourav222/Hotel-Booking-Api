//To Establish a connection with the database

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Ho",{
    
}).then(() => {
    console.log(`connections successfull`);  
}).catch((e) => {
    console.log(e);
})