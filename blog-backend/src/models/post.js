const mongoose = require('mongoose');


const postSchema = new mongoose.schema({


 title:{
        type:String,
        require:true
    },
 content:{
        type:String,
        require:true
    },
 author:  
 { type: mongoose.Schema.Types.ObjectId,
     ref: 'User' },

    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);
