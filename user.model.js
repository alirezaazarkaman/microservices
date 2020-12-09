'use strict'
/**
 * TODO required for this file 
 * @requires {Mongoose,Schema}
 */
let {Mongoose} = require('./user.config') ; 
let {Schema}  = Mongoose ; 

/**
 * TODO Schema of product
 * @method UserName 
 * @method Name
 * @exports UserName
 * @exports Name
 */
const UserSchema = new Schema({
    UserName : {
        type: String , 
        trim :true , 
        required : true
    },
    Name :{
        type:String , 
        trim:true , 
        minlengh : 8 
    }
})

module.exports.UserName = mongoose.model('UerName', UserSchema, 'UserName');
module.exports.Name = mongoose.model('Name', UserSchema, 'Name'); 
