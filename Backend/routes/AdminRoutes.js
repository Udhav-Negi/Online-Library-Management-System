import express from 'express';
const adminRouter = express.Router();
import Admin from '../controllers/AdminController.js';

// The follwoing two routes are for login ad sign up of admin 
adminRouter.post('/login', Admin.login);
adminRouter.post('/signup', Admin.signup);

adminRouter.post('/setbook', Admin.setBookDetails)
adminRouter.post('/detail', Admin.getBookDetails); // This endpoint is to get the details of the books which are issued by admin

// This endpoint will delete the note from the admin account 
adminRouter.delete('/deleteissuedbook', Admin.deleteIssuedBook)
export default adminRouter;