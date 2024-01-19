import mongoose from "mongoose";
import userConn from "../db/connectdb.js";

const UserSchema = mongoose.Schema({
    username : {type : String, required : true, unique : true},
    name : {type : String, required : true},
    email : {type : String, required : true, unique: true},
    number : {type : Number, required : true}
})

const UserModel = userConn.model('Users Details ', UserSchema);
export default UserModel;
