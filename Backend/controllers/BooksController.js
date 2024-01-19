import BtModel from "../models/BooksModel/BtModel.js";
import CivilModel from "../models/BooksModel/CivilModel.js";
import CsModel from "../models/BooksModel/CsModel.js";
import EceModel from "../models/BooksModel/EceModel.js";
import FinModel from "../models/BooksModel/FinanceModel.js";
import MarkModel from "../models/BooksModel/MarketingModel.js";
import MechModel from "../models/BooksModel/MechModel.js";
import fetch from "node-fetch"

let obj = {
    name : "",
    author : "",
    image : "",
    year : "",
    type : "",
    count : 0
}

async function checkEmptyCollection(model){
    try {
        let users = await model.find();
        if(users.length == 0)
        return true;
        return false;
        
    } catch (error) {
    }
}

async function getBooks(){
    let data = await fetch('https://freetestapi.com/api/v1/books');
    data = await data.json();
    return data;
}

function storeBooks(books, model){ // This function will fetch data from api 
    books.forEach(async (elem)=>{
        await model.create(elem);
    })
}

async function updateBook(model, id, dec=-1)
{
    try {
        let book = await model.findByIdAndUpdate(id, {$inc : {count : dec}}, {returnOriginal : false});
        return book;
    } catch (error) {
        
    }
}

class Books{
    static cs = async (req, res)=>{
        try {
            let empty = await checkEmptyCollection(CsModel)
            let books = [];
            let data = [];
            
            if(empty)
            {
                data = await getBooks();
                data.forEach((elem)=>{
                    obj.name = elem.title
                    obj.author = elem.author
                    obj.image = elem.cover_image
                    obj.year = elem.publication_year 
                    obj.type = "Computer Science"
                    obj.count = 20
                    books.push(obj);
                })
                storeBooks(books, CsModel);
            }
            books = await CsModel.find();
            res.json({success : true, data : books})
        }
        catch (error) {
            res.json({success : false, data : "failed"})
        }
        
    }

    static updateCs = async (req, res)=>{
        try {
            const {id, dec} = req.body;
            let resp = await updateBook(CsModel, id, dec);
            res.json({success : true, message : "Book Issued", data : resp})
        } catch (error) {
            
        }
    }

    static ece = async (req, res)=>{
        try {
            let empty = await checkEmptyCollection(EceModel)
            let books = [];
            let data = [];
            
            if(empty)
            {
                data = await getBooks();
                data.forEach((elem)=>{
                    obj.name = elem.title
                    obj.author = elem.author
                    obj.image = elem.cover_image
                    obj.year = elem.publication_year 
                    obj.type = "Electronics and Communication Engineering"
                    obj.count = 20
                    books.push(obj);
                })
                storeBooks(books, EceModel);
            }
            books = await EceModel.find();
            res.json({success : true, data : books})
        }
        catch (error) {
            res.json({success : false, data : "failed"})
        }
    }

    static updateEce = async (req, res)=>{
        try {
            const {id, dec} = req.body;
            let resp = await updateBook(EceModel, id, dec);
            res.json({success : true, message : "Book Issued", data : resp})
        } catch (error) {
            
        }
    }

    static ce = async (req, res)=>{
        try {
            let empty = await checkEmptyCollection(CivilModel)
            let books = [];
            let data = [];
            
            if(empty)
            {
                data = await getBooks();
                data.forEach((elem)=>{
                    obj.name = elem.title
                    obj.author = elem.author
                    obj.image = elem.cover_image
                    obj.year = elem.publication_year 
                    obj.type = "Civil Engineering"
                    obj.count = 20
                    books.push(obj);
                })
                storeBooks(books, CivilModel);
            }
            books = await CivilModel.find();
            res.json({success : true, data : books})
        }
        catch (error) {
            res.json({success : false, data : "failed"})
        }
    }

