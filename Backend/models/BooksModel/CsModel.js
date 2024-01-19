import mongoose from "mongoose";
import { bookConn } from "../../db/connectdb.js";


const BooksSchema = new mongoose.Schema({
    name : {type : String},
    type : {type : String},
    author : {type : String},
    image : {type : String},
    year : {type : Date},
    count : {type : Number}

})

const CsModel = bookConn.model('Computer Science', BooksSchema);
export default CsModel;