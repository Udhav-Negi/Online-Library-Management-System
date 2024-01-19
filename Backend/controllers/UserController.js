import userIssueBook from "../models/IssueModel/IssueModelUser.js";
import UserModel from "../models/UserModel.js";


async function storeUserIssuedBooks(model, issued_to, issued_by, image, book_id, admin_name, book_name, book_author)
{
    try {
        if(model == 'Biotech')
        {
            let resp = await userIssueBook.create({book_model : model, issued_to, issued_by, image, book_id, admin_name, book_name, book_author});
            return resp;
        }
        else if(model == 'Civil Engineering')
        {
            let resp = await userIssueBook.create({book_model : model, issued_to, issued_by, image, book_id, admin_name, book_name, book_author});
            return resp;
        }
        else if(model == 'Computer Science')
        {
            let resp = await userIssueBook.create({book_model : model, issued_to, issued_by, image, book_id, admin_name, book_name, book_author});
            return resp;
        }
        else if(model == 'Electronics and Communication Engineering')
        {
            try {
                let resp = await userIssueBook.create({book_model : model, issued_to, issued_by, image, book_id, admin_name, book_name, book_author});
                return resp;
                
            } catch (error) {
                
            }
        }
        else if(model == 'Finance')
        {
            let resp = await userIssueBook.create({book_model : model, issued_to, issued_by, image, book_id, admin_name, book_name, book_author});
            return resp;
        }
        else if(model == 'Marketing')
        {
            let resp = await userIssueBook.create({book_model : model, issued_to, issued_by, image, book_id, admin_name, book_name, book_author});
            return resp;
        }
        else if(model == 'Mechanical')
        {
            let resp = await userIssueBook.create({book_model : model, issued_to, issued_by, image, book_id, admin_name, book_name, book_author});
            return resp;
        }
        else 
        {
            console.log('entered into else ')
        }
    } catch (error) {
        
    }
}


let succcess, message;
class User {
    static login = async (req, res)=>{
        try {
            const {username, email} = req.body;
            const user = await UserModel.findOne({username});

            if(!user || user.email !== email)
            {
                res.json({success : false, message : "Please enter valid credential"});
            }

            res.json({success : true, message : "Login successfull", id : user._id, user : user.name})
        } catch (error) {
            
        }
    }

    static signup = async (req, res)=>{
        try {
            const {username, name, email, number} = req.body;
            const validate1 = await UserModel.findOne({username});
            const validate2 = await UserModel.findOne({email});
    
            if(validate1 || validate2)
            {
                res.json({success : false, message : "Please use different username and email"})
            }

            if(validate1)
            {
                res.json({success : false, message : "Please use different username"})
            }

            if(validate2)
            {
                res.json({success : false, message : "Please use different email "})
            }
            
            let user = await UserModel.create(req.body);
            res.json({success : true, message : "User successfully created "})
            
        } catch (error) {
        }
    }

    static check = async (req, res)=>{
        try {
            const {name, email} = req.body;
            let user = await UserModel.findOne({email});
            if(!user || user.name != name)
            {
                res.json({success : false, message : "Invalid Credentials"})
            }
            else 
            {
                res.json({success : true, message : "Correct Details", data : user})
            }
        } catch (error) {
            
        }
    }

    static setBookDetails = async (req, res)=>{
        
        try {
            
            const {book_model, issued_to, issued_by, image, book_id, admin_name, book_name, book_author, } = req.body;
            let resp = await storeUserIssuedBooks(book_model, issued_to, issued_by, image, book_id, admin_name, book_name, book_author);
            res.json({success : true, message : "Book successfully issued to student"})

        } catch (error) {
            
        }
    }
   
    static getBookDetails = async (req, res)=>{
        
        try {
            const {issued_to} = req.body;
            const data = await userIssueBook.find({issued_to});
            if(data)
            {
                res.json({success : true, data : data})
            }
            else 
            {
                res.json({success : false, data : []})
            }
            
        } catch (error) {
            
        }
    }

    static deleteIssuedBook = async(req, res)=>{
        try {
            const {id} = req.body

            let resp = await userIssueBook.findByIdAndDelete(id);
            res.json({succcess : true})
        } catch (error) {
            
        }
    }
}

export default User;