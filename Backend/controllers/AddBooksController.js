import mongoose from "mongoose";
import BtModel from "../models/BooksModel/BtModel.js";
import CivilModel from "../models/BooksModel/CivilModel.js";
import EceModel from "../models/BooksModel/EceModel.js";
import FinModel from "../models/BooksModel/FinanceModel.js";
import MechModel from "../models/BooksModel/MechModel.js";
import MarkModel from "../models/BooksModel/MarketingModel.js";
import CsModel from "../models/BooksModel/CsModel.js";



const addBooksToModel = async (name, type, author, image, count)=>{
    try {
        if(type == "Biotechnology")
        {
            try{
                let doc = await BtModel.create({name, type, author, image, count})
            }
            catch(error)
            {
                
            }
        }
        else if(type == "Civil Engineering")
        {
            try {
                let doc = await CivilModel.create({name, type, author, image, count})
            } catch (error) {
                
            }
        }
        else if(type == "Computer Science")
        {
            try {
                let doc = await CsModel.create(({name, type, author, image, count}))
            } catch (error) {
                
            }
        }
        else if(type == "Electronics and Communication Engineering")
        {
            try {
                let doc = await EceModel.create(({name, type, author, image, count}))
            } catch (error) {
                
            }
        }
        else if(type == "Finance")
        {
            try {
                let doc = await FinModel.create(({name, type, author, image, count}))
            } catch (error) {
                
            }
        }

        else if(type == "Marketing")
        {
            try {
                let doc = await MarkModel.create(({name, type, author, image, count}))
            } catch (error) {
                
            }
        }
        else if(type == "Mechanical Engineering")
        {
            try {
                let doc = await MechModel.create(({name, type, author, image, count}))
            } catch (error) {
                
            }
        }
    } catch (error) {
        
    }
}

class AddBooks{
    static addBooks = async (req, res) =>
    {
        
        try {
            const {name, type, author, image, count} = req.body;
            let resp = await addBooksToModel(name, type, author, image, count);
            res.json({success : true, message : "Book added successfully"})
        } 
        catch (error) {
            
        }    
    }
}

export default AddBooks