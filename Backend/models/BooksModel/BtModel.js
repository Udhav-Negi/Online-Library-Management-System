import mongoose from "mongoose";
import { bookConn } from "../../db/connectdb.js";

const BooksSchema = new mongoose.Schema({
    name : {type : String},
    type : {type : String},
    author : {type : String},
    image : {type : String},
    year : {type : Date, default : new Date()},
    count : {type : Number}
})

const BtModel = bookConn.model('Biotechnology', BooksSchema);
export default BtModel;