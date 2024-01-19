import AdminModel from "../models/AdminModel.js";
import BtModel from "../models/BooksModel/BtModel.js";
import CivilModel from "../models/BooksModel/CivilModel.js";
import CsModel from "../models/BooksModel/CsModel.js";
import EceModel from "../models/BooksModel/EceModel.js";
import FinModel from "../models/BooksModel/FinanceModel.js";
import MarkModel from "../models/BooksModel/MarketingModel.js";
import MechModel from "../models/BooksModel/MechModel.js";
import adminIssueBook from "../models/IssueModel/IssueModelAdmin.js";


async function storeAdminIssuedBooks (model, issued_to, issued_by, image, book_id, student_name, book_name, book_author)
{
    try {
        if(model == 'Biotech')
        {
            let resp = await adminIssueBook.create({book_model : model, issued_to, issued_by, image, book_id, student_name, book_name, book_author});
            return resp;
        }
        else if(model == 'Civil Engineering')
        {
            let resp = await adminIssueBook.create({book_model : model, issued_to, issued_by, image, book_id, student_name, book_name, book_author});
            return resp;
        }
        else if(model == 'Computer Science')
        {
            let resp = await adminIssueBook.create({book_model : model, issued_to, issued_by, image, book_id, student_name, book_name, book_author});
            return resp;
        }
        else if(model == 'Electronics and Communication Engineering')
        {
            try {
                console.log('inisde ece ')
                let resp = await adminIssueBook.create({book_model : model, issued_to, issued_by, image, book_id, student_name, book_name, book_author});
                return resp;
                
            } catch (error) {
                
            }
        }
        else if(model == 'Finance')
        {
            let resp = await adminIssueBook.create({book_model : model, issued_to, issued_by, image, book_id, student_name, book_name, book_author});
            return resp;
        }
        else if(model == 'Marketing')
        {
            let resp = await adminIssueBook.create({book_model : model, issued_to, issued_by, image, book_id, student_name, book_name, book_author});
            return resp;
        }
        else if(model == 'Mechanical')
        {
            let resp = await adminIssueBook.create({book_model : model, issued_to, issued_by, image, book_id, student_name, book_name, book_author});
            return resp;
        }
        else 
        {
            
        }
    } 
    catch (error) {
        
    }
}


class Admin{
    static login = async(req, res)=>{
        try{
            const {username, password} = req.body;
            const admin = await AdminModel.findOne({username});
            if(!admin || admin.username != username)
            {
                res.json({success : false, message : "Invalid Credential "})
            }
    
            if(admin.password != password)
            {
                res.json({success : false, message : "Invalid Credentials"});
            }
            
            res.json({success : true, message : "Login Successfull", id : admin._id, name : admin.name});
        }
        catch(e)
        {

        }
    }

    static signup = async(req, res)=>{
        try {
            const {username, name, password, email, number} = req.body;
            const validate1 = await AdminModel.findOne({username});
            const validate2 = await AdminModel.findOne({email});
            if(validate1 && validate2)
            {
                res.json({success : false, message : "Please use different username and email"})
            }

            if(validate1)
            {
                res.json({success : false, message : "Please use different username"})
            }

            if(validate2)
            {
                res.json({success : false, message : "Please use different email"})
            }

            let adminUser = await AdminModel.create(req.body);
            res.json({success : true, message : "Admin Created Successfully "});
        } catch (error) {
            
        }
    }

    static getBookDetails = async (req, res)=>{
        try {
            const {admin_id} = req.body;
            const data = await adminIssueBook.find({issued_by : admin_id})
            
            res.json({success : true, message : data});
        } catch (error) {
        }
    }

    static setBookDetails = async (req, res)=>{
        try {
            
            const {book_model, issued_to, issued_by, image, book_id, student_name, book_name, book_author} = req.body;
            let resp = await storeAdminIssuedBooks(book_model, issued_to, issued_by, image, book_id, student_name, book_name, book_author);
            res.json({success : true, message : "Book successfully issued "})

        } catch (error) {
            
        }
    }

    static deleteIssuedBook = async(req, res)=>{
        try {
            const {book_id} = req.body
            let resp = await adminIssueBook.deleteOne({book_id});
            res.json({succcess : true})
        } catch (error) {
        }
    }
}

export default Admin