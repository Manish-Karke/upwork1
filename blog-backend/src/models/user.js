const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //you can add here user shema for db
    username:
    {type:String,
        require:true,
        unique:true,
    },
    email:
    
        {type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
});

module.export = mongoose.model("user",userSchema)