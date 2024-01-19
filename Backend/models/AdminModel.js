import mongoose from "mongoose";
import userConn from "../db/connectdb.js";



const AdminSchema = mongoose.Schema({
    username : {type : String, required : true, unique : true},
    name : {type : String, required : true},
    password : {type : String, required : true},
    email : {type : String, required : true, unique: true},
    number : {type : Number, required : true}
})


const AdminModel = userConn.model('Admin Details ', AdminSchema);
export default AdminModel;
