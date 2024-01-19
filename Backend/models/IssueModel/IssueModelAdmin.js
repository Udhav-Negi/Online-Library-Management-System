import mongoose, { mongo } from "mongoose";
import { issueBookConn } from "../../db/connectdb.js";

let issueBookSchema = mongoose.Schema({
    book_model : {type : String},
    issued_to : {type : String},
    student_name : {type : String},
    issued_by : {type : String},
    image : {type : String},
    book_id : {type : String},
    book_name : {type : String},
    book_author : {type : String},
    date : {type: Date, default : new Date()}
})

let adminIssueBook = issueBookConn.model('Book_Issued_by_Admin', issueBookSchema);

export default adminIssueBook;