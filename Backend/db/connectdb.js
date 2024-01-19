import mongoose from "mongoose";
let userConn = mongoose.createConnection('mongodb://localhost:27017/Library_Management')

let bookConn = mongoose.createConnection('mongodb://localhost:27017/Books_Management')

let issueBookConn = mongoose.createConnection('mongodb://localhost:27017/Issued_Book')

export {bookConn, issueBookConn}
export default userConn;