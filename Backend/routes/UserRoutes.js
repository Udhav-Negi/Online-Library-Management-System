import express from 'express';
const userRouter = express.Router();
import User from '../controllers/UserController.js';

// The follwoing two routes are for login ad sign up of User 
userRouter.post('/login', User.login);
userRouter.post('/signup', User.signup);

userRouter.post('/check', User.check) // This endpoint is to check the details of the user while issuing the book

userRouter.post('/setBook', User.setBookDetails) // This endpoint is to set the book details of issued book to the user account 

// The end point that will be created here will be to get all the books issued to the user 
userRouter.post('/detail', User.getBookDetails)

// This endpoint will delete the book issued by the user 
userRouter.delete('/deleteissuedbook', User.deleteIssuedBook)

export default userRouter;