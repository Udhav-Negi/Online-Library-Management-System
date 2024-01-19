import mongoose, { mongo } from "mongoose";
import { issueBookConn } from "../../db/connectdb.js";

let issueBookSchema = mongoose.Schema({
    issued_to : {type : String},
    admin_name : {type : String},
    issued_by : {type : String},
    image : {type : String},
    book_id : {type : String},
    book_name : {type : String},
    book_author : {type : String},
    book_model : {type : String},
    date : {type: Date, default : new Date()}
})

let userIssueBook = issueBookConn.model('Book_Issued_to_User', issueBookSchema);

export default userIssueBook