    static updateCe = async (req, res)=>{
        try {
            const {id, dec} = req.body;
            let resp = await updateBook(CivilModel, id, dec);
            res.json({success : true, message : "Book Issued", data : resp})
        } catch (error) {
            
        }
    }

    static me = async (req, res)=>{
        try {
            let empty = await checkEmptyCollection(MechModel)
            let books = [];
            let data = [];
            
            if(empty)
            {
                data = await getBooks();
                data.forEach((elem)=>{
                    obj.name = elem.title
                    obj.author = elem.author
                    obj.image = elem.cover_image
                    obj.year = elem.publication_year 
                    obj.type = "Mechanical Engineering"
                    obj.count = 20
                    books.push(obj);
                })
                storeBooks(books, MechModel);
            }
            books = await MechModel.find();
            res.json({success : true, data : books})
        }
        catch (error) {
            res.json({success : false, data : "failed"})
        }
    }

    static updateMe = async (req, res)=>{
        try {
            const {id, dec} = req.body;
            let resp = await updateBook(MechModel, id, dec);
            res.json({success : true, message : "Book Issued", data : resp})
        } catch (error) {
            
        }
    }

    static bt = async (req, res)=>{
        try {
            let empty = await checkEmptyCollection(BtModel)
            let books = [];
            let data = [];
            
            if(empty)
            {
                data = await getBooks();
                data.forEach((elem)=>{
                    obj.name = elem.title
                    obj.author = elem.author
                    obj.image = elem.cover_image
                    obj.year = elem.publication_year 
                    obj.type = "Biotechnology"
                    obj.count = 20
                    books.push(obj);
                })
                storeBooks(books, BtModel);
            }
            books = await BtModel.find();
            res.json({success : true, data : books})
        }
        catch (error) {
            res.json({success : false, data : "failed"})
        }
    }

    static updateBt = async (req, res)=>{
        try {
            const {id, dec} = req.body;
            let resp = await updateBook(BtModel, id, dec);
            res.json({success : true, message : "Book Issued", data : resp})
        } catch (error) {
            
        }
    }

    static fin = async (req, res)=>{
        try {
            let empty = await checkEmptyCollection(FinModel)
            let books = [];
            let data = [];
            
            if(empty)
            {
                data = await getBooks();
                data.forEach((elem)=>{
                    obj.name = elem.title
                    obj.author = elem.author
                    obj.image = elem.cover_image
                    obj.year = elem.publication_year 
                    obj.type = "Finance"
                    obj.count = 20
                    books.push(obj);
                })
                storeBooks(books, FinModel);
            }
            books = await FinModel.find();
            res.json({success : true, data : books})
        }
        catch (error) {
            res.json({success : false, data : "failed"})
        }
    }

    static updateFin = async (req, res)=>{
        try {
            const {id, dec} = req.body;
            let resp = await updateBook(FinModel, id, dec);
            res.json({success : true, message : "Book Issued", data : resp})
        } catch (error) {
            
        }
    }

    static mark = async (req, res)=>{
        try {
            let empty = await checkEmptyCollection(MarkModel)
            let books = [];
            let data = [];
            
            if(empty)
            {
                data = await getBooks();
                data.forEach((elem)=>{
                    obj.name = elem.title
                    obj.author = elem.author
                    obj.image = elem.cover_image
                    obj.year = elem.publication_year 
                    obj.type = "Marketing"
                    obj.count = 20
                    books.push(obj);
                })
                storeBooks(books, MarkModel);
            }
            books = await MarkModel.find();
            res.json({success : true, data : books})
        }
        catch (error) {
            res.json({success : false, data : "failed"})
        }
    }

    static updateMark = async (req, res)=>{
        try {
            const {id, dec} = req.body;
            let resp = await updateBook(MarkModel, id, dec);
            res.json({success : true, message : "Book Issued", data : resp})
        } catch (error) {
            
        }
    }
}

export default Books