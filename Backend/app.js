import express from 'express';
import adminRouter from './routes/AdminRoutes.js';
import userRouter from './routes/UserRoutes.js';
import cors from 'cors';
import booksRouter from './routes/BookRoutes.js';
const port = 8000;
const app = express();


app.use(cors());
app.use(express.json())

app.use('/admin', adminRouter);

app.use('/user', userRouter);

app.use('/books', booksRouter)

app.listen(port, ()=>{
    console.log('backend is running ');
})