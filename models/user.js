const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    first_name:{
        type:String,
        required:[true,'Name is required']
    },

    last_name:{
        type:String,
        required:[true,'Last name is required']
    },

    school:{
        type:String,
        required:[true,'School is required']
    },

    date_of_birth:{
        type:Date,
        required:[true,'Date is required']
    },

 

},{timestamps:true});

 

const user = mongoose.model('user',userSchema);

 module.exports = user;